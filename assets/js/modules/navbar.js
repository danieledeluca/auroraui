import $ from 'jquery';
import { classes, isMobile } from './utilities';

const { activeClass, navOpenClass, parentClass } = classes;
const $html = $('html');

/**
 * Close mobile menu
 */
function closeMenu() {
    $html.removeClass(navOpenClass);
    $(`.navbar__item.${activeClass}`).removeClass(activeClass);
}

// Toggle mobile menu
$('.header__hamburger').on('click', () => {
    $html.toggleClass(navOpenClass);
});

// Close mobile menu on resize
$(window).on('resize', () => {
    if (!isMobile()) {
        closeMenu();
    }
});

// Toggle mobile submenu
$('.navbar__link').on('click', (e) => {
    if (!isMobile()) return;

    const $this = $(e.currentTarget);
    const $navbarItem = $this.parent();
    const navbarLinkHref = $this.attr('href');

    if ($navbarItem.hasClass(parentClass) && navbarLinkHref === '#') {
        $navbarItem.toggleClass(activeClass);
    } else {
        closeMenu();
    }
});

// Toggle mobile submenu
$('.navbar__toggle').on('click', (e) => {
    if (!isMobile()) return;

    e.preventDefault();
    e.stopPropagation();

    $(e.currentTarget).closest('.navbar__item').toggleClass(activeClass);
});

// Prevent default behavior when click on empty click
$('a[href="#"]').on('click', (e) => {
    e.preventDefault();
});
