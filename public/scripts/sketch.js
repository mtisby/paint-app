let checkShape = null;
let shape = null;
let startx = null;
let starty = null;
let previousx = null;
let previousy = null;

let countClicks = 0;

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

function squareCoordinateTwo() {
    endIndx = mouse.x
    endIndy = mouse.y

    console.log(`startx : ${startx} end: ${endIndx}`)

    ctx.fillStyle = ctx.strokeStyle;
    ctx.strokeRect(startx, starty, Math.abs(startx - endIndx + 1), Math.abs(starty - endIndx + 1));
}

function drawSqure(event) {
    canvas.addEventListener('mousedown', squareCoordinateTwo, true)
    canvas.addEventListener('mouseup', function () {
        canvas.removeEventListener('mousedown', squareCoordinateTwo, true)
    })
    
    // let endx = mouse.x;
    // let endy = mouse.y;

    // console.log(`startx : ${startx} end: ${endx}`)

    // if (previousx != startx || previousy != starty) {
    //     ctx.fillStyle = ctx.strokeStyle;
    //     ctx.strokeRect(startx, starty, Math.abs(startx - endx + 1), Math.abs(starty - endy + 1));
    // }

    // startx = endx
    // starty = endy
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

function startPaint() {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y); 
    canvas.addEventListener('mousemove', onPaint, false);
}

let startmex = null;
let startmey = null;

function slopeAndDirection(startmex, startmey, endmex, endmey) {
    let directionx = null;
    let directiony = null;

    if (startmex < endmex) {
        directionx = 'positive'
    } else {
        directionx = 'negative'
    }

    if (startmey < endmey) {
        directiony = 'positive'
    } else {
        directiony = 'negative'
    }

    return {directionx, directiony}
}

function drawRect(startmex, startmey) {
    let endmex = mouse.x;
    let endmey = mouse.y;
    ctx.fillStyle = ctx.strokeStyle;

    let sd = slopeAndDirection(startmex, startmey, endmex, endmey);
    let directionx = sd.directionx
    let directiony = sd.directiony

    console.log(directionx, directiony)

    if (directionx === 'positive' && directiony === 'positive') {
        console.log('++')
        ctx.strokeRect(startmex, startmey, Math.abs(startmex - mouse.x + 1), Math.abs(startmey - mouse.y + 1));
    } else if (directionx === 'negative' && directiony === 'positive') {
        console.log('-+')
        console.log(`startmex ${startmex}, endmey ${endmey}`)
        ctx.strokeRect(endmex, startmey, Math.abs(endmex - startmex + 1), Math.abs(endmey - startmey + 1));
    } else if (directionx === 'positive' && directiony === 'negative') {
        console.log('+-')
        ctx.strokeRect(startmex, endmey, Math.abs(endmex - startmex + 1), Math.abs(endmey - startmey + 1));
    } else if (directionx === 'negative' && directiony === 'negative') {
        console.log('--')
        ctx.strokeRect(endmex, endmey, Math.abs(endmex - startmex + 1), Math.abs(endmey - startmey + 1));
    }

}


function drawCircle(startmex, startmey) {
    let endmex = mouse.x;
    let endmey = mouse.y;
    ctx.beginPath();
    ctx.fillStyle = ctx.strokeStyle;

    let xdistance = Math.abs(startmex - endmex) + 1;
    let ydistance = Math.abs(startmey - endmey) + 1;

    let sd = slopeAndDirection(startmex, startmey, endmex, endmey);
    let directionx = sd.directionx
    let directiony = sd.directiony

    if (ydistance > xdistance) {
        if (directionx === 'positive' && directiony === 'positive') {
            console.log('++')
            let x = startmex + (xdistance/2)
            let y = startmey + (ydistance/2)
            ctx.arc(x, y, ydistance/2, 0, 2 * Math.PI);
            ctx.stroke();

        } else if (directionx === 'negative' && directiony === 'positive') {
            console.log('-+')
            let x = endmex + (xdistance/2)
            let y = startmey + (ydistance/2)
            ctx.arc(x, y, ydistance/2, 0, 2 * Math.PI);
            ctx.stroke();
            
        } else if (directionx === 'positive' && directiony === 'negative') {
            console.log('+-')
            let x = startmex + (xdistance/2)
            let y = endmey + (ydistance/2)
            ctx.arc(x, y, ydistance/2, 0, 2 * Math.PI);
            ctx.stroke();
            
        } else if (directionx === 'negative' && directiony === 'negative') {
            console.log('--')
            let x = endmex + (xdistance/2)
            let y = endmey + (ydistance/2)
            ctx.arc(x, y, ydistance/2, 0, 2 * Math.PI);
            ctx.stroke();
            
        }
    } else {
        if (directionx === 'positive' && directiony === 'positive') {
            console.log('++')
            let x = startmex + (xdistance/2)
            let y = startmey + (ydistance/2)
            ctx.arc(x, y, xdistance/2, 0, 2 * Math.PI);
            ctx.stroke();

        } else if (directionx === 'negative' && directiony === 'positive') {
            console.log('-+')
            let x = endmex + (xdistance/2)
            let y = startmey + (ydistance/2)
            ctx.arc(x, y, xdistance/2, 0, 2 * Math.PI);
            ctx.stroke();
            
        } else if (directionx === 'positive' && directiony === 'negative') {
            console.log('+-')
            let x = startmex + (xdistance/2)
            let y = endmey + (ydistance/2)
            ctx.arc(x, y, xdistance/2, 0, 2 * Math.PI);
            ctx.stroke();
            
        } else if (directionx === 'negative' && directiony === 'negative') {
            console.log('--')
            let x = endmex + (xdistance/2)
            let y = endmey + (ydistance/2)
            ctx.arc(x, y, xdistance/2, 0, 2 * Math.PI);
            ctx.stroke();
            
        }
    }
}

function drawLine(startmex, startmey) {
    ctx.beginPath();
    ctx.moveTo(startmex, startmey)
    ctx.lineTo(mouse.x, mouse.y)
    ctx.stroke();
}

function checkForShape() {
    if (checkShape === true) {
        if (shape === 'circle') {
            countClicks += 1;
            console.log(`countClicks ${countClicks}`)
            if (countClicks % 2 === 0) {
                console.log('end',mouse.x, mouse.y)
                drawCircle(startmex, startmey)
            } else {
                console.log('start', mouse.x, mouse.y)
                startmex = mouse.x
                startmey = mouse.y
            }

        } else if (shape === 'square') {
            // console.log(mouse.x, mouse.y)
            countClicks += 1;

            if (countClicks % 2 === 0) {
                console.log('end',mouse.x, mouse.y)
                drawRect(startmex, startmey)
            } else {
                console.log('start', mouse.x, mouse.y)
                startmex = mouse.x
                startmey = mouse.y
            }
            // canvas.addEventListener('mousedown', drawSqure, true)
            
        } else if (shape === 'line') {
            countClicks += 1;

            if (countClicks % 2 === 0) {
                console.log('LINE')
                drawLine(startmex, startmey)
            } else {
                startmex = mouse.x
                startmey = mouse.y
            }
            
        } else if (shape === 'pen') {
            canvas.addEventListener("mousedown", startPaint, false);
        }
    }
}

canvas.addEventListener("mousedown", startPaint, false);
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener("click", checkForShape, false)
