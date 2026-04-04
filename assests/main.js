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

const modal = document.querySelector(".modal");
const openBtns = document.querySelectorAll(".open_modal");
const closeBtn = document.querySelector(".modal_close");
const overlay = document.querySelector(".modal_overlay");

// OPEN
openBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    modal.classList.add("active");
  });
});

// CLOSE
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
});

const toggle = document.querySelector(".mobile_toggle");
const menu = document.querySelector(".mobile_menu");
const closeBtn2 = document.querySelector(".mobile_close");
const overlay2 = document.querySelector(".mobile_overlay");

// OPEN
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});

// CLOSE
closeBtn2.addEventListener("click", () => {
  toggle.classList.remove("active");
  menu.classList.remove("active");
});

overlay2.addEventListener("click", () => {
  toggle.classList.remove("active");
  menu.classList.remove("active");
});