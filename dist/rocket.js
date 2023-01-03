var k = Object.defineProperty;
var _ = (s, t, e) => t in s ? k(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var r = (s, t, e) => (_(s, typeof t != "symbol" ? t + "" : t, e), e), w = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var d = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
};
var c = (s, t, e) => (w(s, t, "access private method"), e);
import n from "jquery";
import T from "@splidejs/splide";
const O = {
  activeClass: "is-active",
  navOpenClass: "nav-open",
  parentClass: "is-parent"
}, S = 768;
function g() {
  return window.innerWidth < S;
}
const { activeClass: a, navOpenClass: h, parentClass: $ } = O, v = n("html");
function b() {
  v.removeClass(h), n(`.navbar__item.${a}`).removeClass(a);
}
function x(s) {
  if (!g())
    return;
  const t = n(s.currentTarget), e = t.attr("class"), m = /link/.test(e), l = /toggle/.test(e);
  if (m) {
    const u = t.parent(), C = t.attr("href");
    u.hasClass($) && C === "#" ? u.toggleClass(a) : b();
  }
  l && (s.preventDefault(), s.stopPropagation(), t.closest(".navbar__item").toggleClass(a));
}
n(".header__hamburger").on("click", () => {
  v.toggleClass(h);
});
n(window).on("resize", () => {
  g() || b();
});
n(".navbar__link, .navbar__toggle").on("click", (s) => {
  x(s);
});
n('a[href="#"]').on("click", (s) => {
  s.preventDefault();
});
const A = "data-parallax", P = {
  scrollSpeed: 2
};
var i, p;
const f = class {
  constructor(t, e = {}) {
    d(this, i);
    this.element = t, this.options = {
      ...f.options,
      ...e,
      ...JSON.parse(this.element.getAttribute(A)) || {}
    };
  }
  mount() {
    c(this, i, p).call(this), window.addEventListener("scroll", () => {
      c(this, i, p).call(this);
    });
  }
};
let o = f;
i = new WeakSet(), p = function() {
  const t = window.scrollY, e = this.element.offsetTop, l = `50% ${-((t - e) / this.options.scrollSpeed)}px`;
  this.element.style.backgroundPosition = l;
}, r(o, "element"), r(o, "options", P);
function y(s) {
  new o(s).mount();
}
n(".parallax").each((s, t) => {
  y(t);
});
function D(s) {
  new T(s).mount();
}
n(".splide").each((s, t) => {
  D(t);
});
