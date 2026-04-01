document.getElementById("year").textContent = new Date().getFullYear();

const projectsSwiper = new Swiper(".projectsSlider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".projects__progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  });

// Плавная анимация header при скролле
const headerEl = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentY = window.scrollY;

  if (currentY > 10) {
    headerEl.classList.add("header-scrolled");
  } else {
    headerEl.classList.remove("header-scrolled");
  }

  lastScrollY = currentY;
});