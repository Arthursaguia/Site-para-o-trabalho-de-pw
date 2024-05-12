let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}
