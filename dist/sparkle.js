var w = Object.defineProperty;
var y = (e, t, s) => t in e ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var d = (e, t, s) => (y(e, typeof t != "symbol" ? t + "" : t, s), s), I = (e, t, s) => {
  if (!t.has(e))
    throw TypeError("Cannot " + s);
};
var i = (e, t, s) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, s);
};
var n = (e, t, s) => (I(e, t, "access private method"), s);
import "@sparkleui/sparkle-icons";
/*!
 * Sparkle (https://danieledeluca.github.io/sparkle/)
 * Version: 1.0.2
 * License: MIT
 * Copyright: @ 2023 Daniele De Luca
 */
const C = {
  activeClass: "is-active",
  navOpenClass: "nav-open",
  parentClass: "is-parent"
}, T = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
function b() {
  return window.innerWidth < T.md;
}
function S() {
  document.querySelectorAll('a[href="#"]').forEach((e) => {
    e.addEventListener("click", (t) => {
      t.preventDefault();
    });
  });
}
const j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  breakpoints: T,
  classes: C,
  isMobile: b,
  preventClickOnEmptyLinks: S
}, Symbol.toStringTag, { value: "Module" })), { activeClass: v, navOpenClass: p, parentClass: P } = C, q = "data-navbar", D = {
  navbarItemClass: ".navbar__item",
  navbarLinkClass: ".navbar__link",
  navbarToggleClass: ".navbar__toggle",
  hamburgerClass: '[class*="__hamburger"]'
};
var r, A, o, l, a, g, c, k;
const h = class h {
  /**
   * The Parallax constructor
   *
   * @param {HTMLElement} element
   * @param {Object} options
   */
  constructor(t, s = {}) {
    /**
     * Toggle menu
     */
    i(this, r);
    /**
     * Close menu
     */
    i(this, o);
    /**
     * Toggle submenu
     *
     * @param {HTMLElement} element
     */
    i(this, a);
    /**
     * Handle link click
     *
     * @param {HTMLElement} link
     */
    i(this, c);
    this.element = t, this.options = {
      ...h.options,
      ...s,
      ...JSON.parse(this.element.getAttribute(q)) || {}
    }, this.navbarItems = this.element.querySelectorAll(this.options.navbarItemClass), this.navbarLinks = this.element.querySelectorAll(this.options.navbarLinkClass), this.navbarToggles = this.element.querySelectorAll(this.options.navbarToggleClass), this.hamburger = this.element.parentElement.querySelector(this.options.hamburgerClass);
  }
  /**
   * Initialize the instance
   */
  mount() {
    this.hamburger && this.hamburger.addEventListener("click", () => {
      n(this, r, A).call(this);
    }), this.navbarToggles.forEach((t) => {
      t.addEventListener("click", () => {
        n(this, a, g).call(this, t);
      });
    }), this.navbarLinks.forEach((t) => {
      t.addEventListener("click", () => {
        n(this, c, k).call(this, t);
      });
    }), window.addEventListener("resize", () => {
      b() || n(this, o, l).call(this);
    });
  }
};
r = new WeakSet(), A = function() {
  document.documentElement.classList.toggle(p), document.documentElement.classList.contains(p) || n(this, o, l).call(this);
}, o = new WeakSet(), l = function() {
  document.documentElement.classList.remove(p), this.navbarItems.forEach((t) => {
    t.classList.contains(v) && t.classList.remove(v);
  });
}, a = new WeakSet(), g = function(t) {
  t.closest(this.options.navbarItemClass).classList.toggle(v);
}, c = new WeakSet(), k = function(t) {
  if (!b())
    return;
  const s = t.closest(this.options.navbarItemClass), f = t.getAttribute("href");
  s.classList.contains(P) && f === "#" ? n(this, a, g).call(this, t) : n(this, o, l).call(this);
}, /**
 * The default options
 */
d(h, "options", D);
let E = h;
const U = "data-parallax", M = {
  scrollSpeed: 2
};
var m, O;
const u = class u {
  /**
   * The Parallax constructor
   *
   * @param {HTMLElement} element
   * @param {Object} options
   */
  constructor(t, s = {}) {
    /**
     * Set background position
     */
    i(this, m);
    this.element = t, this.options = {
      ...u.options,
      ...s,
      ...JSON.parse(this.element.getAttribute(U)) || {}
    };
  }
  /**
   * Initialize the instance
   */
  mount() {
    window.addEventListener("scroll", () => {
      n(this, m, O).call(this);
    }), window.dispatchEvent(new Event("scroll"));
  }
};
m = new WeakSet(), O = function() {
  const t = window.scrollY, s = this.element.offsetTop, _ = `50% ${-((t - s) / this.options.scrollSpeed)}px`;
  this.element.style.backgroundPosition = _;
}, /**
 * The default options
 */
d(u, "options", M);
let L = u;
export {
  E as SparkleNavbar,
  L as SparkleParallax,
  j as sparkleUtilities
};
//# sourceMappingURL=sparkle.js.map
