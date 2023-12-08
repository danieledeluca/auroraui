/**
 * Copyright @ 2023 Sparkle
 * https://github.com/danieledeluca/sparkle
 */

// Utility classes
export const classes = {
    activeClass: 'is-active',
    navOpenClass: 'nav-open',
    parentClass: 'is-parent',
};

// Breakpoints
export const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
};

/**
 * Check if is in mobile view
 *
 * @returns {Boolean}
 */
export function isMobile() {
    return window.innerWidth < breakpoints.md;
}
