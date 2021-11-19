const bgimgs = JSON.parse(eventObj);
let canvas = document.getElementById('paint');
let ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

console.log(bgimgs[8])

const img1 = document.getElementById('img0');
img1.addEventListener('click', function () {
    var background = new Image();
    background.src = bgimgs[0];
    
    background.onload = function () {
        ctx.drawImage(background, 0, 0, 500, 500);
    }
})
const img2 = document.getElementById('img1');
img2.addEventListener('click', function () {
    var background = new Image();
    background.src = bgimgs[1];
    
    background.onload = function () {
        ctx.drawImage(background, 0, 0, 500, 500);
    }
})

const img3 = document.getElementById('img2');
img3.addEventListener('click', function () {
    var background = new Image();
    background.src = bgimgs[2];
    
    background.onload = function () {
        ctx.drawImage(background, 0, 0, 500, 500);
    }
})

const img4 = document.getElementById('img3');
img4.addEventListener('click', function () {
    var background = new Image();
    background.src = bgimgs[3];
    
    background.onload = function () {
        ctx.drawImage(background, 0, 0, 500, 500);
    }
})

const img5 = document.getElementById('img4');
img5.addEventListener('click', function () {
    var background = new Image();
    background.src = bgimgs[4];
    
    background.onload = function () {
        ctx.drawImage(background, 0, 0, 500, 500);
    }
})

const img6 = document.getElementById('img5');
img6.addEventListener('click', function () {
    var background = new Image();
    background.src = bgimgs[5];
    
    background.onload = function () {
        ctx.drawImage(background, 0, 0, 500, 500);
    }
})

const img7 = document.getElementById('img6');
img7.addEventListener('click', function () {
    var background = new Image();
    background.src = bgimgs[6];
    
    background.onload = function () {
        ctx.drawImage(background, 0, 0, 500, 500);
    }
})

const img8 = document.getElementById('img7');
img8.addEventListener('click', function () {
    var background = new Image();
    background.src = bgimgs[7];
    
    background.onload = function () {
        ctx.drawImage(background, 0, 0, 500, 500);
    }
})

const img9 = document.getElementById('img8');
img9.addEventListener('click', function () {
    var background = new Image();
    background.src = bgimgs[8];
    
    background.onload = function () {
        ctx.drawImage(background, 0, 0, 500, 500);
    }
})
