<script setup>
import Footer from '@/components/Footer.vue';
</script>

# Footer

## Example

<Footer />

```html
<footer class="footer">
    <div class="container">
        <div class="footer__inner">
            <!-- Footer navbar -->
            <nav class="footer__navbar">
                <ul class="navbar lv0">
                    <li class="navbar__item lv0">
                        <a href="#" class="navbar__link lv0">
                            <span>Home</span>
                        </a>
                    </li>
                    <li class="navbar__item lv0 is-parent">
                        <a href="#" class="navbar__link lv0">
                            <span>Parent</span>
                        </a>
                        <ul class="navbar lv1">
                            <li class="navbar__item lv1">
                                <a href="#" class="navbar__link lv1">
                                    <span>Submenu item</span>
                                </a>
                            </li>
                            <li class="navbar__item lv1">
                                <a href="#" class="navbar__link lv1">
                                    <span>Submenu item</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- Footer bottom -->
            <div class="footer__bottom">
                <!-- Footer copyright -->
                <div class="footer__copyright">
                    <span>© 2024 Sparkle UI | <a href="#">Privacy Policy</a> | <a href="#">Cookie Policy</a></span>
                </div>
                <!-- Footer social -->
                <div class="footer__social">
                    <a href="#" target="_blank" class="social">
                        <i class="si-icon-facebook"></i>
                    </a>
                    <a href="#" target="_blank" class="social">
                        <i class="si-icon-instagram"></i>
                    </a>
                    <a href="#" target="_blank" class="social">
                        <i class="si-icon-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
```

## SCSS

### Variables

```scss
// Layout
$footer-background-color: $gray-200 !default;
$footer-color: $body-color !default;

$footer-bottom-padding: 1.5rem 0 !default;
$footer-bottom-border-top: 2px solid $light-gray !default;

// Navbar
$footer-navbar-padding: 2.5rem 0 !default;
$footer-navbar-padding-md: 1.5rem 0 !default;
$footer-navbar-min-width: 200px !default;

$footer-navbar-lv0-gap: 1rem !default;

$footer-navbar-lv1-margin-top: 0.75rem !default;

$footer-navbar-item-parent-active-padding-bottom-md: $header-navbar-item-parent-active-padding-bottom-md !default;

$footer-navbar-item-lv0-border-bottom-md: 1px solid $gray-400 !default;

$footer-navbar-link-color: $dark-gray !default;
$footer-navbar-link-hover-color: $body-color !default;

$footer-navbar-link-parent-padding-bottom-md: $header-navbar-link-parent-padding-bottom-md !default;

$footer-navbar-link-lv0-padding-md: $header-navbar-link-lv0-padding-md !default;
$footer-navbar-link-lv0-font-size: 1.125rem !default;
$footer-navbar-link-lv0-font-weight: $font-weight-semi-bold !default;

$footer-navbar-link-lv1-padding: $header-navbar-link-lv1-padding-md !default;
$footer-navbar-link-lv1-font-size: $small-font-size !default;

// Copyright
$footer-copyright-color: $footer-color !default;
$footer-copyright-font-size: 0.75rem !default;

// Social
$footer-social-gap: 0.5rem !default;
$footer-social-margin-bottom-md: 0.5rem !default;
```

### Mixins

Same of the [Header](./header.md#mixins) component.

## JavaScript

### Import

```js
import { SparkleNavbar } from '@sparkleui/sparkle';
```

### Initialize

```js
const sparkleNavbar = new SparkleNavbar(document.querySelector('.footer__navbar'));
sparkleNavbar.mount();
```

### Options

::: code-group

```js [js]
const sparkleNavbar = new SparkleNavbar(document.querySelector('.footer__navbar'));
sparkleNavbar.mount({
    navbarItemClass: '.navbar__item',
    navbarLinkClass: '.navbar__link',
    navbarToggleClass: '.navbar__toggle',
});
```

```html [html]
<nav class="footer__navbar" data-navbar='{"navbarItemClass": ".navbar__item"}'></nav>
```

:::
