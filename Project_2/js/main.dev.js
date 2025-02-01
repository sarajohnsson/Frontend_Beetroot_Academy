"use strict";

// Calculate the height of the tallest slide
// Set that height to all other slides
// - Select all slides
// - Loop through the selected slides, no matter how many containers
// - Store the elements in a variable
// - Find the tallest slide
// - Set height to maximum height
// - Dynamically calculate height
function setEqualHeight() {
  var slides = document.querySelectorAll('.slider_testimonials');
  var maxHeight = 0;
  slides.forEach(function (slide) {
    slide.style.height = 'auto';

    if (slide.offsetHeight > maxHeight) {
      maxHeight = slide.offsetHeight;
    }

    slide.style.height = "".concat(maxHeight, "px");
  });
} // SLICK SLIDER


$(document).ready(function () {
  // Slick slider
  $('.vertical_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    speed: 800,
    dots: true,
    prevArrow: '',
    nextArrow: ''
  });
  $('.horizontal_slider').slick({
    initialSlide: 0,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    dots: true,
    prevArrow: '<i class="fa-solid fa-chevron-left left_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right_arrow"></i>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  window.addEventListener('load', setEqualHeight);
  window.addEventListener('resize', setEqualHeight);
  $('.horizontal_slider').on('init', setEqualHeight);
  $('.horizontal_slider').on('setPosition', setEqualHeight);
}); // LIGHTGALLERY

lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom, lgFullscreen]
});