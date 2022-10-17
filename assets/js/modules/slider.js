// =====================================================
// Slider
// =====================================================

import $ from 'jquery';
import Splide from '@splidejs/splide';

/**
 * Init Splide
 *
 * @param {HTMLElement} element
 */
function initSplide(element) {
    const slider = new Splide(element);
    slider.mount();
}

$('.splide').each((index, element) => {
    initSplide(element);
});
