const HotelSlider = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  // effect: 'cube',
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  
  loop: true,

  
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  
});
var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function() {
  document.querySelector('.navbar-buttom').classList.toggle('navbar-active');
})