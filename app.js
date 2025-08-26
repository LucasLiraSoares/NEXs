// Carousel
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) slide.classList.add('active');
  });
}

prev.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : slides.length - 1;
  showSlide(index);
});

next.addEventListener('click', () => {
  index = (index < slides.length - 1) ? index + 1 : 0;
  showSlide(index);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
