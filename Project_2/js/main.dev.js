"use strict";

$(document).ready(function () {
  // Slick slider
  $('.vertical_carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    vertical: true,
    verticalSwipe: true
  });
});