let colorPicker = document.getElementById('color');
let color = colorPicker.value;
colorPicker.addEventListener("change", pickColor);

function pickColor(event) {
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


var canvas = document.getElementById('paint');
console.log(canvas)
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 1000;
canvas.height = 1000;

var mouse = {x: 0, y: 0};
 
/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

/* Drawing on Paint App */
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// ctx.strokeStyle = color;
// function getColor(colour){ctx.strokeStyle = color;}

function getSize(size){ctx.lineWidth = 2;}


//ctx.strokeStyle = 
//ctx.strokeStyle = document.settings.colour[1].value;
 
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