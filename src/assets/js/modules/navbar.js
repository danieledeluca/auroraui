// =====================================================
// Navbar
// =====================================================

import $ from 'jquery';
import { classes, isMobile } from './utilities';

const { activeClass, navOpenClass, parentClass } = classes;
const $html = $('html');

/**
 * Close menu
 */
function closeMenu() {
    $html.removeClass(navOpenClass);
    $(`.navbar__item.${activeClass}`).removeClass(activeClass);
}

/**
 * Toggle submenu
 *
 * @param {Event} e
 */
function toggleSubmenu(e) {
    if (!isMobile()) return;

    const $this = $(e.currentTarget);
    const thisClass = $this.attr('class');
    const isLink = /link/.test(thisClass);
    const isToggle = /toggle/.test(thisClass);

    if (isLink) {
        const $navbarItem = $this.parent();
        const navbarLinkHref = $this.attr('href');

        if ($navbarItem.hasClass(parentClass) && navbarLinkHref === '#') {
            $navbarItem.toggleClass(activeClass);
        } else {
            closeMenu();
        }
    }

    if (isToggle) {
        e.preventDefault();
        e.stopPropagation();

        $this.closest('.navbar__item').toggleClass(activeClass);
    }
}

// Toggle menu
$('.header__hamburger').on('click', () => {
    $html.toggleClass(navOpenClass);
});

// Close menu
$(window).on('resize', () => {
    if (isMobile()) return;

    closeMenu();
});

// Toggle submenu
$('.navbar__link, .navbar__toggle').on('click', (e) => {
    toggleSubmenu(e);
});

// Prevent default behavior when click on empty click
$('a[href="#"]').on('click', (e) => {
    e.preventDefault();
});
