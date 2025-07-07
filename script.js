
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const startBtn = document.getElementById('start');

function updateSlide() {
  slides.forEach((slide, idx) => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  prevBtn.style.display = currentSlide === 0 ? 'none' : 'inline-block';
  nextBtn.style.display = currentSlide === slides.length - 1 ? 'none' : 'inline-block';
  startBtn.style.display = currentSlide === slides.length - 1 ? 'inline-block' : 'none';
}

nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlide();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
});

startBtn.addEventListener('click', () => {
  window.location.href = "home.html"; // Placeholder for actual home screen
});

updateSlide();
