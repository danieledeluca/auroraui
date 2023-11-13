var w = Object.defineProperty;
var y = (e, t, s) => t in e ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var m = (e, t, s) => (y(e, typeof t != "symbol" ? t + "" : t, s), s), A = (e, t, s) => {
  if (!t.has(e))
    throw TypeError("Cannot " + s);
};
var i = (e, t, s) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, s);
};
var n = (e, t, s) => (A(e, t, "access private method"), s);
/*!
 * auroraUI (https://danieledeluca.github.io/auroraui/)
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
function I() {
  document.querySelectorAll('a[href="#"]').forEach((e) => {
    e.addEventListener("click", (t) => {
      t.preventDefault();
    });
  });
}
const $ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  breakpoints: T,
  classes: C,
  isMobile: b,
  preventClickOnEmptyLinks: I
}, Symbol.toStringTag, { value: "Module" })), { activeClass: u, navOpenClass: d, parentClass: P } = C, q = "data-navbar", D = {
  navbarItemClass: ".navbar__item",
  navbarLinkClass: ".navbar__link",
  navbarToggleClass: ".navbar__toggle",
  hamburgerClass: '[class*="__hamburger"]'
};
var r, k, o, l, a, g, c, S;
const f = class {
  constructor(t, s = {}) {
    i(this, r);
    i(this, o);
    i(this, a);
    i(this, c);
    this.element = t, this.options = {
      ...f.options,
      ...s,
      ...JSON.parse(this.element.getAttribute(q)) || {}
    }, this.navbarItems = this.element.querySelectorAll(this.options.navbarItemClass), this.navbarLinks = this.element.querySelectorAll(this.options.navbarLinkClass), this.navbarToggles = this.element.querySelectorAll(this.options.navbarToggleClass), this.hamburger = this.element.parentElement.querySelector(this.options.hamburgerClass);
  }
  mount() {
    this.hamburger && this.hamburger.addEventListener("click", () => {
      n(this, r, k).call(this);
    }), this.navbarToggles.forEach((t) => {
      t.addEventListener("click", () => {
        n(this, a, g).call(this, t);
      });
    }), this.navbarLinks.forEach((t) => {
      t.addEventListener("click", () => {
        n(this, c, S).call(this, t);
      });
    }), window.addEventListener("resize", () => {
      b() || n(this, o, l).call(this);
    });
  }
};
let p = f;
r = new WeakSet(), k = function() {
  document.documentElement.classList.toggle(d), document.documentElement.classList.contains(d) || n(this, o, l).call(this);
}, o = new WeakSet(), l = function() {
  document.documentElement.classList.remove(d), this.navbarItems.forEach((t) => {
    t.classList.contains(u) && t.classList.remove(u);
  });
}, a = new WeakSet(), g = function(t) {
  t.closest(this.options.navbarItemClass).classList.toggle(u);
}, c = new WeakSet(), S = function(t) {
  if (!b())
    return;
  const s = t.closest(this.options.navbarItemClass), L = t.getAttribute("href");
  s.classList.contains(P) && L === "#" ? n(this, a, g).call(this, t) : n(this, o, l).call(this);
}, m(p, "options", D);
const U = "data-parallax", M = {
  scrollSpeed: 2
};
var h, _;
const E = class {
  constructor(t, s = {}) {
    i(this, h);
    this.element = t, this.options = {
      ...E.options,
      ...s,
      ...JSON.parse(this.element.getAttribute(U)) || {}
    };
  }
  mount() {
    window.addEventListener("scroll", () => {
      n(this, h, _).call(this);
    }), window.dispatchEvent(new Event("scroll"));
  }
};
let v = E;
h = new WeakSet(), _ = function() {
  const t = window.scrollY, s = this.element.offsetTop, O = `50% ${-((t - s) / this.options.scrollSpeed)}px`;
  this.element.style.backgroundPosition = O;
}, m(v, "options", M);
export {
  p as AuroraNavbar,
  v as AuroraParallax,
  $ as auroraUtilities
};
//# sourceMappingURL=auroraui.js.map
