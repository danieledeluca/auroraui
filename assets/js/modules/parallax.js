import $ from 'jquery';

const $window = $(window);
let scrollOffset = $window.scrollTop();

$window.on('scroll resize', function () {
    scrollOffset = window.pageYOffset;

    $('.parallax').each(function () {
        const $parallax = $(this);
        const scrollSpeed = $parallax.data('scroll-speed') || 2;
        const backgroundOffset = parseInt($parallax.offset().top, 10);
        const yPosition = -((scrollOffset - backgroundOffset) / scrollSpeed);
        const backgroundPosition = `50% ${yPosition}px`;

        $parallax.css({ backgroundPosition });
    });
});
