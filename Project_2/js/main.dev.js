"use strict";

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
    slidesToScroll: 3,
    speed: 800,
    dots: true,
    prevArrow: '<i class="fa-solid fa-chevron-left left_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right_arrow"></i>',
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
});