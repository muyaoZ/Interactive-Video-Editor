// add the following to main.css for draw.js to run smoothly
// canvas {
//     pointer-events:none;
// }

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let cw = canvas.width = 800,
cx = cw / 2;
let ch = canvas.height = 400,
cy = ch / 2;
ctx.strokeStyle = "#FF0000";

let drawing = false;

function addrect() {
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
}

// a function to detect the mouse position
function oMousePos(element, evt) {
    var ClientRect = element.getBoundingClientRect();
        return { //objeto
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top)
        }
}  
parentDiv.addEventListener('mousedown', function(evt) {
    drawing = true; // you can draw now
    let m = oMousePos(parentDiv, evt);
    ctx.beginPath();
    ctx.moveTo(m.x,m.y);
}, false);

parentDiv.addEventListener('mouseup', function(evt) {
    drawing = false; // you can't draw anymore

}, false);
parentDiv.addEventListener('mouseleave', function(evt) {
    drawing = false; // you can't draw anymore

}, false);

parentDiv.addEventListener("mousemove", function(evt) {
    if (drawing) {
        let m = oMousePos(parentDiv, evt);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
    }
}, false);