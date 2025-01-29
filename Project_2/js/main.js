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
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 800,
        dots: true,
        prevArrow: '<i class="fa-solid fa-chevron-left left_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right right_arrow"></i>',
    });
});
