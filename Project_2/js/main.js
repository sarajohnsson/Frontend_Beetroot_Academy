// NAVIGATION
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function setActive() {
    const navLinks = document.querySelectorAll('.nav_bar_list_link');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const navIcons = document.querySelectorAll('.nav_bar_list_link_icon');
            navIcons.forEach((icon) => {
                icon.classList.remove('active');
            });

            const icon = link.querySelector('.nav_bar_list_link_icon');
            if (icon) {
                icon.classList.add('active');
            }
        });
    });
}

// ADDITIONAL SLIDER FUNCTION
setActive();

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

// SLICK SLIDER
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
        nextArrow: '',
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
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgFullscreen],
});
