// =====================================================
// Utilities
// =====================================================

// Utilities classes
const classes = {
    activeClass: 'is-active',
    navOpenClass: 'nav-open',
    parentClass: 'is-parent',
};

// Mobile breakpoint
const mobileBreakpoint = 768;

/**
 * Check if is in mobile view
 *
 * @returns {Boolean}
 */
function isMobile() {
    return window.innerWidth < mobileBreakpoint;
}

export { classes, mobileBreakpoint, isMobile };
