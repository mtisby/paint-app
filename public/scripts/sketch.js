let checkShape = null;
let shape = null;
let startx = null;
let starty = null;
let previousx = null;
let previousy = null;


let shapes = ['pen', 'circle', 'square', 'circle']
var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = 500;
canvas.height = 500;

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

    console.log(link.href)
} 

let downloadBtn = document.getElementById('download');
let data = downloadBtn.addEventListener("click", download, false);


function setPenTip(event) {
    ctx.lineCap = event.target.value;
    ctx.lineJoin = 'butt';
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

function drawSqure(event) {
    let endx = mouse.x;
    let endy = mouse.y;

    console.log(`startx : ${startx} end: ${endx}`)
    console.log(startx, previousx)

    if (previousx != startx || previousy != starty) {
        ctx.fillStyle = ctx.strokeStyle;
        ctx.strokeRect(startx, starty, Math.abs(startx - endx + 1), Math.abs(starty - endy + 1));
    }


    previousx = endx;
    previousy = endy;

    endx = null;
    endy = null;
    startx = null;
    starty = null;
}

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
    startx = mouse.x
    starty = mouse.y

    // console.log(checkShape)
    if (checkShape === true) {
        console.log('yes im a shape')
            if (shape === 'circle') {
                // console.log(mouse.x)
                // canvas.addEventListener('mousemove', function (e) {
                //     ctx.fillStyle = ctx.strokeStyle;
                //     let endx = mouse.x;
                //     let endy = mouse.y;
                //     console.log(`onset ${mouse.x} offset ${startx}`)
                //     console.log(`onset ${mouse.y} offset ${starty}`)
                //     if (startx != null || starty != null) {
                //         ctx.arc(startx, starty, 5, 0, 2 * Math.PI);
                //         ctx.stroke();
                //     }

                //     startx = null
                //     starty = null


                //     canvas.removeEventListener('mousemove', function () {
                //         console.log('done')
                //     }, false);
                // }, false);
        
            } else if (shape === 'square') {
                console.log('hello0')
                canvas.addEventListener('mousedown', drawSqure, true)

            } else if (shape === 'triangle') {
                ctx.fillStyle = ctx.strokeStyle;
                ctx.fillRect(200, 200, 100, 150);
            }
    } else {
        console.log('yes im pen')
        canvas.addEventListener('mousemove', onPaint, false);
    }
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);

canvas.removeEventListener('mousedown', drawSqure, true);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};


let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);

let saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();

    // save link.href to cloudinary
}, false);

// square
// function (e) {
//     // canvas.addEventListener('mousedown', function (e) {
//         let endx = mouse.x;
//         let endy = mouse.y;

//         console.log(`startx : ${startx} end: ${endx}`)

//         ctx.fillStyle = ctx.strokeStyle;
//         ctx.strokeRect(startx, starty, Math.abs(startx - endx + 1), Math.abs(starty - endy + 1));
        
//     // }, false);

//     // if (startx != null || starty != null) {
//     //     ctx.fillStyle = ctx.strokeStyle;
//     //     ctx.strokeRect(endx, endy, Math.abs(startx-endx+1), Math.abs(starty-endy+1));
//     // }
// }, false);