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
    color = event.target.value;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let canvasColorVal = document.getElementById('canvasColorValue');
    canvasColorVal.innerHTML = color;

}


let penColorPicker = document.getElementById('penColor');
let penColor = penColorPicker.value;
penColorPicker.addEventListener("change", pickPenColor);

function pickPenColor(event) {
    color = event.target.value;
    ctx.strokeStyle = color;

    let penColorVal = document.getElementById('penColorValue');
    penColorVal.innerHTML = color;

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
        console.log(mouse.x)
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

    // console.log("moveTo", mouse.x)
    let startx = mouse.x
    let starty = mouse.y

    // console.log(checkShape)
    if (checkShape === true) {
        console.log('yes im a shape')
        // canvas.addEventListener('mousemove', function (e) {
            if (shape === 'circle') {
                console.log(mouse.x)
                canvas.addEventListener('mousemove', function (e) {
                    ctx.fillStyle = ctx.strokeStyle;
                    let endx = mouse.x;
                    let endy = mouse.y;
                    console.log(`onset ${mouse.x} offset ${startx}`)
                    console.log(`onset ${mouse.y} offset ${starty}`)
                    if (startx != null || starty != null) {
                        ctx.arc(startx, starty, 5, 0, 2 * Math.PI);
                        ctx.stroke();
                    }

                    startx = null
                    starty = null


                    canvas.removeEventListener('mousemove', function () {
                        console.log('done')
                    }, false);
                }, false);
        
            } else if (shape === 'square') {
                canvas.addEventListener('mousedown', function (e) {
                    
                    let endx = mouse.x;
                    let endy = mouse.y;

                    console.log(`startx: ${startx} endx: ${endx}`)

                    if (startx != null || starty != null) {
                        ctx.fillStyle = ctx.strokeStyle;
                        ctx.strokeRect(endx, endy, Math.abs(startx-endx+1), Math.abs(starty-endy+1));
                    }
                
                    startx = null
                    starty = null


                    canvas.removeEventListener('mousemove', function () {
                        console.log('done')
                    }, false);
                }, false);
        
            } else if (shape === 'triangle') {
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fillRect(200, 200, 100, 150);
            }
        // }, false);
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
