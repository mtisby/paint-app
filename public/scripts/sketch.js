var canvas = document.getElementById('paint');
console.log(canvas)
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 1000;
canvas.height = 1000;

var mouse = { x: 0, y: 0 };


let penColorPicker = document.getElementById('penColor');
let penColor = penColorPicker.value;
penColorPicker.addEventListener("change", pickPenColor);

function pickPenColor(event) {
    color = event.target.value;
    ctx.strokeStyle = color;
    function getColor(colour){ctx.strokeStyle = color;}
}

let pxPicker = document.getElementById('pxSize');
let pxSize = pxPicker.value;
pxPicker.addEventListener("input", pickPX);

function pickPX(event) {
    console.log(event)
    px = event.target.value;
    ctx.lineWidth = px;
    function getSize(size){ctx.lineWidth = px;}
}

let saveBtn = document.getElementById('save');
saveBtn.addEventListener("click", save);

function save(event) {
    console.log(event);
    console.log(ctx)
    ctx.save()
}

function download(event) {
    // var canvas = document.getElementById("paint");
    // var img    = canvas.toDataURL("image/png");
    // document.write('<img src="'+img+'"/>');
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
} 

let downloadBtn = document.getElementById('download');
downloadBtn.addEventListener("click", download, false);


function pickCanvasColor(event) {
    color = event.target.value;
    console.log(color)
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

let canvasColorPicker = document.getElementById('canvasColor');
canvasColorPicker.addEventListener("change", pickCanvasColor);

/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

/* Drawing on Paint App */
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

function getSize(size){ctx.lineWidth = 2;}
 
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};