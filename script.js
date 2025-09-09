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

let index = 0; // текущая страница
let itemsPerPage = 3; // по умолчанию

// считаем, сколько карточек помещается
function updateItemsPerPage() {
  if (window.innerWidth < 600) {
    itemsPerPage = 1;
  } else if (window.innerWidth < 1024) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 3;
  }
}

// обновляем смещение
function updateCarousel() {
  const itemWidth =
    carousel.querySelector(".participant-item").offsetWidth + 16; // ширина + margin-right
  carousel.style.transform = `translateX(-${
    index * itemWidth * itemsPerPage
  }px)`;
}

// кнопка "вперёд"
nextBtn.addEventListener("click", () => {
  const maxIndex = Math.ceil(carousel.children.length / itemsPerPage) - 1;
  if (index < maxIndex) {
    index++;
    updateCarousel();
  }
});

// кнопка "назад"
prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// ресайз
window.addEventListener("resize", () => {
  updateItemsPerPage();
  updateCarousel();
});

// инициализация
updateItemsPerPage();
updateCarousel();
