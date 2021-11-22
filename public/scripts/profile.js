const imgArray = JSON.parse(imgArr);

if (imgArray.length === 0) {
    const container = document.querySelector('.profileGallery');
    const text = document.createElement('a');
    text.innerHTML = "get doodling!"
    text.href = "/sketch"
    text.classList.add('getDoodling')

    container.appendChild(text)
}
