// =====================================================
// Parallax class
// =====================================================

const DATA_ATTRIBUTE = 'data-parallax';
const DEFAULT_OPTIONS = {
    scrollSpeed: 2,
};

export default class Parallax {
    /**
     * The element where the Parallax is applied
     */
    static element;

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
        this.options = Object.assign(
            Parallax.options,
            options,
            JSON.parse(this.element.getAttribute(DATA_ATTRIBUTE)) || {}
        );
    }

    /**
     * Initialize the instance
     */
    mount() {
        this.#setBackgroundPosition();

        window.addEventListener('scroll', () => {
            this.#setBackgroundPosition();
        });
    }

    /**
     * Set background position
     */
    #setBackgroundPosition() {
        const scrollOffset = window.scrollY;
        const elementOffset = this.element.offsetTop;
        const yPosition = -((scrollOffset - elementOffset) / this.options.scrollSpeed);
        const backgroundPosition = `50% ${yPosition}px`;

        this.element.style.backgroundPosition = backgroundPosition;
    }
}
