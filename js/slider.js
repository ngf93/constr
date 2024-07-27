const swiper1 = new Swiper('.swiper-reviews', {
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

const swiper2 = new Swiper('.swiper-brands', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
  }
});

const swiper3 = new Swiper('.swiper-photos', {
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
      crossFade: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper4 = new Swiper(".swiper-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper5 = new Swiper(".swiper-projectImg", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper4,
  },
});