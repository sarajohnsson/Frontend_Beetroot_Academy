"use strict";

// NAVIGATION
var sidebar = document.querySelector('.sidebar');
var toggleOverlay = document.querySelector('.toggle_overlay');
var hamburger = document.querySelector('.open_icon');

function showSidebar() {
  sidebar.classList.add('show');
  toggleOverlay.classList.add('active');
  hamburger.classList.add('hidden');
}

function closeSidebar() {
  sidebar.classList.remove('show');
  toggleOverlay.classList.remove('active');
  hamburger.classList.remove('hidden');
}

sidebar.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    closeSidebar();
  }
}); // ACTIVE LINKS

function setActive() {
  var navLinks = document.querySelectorAll('.nav_bar_list_link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var navIcons = document.querySelectorAll('.nav_bar_list_link_icon');
      navIcons.forEach(function (icon) {
        icon.classList.remove('active');
      });
      var icon = link.querySelector('.nav_bar_list_link_icon');

      if (icon) {
        icon.classList.add('active');
      }
    });
  });
} // NAV SCROLL


document.addEventListener('DOMContentLoaded', function () {
  var navBar = document.querySelector('.nav_container');
  window.addEventListener('scroll', function () {
    if (this.window.scrollY > 100) {
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
  });
}); // ADDITIONAL SLIDER FUNCTION

setActive();

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
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false
  });
  $('.horizontal_slider').slick({
    initialSlide: 0,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
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

lightGallery(document.getElementById('lightGallery'), {
  plugins: [lgZoom, lgThumbnail, lgFullscreen],
  thumbnail: true,
  speed: 500
}); // INTERACTIVE MAP

document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map').setView([59.33255219928953, 18.064587649123187], 15);
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {}).addTo(map);
  var custMarker = L.icon({
    iconUrl: 'assets/pin.png',
    iconSize: [100, 100],
    // size of the icon
    iconAnchor: [50, 50],
    // point of the icon which will correspond to marker's location
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor

  });
  L.marker([59.33255219928953, 18.064587649123187], {
    icon: custMarker
  }).addTo(map).bindPopup('Come Visit Us').openPopup();
}); // FORM

var form = document.querySelector('#form');
var messageBox = document.querySelector('#messageBox');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  var name = document.querySelector('#name');
  var email = document.querySelector('#email');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var errorField = null;
  messageBox.textContent = '';
  messageBox.classList.remove('success', 'error');

  if (!name.value.trim()) {
    errorField = name;
  } else if (!email.value.trim() || !emailPattern.test(email.value)) {
    errorField = email;
  }

  if (errorField) {
    messageBox.textContent = 'Please fill out all required fields correctly.';
    messageBox.classList.add('error');
    errorField.focus();
  } else {
    messageBox.textContent = 'Form submitted successfully!';
    messageBox.classList.add('success');
    form.reset();
  }
} // SMOOTH SCROLLING


$(document).ready(function () {
  $('a').on('click', function (event) {
    if (!$(this).hasClass('lightGallery_img') && this.has !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});