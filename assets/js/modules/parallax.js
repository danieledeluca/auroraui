// =====================================================
// Parallax
// =====================================================

import $ from 'jquery';
import Parallax from '../classes/Parallax';

/**
 * Init Parallax
 *
 * @param {HTMLElement} element
 */
function initParallax(element) {
    const parallax = new Parallax(element);
    parallax.mount();
}

$('.parallax').each((index, element) => {
    initParallax(element);
});
