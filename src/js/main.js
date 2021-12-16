projectsSlider = new Swiper('.projects__slider', {
  loop: !0,
  loopedSlides: 20,
  observer: !0,
  observeParents: !0,
  slidesPerView: 'auto',
  centeredSlides: !0,
  autoHeight: !1,
  speed: 800,
  spaceBetween: 0,

  navigation: {
    nextEl: '.projects__slider-btn--next',
    prevEl: '.projects__slider-btn--prev'
  }
});
