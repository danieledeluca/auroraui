<script setup>
import Header from '@/components/Header.vue';
</script>

# Header

## Example

<Header />

```html
<header class="header">
    <div class="container">
        <div class="header__inner">
            <!-- Header logo -->
            <a href="#" class="header__logo">
                <img src="/logo.svg" alt="Sparkle UI logo" class="logo" />
            </a>
            <!-- Header navbar -->
            <nav class="header__navbar header__navbar--collapse">
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
                        <div class="navbar__toggle"></div>
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
            <!-- Header hamburger -->
            <div class="header__hamburger">
                <div class="hamburger hamburger--vortex">
                    <span class="hamburger__inner"></span>
                </div>
            </div>
        </div>
    </div>
</header>
```

## Navbar

### Navbar animations

Add `.header__navbar--{animation}` class to element width class `.header__navbar` to apply an animation on mobile.

::: code-group

```html [collapse]
<nav class="header__navbar header__navbar--collapse"></nav>
```

```html [slide-in]
<nav class="header__navbar header__navbar--slide-in"></nav>
```

:::

### Navbar buttons

Change the class `.navbar__link` in `.navbar__button`.

```html
<a href="#" class="navbar__button lv0">
    <span>Navbar button</span>
</a>
```

## Hamburger

### Hamburger animations

Add `.hamburger--{animation}` class to element width class `.hamburger` to apply an animation.

::: code-group

```html [spin]
<div class="header__hamburger">
    <div class="hamburger hamburger--spin">
        <span class="hamburger__inner"></span>
    </div>
</div>
```

```html [vortex]
<div class="header__hamburger">
    <div class="hamburger hamburger--vortex">
        <span class="hamburger__inner"></span>
    </div>
</div>
```

```html [collapse]
<div class="header__hamburger">
    <div class="hamburger hamburger--collapse">
        <span class="hamburger__inner"></span>
    </div>
</div>
```

```html [squeeze]
<div class="header__hamburger">
    <div class="hamburger hamburger--squeeze">
        <span class="hamburger__inner"></span>
    </div>
</div>
```

:::

## SCSS

### Variables

```scss
// Layout
$header-background-color: $white !default;
$header-box-shadow: 0 5px 20px rgba($black, 0.05) !default;

// Logo
$header-logo-margin-right: 1.25rem !default;
$header-logo-padding: 1rem 0 !default;
$header-logo-height: 2.5rem !default;

// Navbar
$header-navbar-background-color: $white !default;

$header-navbar-lv1-min-width: 200px !default;
$header-navbar-lv1-background-color: $white !default;
$header-navbar-lv1-background-color-md: $gray-200 !default;

$header-navbar-item-lv0-border-md: 1px solid $light-gray !default;

$header-navbar-item-lv1-border: $header-navbar-item-lv0-border-md !default;

$header-navbar-link-gap: 0.25rem !default;
$header-navbar-link-color: $dark-gray !default;
$header-navbar-link-color-md: $body-color !default;
$header-navbar-link-font-size: $small-font-size !default;
$header-navbar-link-hover-color: $body-color !default;
$header-navbar-link-hover-color-md: $header-navbar-link-hover-color !default;

$header-navbar-link-lv0-padding-y-md: 1rem !default;
$header-navbar-link-lv0-padding-x-md: 1rem !default;
$header-navbar-link-lv0-padding: 0.5rem 0.75rem !default;
$header-navbar-link-lv0-padding-md: $header-navbar-link-lv0-padding-y-md $header-navbar-link-lv0-padding-x-md !default;
$header-navbar-link-lv0-font-weight-md: $font-weight-medium !default;

$header-navbar-link-lv1-padding: 0.75rem 1rem !default;

$header-navbar-button-width-md: calc(100% - #{$header-navbar-link-lv0-padding-x-md} * 2) !default;
$header-navbar-button-margin-md: $header-navbar-link-lv0-padding-md !default;
$header-navbar-button-padding: $header-navbar-link-lv0-padding !default;
$header-navbar-button-padding-md: $header-navbar-link-lv0-padding-md !default;

$header-navbar-toggle-icon: 'chevron-down' !default;
$header-navbar-toggle-height: calc(
    $header-navbar-link-font-size * $body-line-height + $header-navbar-link-lv0-padding-y-md * 2
) !default;

// Hamburger
$header-hamburger-margin-right: -$container-padding-x !default;
$header-hamburger-padding: 0 $container-padding-x !default;

$header-hamburger-layer-width: 22px !default;
$header-hamburger-layer-height: 3.5px !default;
$header-hamburger-layer-spacing: 3.5px !default;
$header-hamburger-layer-color: $body-color !default;
$header-hamburger-layer-border-radius: 100px !default;
```

### Mixins

```scss
@mixin collapse {
    max-height: 0;
    transition: transition(max-height);
    overflow-y: hidden;
}

@mixin collapse-active($max-height: 50vh) {
    max-height: $max-height;
    overflow-y: auto;
}
```

## JavaScript

### Import

```js
import { SparkleNavbar } from '@sparkleui/sparkle';
```

### Initialize

```js
const sparkleNavbar = new SparkleNavbar(document.querySelector('.header__navbar'));
sparkleNavbar.mount();
```

### Options

::: code-group

```js [js]
const sparkleNavbar = new SparkleNavbar(document.querySelector('.header__navbar'));
sparkleNavbar.mount({
    navbarItemClass: '.navbar__item',
    navbarLinkClass: '.navbar__link',
    navbarToggleClass: '.navbar__toggle',
    hamburgerClass: '[class*="__hamburger"]',
});
```

```html [html]
<nav class="header__navbar" data-navbar='{"navbarItemClass": ".navbar__item"}'></nav>
```

:::
