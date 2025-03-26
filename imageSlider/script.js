
const images = [
    'images/IMG_20220703_173758_916.jpg',
    'images/IMG_20220709_161208_310.jpg',
    'images/IMG_20221107_071533_564.jpg',
    'images/IMG_20221112_191706_441.jpg',
    'images/IMG_20221209_212133_891.jpg'
];

const sliderImage = document.getElementById('slider-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentImageIndex = 0;

function updateImage() {
    sliderImage.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

prevBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);

updateImage(); 