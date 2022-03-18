const elems = {};
[
    elems.ax, elems.ay, elems.az,
    elems.sx, elems.sy, elems.sz,
    elems.dx, elems.dy, elems.dz,
    elems.ox, elems.oy, elems.oz,
    elems.tx, elems.ty, elems.tz,
] = document.querySelectorAll(".values-container .values");

window.addEventListener("devicemotion", event => {
    const {acceleration} = event.acceleration;
    elems.ax.textContent = acceleration.x.toFixed(5);
    elems.ay.textContent = acceleration.y.toFixed(5);
    elems.az.textContent = acceleration.z.toFixed(5);
})