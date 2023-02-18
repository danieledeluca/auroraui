// =====================================================
// Utilities
// =====================================================

// Utility classes
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

/**
 * Prevent default behavior on click on empty links
 */
function preventClickOnEmptyLinks() {
    document.querySelectorAll('a[href="#"]').forEach((emptyLink) => {
        emptyLink.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
}

export { classes, mobileBreakpoint, isMobile, preventClickOnEmptyLinks };
