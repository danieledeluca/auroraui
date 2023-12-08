/**
 * Copyright @ 2023 Sparkle
 * https://github.com/danieledeluca/sparkle
 */

import { classes, isMobile } from '../utilities';

const { activeClass, navOpenClass, parentClass } = classes;

const DATA_ATTRIBUTE = 'data-navbar';
const DEFAULT_OPTIONS = {
    navbarItemClass: '.navbar__item',
    navbarLinkClass: '.navbar__link',
    navbarToggleClass: '.navbar__toggle',
    hamburgerClass: '[class*="__hamburger"]',
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
        this.navbarToggles = this.element.querySelectorAll(this.options.navbarToggleClass);
        this.hamburger = this.element.parentElement.querySelector(this.options.hamburgerClass);
    }

    /**
     * Initialize the instance
     */
    mount() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.#toggleMenu();
            });
        }

        this.navbarToggles.forEach((toggle) => {
            toggle.addEventListener('click', () => {
                this.#toggleSubmenu(toggle);
            });
        });

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
     * Toggle submenu
     *
     * @param {HTMLElement} element
     */
    #toggleSubmenu(element) {
        element.closest(this.options.navbarItemClass).classList.toggle(activeClass);
    }

    /**
     * Handle link click
     *
     * @param {HTMLElement} link
     */
    #handleLinkClick(link) {
        if (!isMobile()) return;

        const navbarItem = link.closest(this.options.navbarItemClass);
        const linkHref = link.getAttribute('href');

        if (navbarItem.classList.contains(parentClass) && linkHref === '#') {
            this.#toggleSubmenu(link);
        } else {
            this.#closeMenu();
        }
    }
}
