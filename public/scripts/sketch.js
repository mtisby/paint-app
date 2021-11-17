let checkShape = null;
let shape = null;

let shapes = ['pen', 'circle', 'square', 'circle']
var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 1000;
canvas.height = 1000;

var mouse = { x: 0, y: 0 };

let canvasColorPicker = document.getElementById('canvasColor');
let canvasColor = canvasColorPicker.value;
canvasColorPicker.addEventListener("change", pickCanvasColor);

function pickCanvasColor(event) {
    console.log('CANVAS')
    color = event.target.value;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let canvasColorVal = document.getElementById('canvasColorValue');
    canvasColorVal.value = color;

}


let penColorPicker = document.getElementById('penColor');
let penColor = penColorPicker.value;
penColorPicker.addEventListener("change", pickPenColor);

function pickPenColor(event) {
    color = event.target.value;
    ctx.strokeStyle = color;

    let penColorVal = document.getElementById('penColorValue');
    penColorVal.value = color;

}

let pxPicker = document.getElementById('pxSize');
let pxSize = pxPicker.value;
pxPicker.addEventListener("input", pickPX);

function pickPX(event) {
    px = event.target.value;
    ctx.lineWidth = px;
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

    return link.href
} 

let downloadBtn = document.getElementById('download');
let data = downloadBtn.addEventListener("click", download, false);


function setPenTip(event) {
    ctx.lineCap = event.target.value;
}
let selectPenTip = document.getElementById('size');
selectPenTip.addEventListener("change", setPenTip);


function setShape(event) {
    if (shape === 'circle') {
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fillRect(200, 200, 100, 150);


    } else if (shape === 'square') {
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fillRect(50, 50, 400, 150);

    } else if (shape === 'triangle') {
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fillRect(200, 200, 100, 150);
    }
}

let selectShape = document.getElementById('shape');
selectShape.addEventListener("change", function (event) {
    shape = event.target.value; 
    if (shape === "pen") {
        console.log('yuurp')
        checkShape = false;
    } else {
        checkShape = true;
    }
});



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

    console.log(checkShape)
    if (checkShape === true) {
        console.log('yes im a shape')
        canvas.addEventListener('mousemove', setShape, false);
    } else {
        console.log('yes im pen')
        canvas.addEventListener('mousemove', onPaint, false);
    }
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};
