let path = window.location.pathname;
let imgLogo = document.getElementById('nav-logo');


if (path === "/") {
    imgLogo.src = "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637549784/paint-app/Untitled_9_mwhocr.png"
} else {
    imgLogo.src = "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637550633/paint-app/Untitled_10_bqvse4.png"
}