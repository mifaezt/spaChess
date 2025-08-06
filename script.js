// Бегущая строка: ставим на паузу при наведении
const ticker = document.querySelector(".ticker span");
const tickerWrapper = document.querySelector(".ticker");

tickerWrapper.addEventListener("mouseenter", () => {
  ticker.style.animationPlayState = "paused";
});

tickerWrapper.addEventListener("mouseleave", () => {
  ticker.style.animationPlayState = "running";
});

// Карусель
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
let index = 0;

const updateCarousel = () => {
  const itemWidth = carousel.querySelector(".participant-item").offsetWidth;
  carousel.style.transform = `translateX(-${index * itemWidth}px)`;
};

nextBtn.addEventListener("click", () => {
  if (index < carousel.children.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Пересчитываем при ресайзе
window.addEventListener("resize", updateCarousel);
