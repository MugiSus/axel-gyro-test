const elems = {};
[
    elems.interval,
    elems.at,
    elems.ax, elems.ay, elems.az,
    elems.sx, elems.sy, elems.sz,
    elems.dx, elems.dy, elems.dz,
    elems.ot,
    elems.ox, elems.oy, elems.oz,
    elems.tx, elems.ty, elems.tz,
] = document.querySelectorAll(".values-container .values");

const accelerationThreshold = 1;
const rotationRateThreshold = 0.8;

const speed = {x: 0, y: 0, z: 0};
const displacement = {x: 0, y: 0, z: 0};
const theta = {x: 0, y: 0, z: 0};

let lastAccessTime = new Date().getTime();

window.addEventListener("devicemotion", event => {
    const {acceleration, rotationRate} = event;
    
    const intervalSeconds = (new Date().getTime() - lastAccessTime) / 1000;
    lastAccessTime = new Date().getTime();

    elems.interval.innerText = intervalSeconds.toFixed(3);
    if (intervalSeconds > 0.1) return;

    if (Math.abs(acceleration.x) > accelerationThreshold) speed.x += acceleration.x * intervalSeconds;
    if (Math.abs(acceleration.y) > accelerationThreshold) speed.y += acceleration.y * intervalSeconds;
    if (Math.abs(acceleration.z) > accelerationThreshold) speed.z += acceleration.z * intervalSeconds;
    
    displacement.x += speed.x * intervalSeconds;
    displacement.y += speed.y * intervalSeconds;
    displacement.z += speed.z * intervalSeconds;

    if (Math.abs(rotationRate.alpha) > rotationRateThreshold) theta.x += rotationRate.alpha * intervalSeconds;
    if (Math.abs(rotationRate.beta) >  rotationRateThreshold) theta.y += rotationRate.beta * intervalSeconds;
    if (Math.abs(rotationRate.gamma) > rotationRateThreshold) theta.z += rotationRate.gamma * intervalSeconds;


    elems.at.textContent = accelerationThreshold;
    
    elems.ax.textContent = acceleration.x.toFixed(5);
    elems.ay.textContent = acceleration.y.toFixed(5);
    elems.az.textContent = acceleration.z.toFixed(5);

    elems.sx.textContent = speed.x.toFixed(5);
    elems.sy.textContent = speed.y.toFixed(5);
    elems.sz.textContent = speed.z.toFixed(5);
    
    elems.dx.textContent = displacement.x.toFixed(5);
    elems.dy.textContent = displacement.y.toFixed(5);
    elems.dz.textContent = displacement.z.toFixed(5);

    elems.ot.textContent = rotationRateThreshold;
    
    elems.ox.textContent = rotationRate.alpha.toFixed(5);
    elems.oy.textContent = rotationRate.beta.toFixed(5);
    elems.oz.textContent = rotationRate.gamma.toFixed(5);

    elems.tx.textContent = theta.x.toFixed(5);
    elems.ty.textContent = theta.y.toFixed(5);
    elems.tz.textContent = theta.z.toFixed(5);
})