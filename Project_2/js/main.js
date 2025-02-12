// NAVIGATION
function initSidebar() {
    const sidebar = document.querySelector('.nav_bar_list');
    const toggleOverlay = document.querySelector('.toggle_overlay');
    const hamburger = document.querySelector('.open_icon');
    const closeBtn = document.querySelector('.close_btn');

    if (sidebar && toggleOverlay && hamburger && closeBtn) {
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

        hamburger.addEventListener('click', showSidebar);
        closeBtn.addEventListener('click', closeSidebar);
        toggleOverlay.addEventListener('click', closeSidebar);

        sidebar.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                closeSidebar();
            }
        });
    }
}

initSidebar();

// ACTIVE LINKS
function setActive() {
    const navLinks = document.querySelectorAll('.nav_bar_list li');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.forEach((item) => {
                item.classList.remove('active');
            });

            link.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            navLinks.forEach((item) => {
                item.classList.remove('active');
            });
        }
    });
}

// ADDITIONAL SLIDER FUNCTION
document.addEventListener('DOMContentLoaded', setActive);

// NAV SCROLL
document.addEventListener('DOMContentLoaded', function () {
    const navBar = document.querySelector('.nav_container');

    window.addEventListener('scroll', function () {
        if (this.window.scrollY > 50) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });
});

function setEqualHeight() {
    const slides = document.querySelectorAll('.slider_testimonials');
    let maxHeight = 0;

    slides.forEach((slide) => {
        slide.style.height = 'auto';

        if (slide.offsetHeight > maxHeight) {
            maxHeight = slide.offsetHeight;
        }

        slide.style.height = `${maxHeight}px`;
    });
}

$(document).ready(function () {
    // SMOOTH SCROLLING
    $('a').on('click', function (event) {
        if (!$(this).hasClass('lightGallery_img') && !$(this).hasClass('no_prevent') && this.has !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    // SLICK SLIDER
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
        nextArrow: false,
        adaptiveHeight: true,
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    window.addEventListener('load', setEqualHeight);
    window.addEventListener('resize', setEqualHeight);

    $('.horizontal_slider').on('init', setEqualHeight);
    $('.horizontal_slider').on('setPosition', setEqualHeight);
});

// LIGHTGALLERY
lightGallery(document.getElementById('lightGallery'), {
    plugins: [lgZoom, lgThumbnail, lgFullscreen],
    thumbnail: true,
    speed: 500,
});

// INTERACTIVE MAP
document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([59.33255219928953, 18.064587649123187], 15);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {}).addTo(map);

    const custMarker = L.icon({
        iconUrl: 'assets/pin.png',
        iconSize: [100, 100], // size of the icon
        iconAnchor: [50, 50], // point of the icon which will correspond to marker's location
        popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
    });

    L.marker([59.33255219928953, 18.064587649123187], { icon: custMarker }).addTo(map).bindPopup('Come Visit Us').openPopup();
});

// FORM
const form = document.querySelector('#form');
const messageBox = document.querySelector('#messageBox');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errorField = null;

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
}
