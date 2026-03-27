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