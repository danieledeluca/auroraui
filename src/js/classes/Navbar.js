/**
 * Copyright @ 2024 Sparkle UI
 * https://github.com/sparkleui/sparkle
 */

import { classes, isMobile } from '../utilities';

const { activeClass, navOpenClass, parentClass } = classes;

const DATA_ATTRIBUTE = 'data-navbar';
const DEFAULT_OPTIONS = {
    navbarItemClass: '.navbar__item',
    navbarLinkClass: '.navbar__link',
    navbarToggleClass: '.navbar__toggle',
};

export default class SparkleNavbar {
    /**
     * The default options
     */
    static options = DEFAULT_OPTIONS;

    /**
     * The Parallax constructor
     *
     * @param {HTMLElement} element
     * @param {Object} options
     */
    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            ...SparkleNavbar.options,
            ...options,
            ...(JSON.parse(this.element.getAttribute(DATA_ATTRIBUTE)) || {}),
        };

        this.navbarItems = this.element.querySelectorAll(this.options.navbarItemClass);
        this.navbarLinks = this.element.querySelectorAll(this.options.navbarLinkClass);
        this.navbarToggle = this.element.parentElement.querySelector(this.options.navbarToggleClass);
    }

    /**
     * Initialize the instance
     */
    mount() {
        if (this.navbarToggle) {
            this.navbarToggle.addEventListener('click', () => {
                this.#toggleMenu();
            });
        }

        this.navbarLinks.forEach((link) => {
            link.addEventListener('click', () => {
                this.#handleLinkClick(link);
            });
        });

        window.addEventListener('resize', () => {
            if (isMobile()) return;

            this.#closeMenu();
        });
    }

    /**
     * Toggle menu
     */
    #toggleMenu() {
        document.documentElement.classList.toggle(navOpenClass);

        if (!document.documentElement.classList.contains(navOpenClass)) {
            this.#closeMenu();
        }
    }

    /**
     * Close menu
     */
    #closeMenu() {
        document.documentElement.classList.remove(navOpenClass);

        this.navbarItems.forEach((navbarItem) => {
            if (navbarItem.classList.contains(activeClass)) {
                navbarItem.classList.remove(activeClass);
            }
        });
    }

    /**
     * Handle link click
     *
     * @param {HTMLElement} link
     */
    #handleLinkClick(link) {
        if (!isMobile()) return;

        const navbarItem = link.closest(this.options.navbarItemClass);

        if (navbarItem.classList.contains(parentClass)) {
            link.closest(this.options.navbarItemClass).classList.toggle(activeClass);
        } else {
            this.#closeMenu();
        }
    }
}
