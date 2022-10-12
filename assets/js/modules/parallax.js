import $ from 'jquery';

const $window = $(window);
let scrollOffset = $window.scrollTop();

$window.on('scroll resize', () => {
    scrollOffset = window.pageYOffset;

    $('.parallax').each((index, element) => {
        const $element = $(element);
        const scrollSpeed = $element.data('scroll-speed') || 2;
        const backgroundOffset = parseInt($element.offset().top, 10);
        const yPosition = -((scrollOffset - backgroundOffset) / scrollSpeed);
        const backgroundPosition = `50% ${yPosition}px`;

        $element.css({ backgroundPosition });
    });
});
