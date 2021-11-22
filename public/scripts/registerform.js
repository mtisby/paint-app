let dog1Img = document.getElementById("dog1Img");
let dog2Img = document.getElementById("dog2Img");
let dog3Img = document.getElementById("dog3Img");

let selector = document.getElementById('profilePicture');
console.log(selector)

function getImg(event) {
    console.log(event.target.id)
    console.log(typeof event.target.id)

    if (event.target.id === "dog1Img") {
        console.log('dog1')
        selector.selectedIndex = 0;
        dog1Img.classList.add('profileBorder')
        dog2Img.classList.remove('profileBorder')
        dog3Img.classList.remove('profileBorder')
        console.log(selector.value)
    } else if (event.target.id === "dog2Img") {
        console.log('dog2')
        selector.selectedIndex = 1;
        dog1Img.classList.remove('profileBorder')
        dog2Img.classList.add('profileBorder')
        dog3Img.classList.remove('profileBorder')
        console.log(selector.value)
    } else {
        console.log('dog3')
        selector.selectedIndex = 2;
        dog1Img.classList.remove('profileBorder')
        dog2Img.classList.remove('profileBorder')
        dog3Img.classList.add('profileBorder')
        console.log(selector.value)
    }
}


dog1Img.addEventListener("click", getImg, false)
dog2Img.addEventListener("click", getImg, false)
dog3Img.addEventListener("click", getImg, false)
