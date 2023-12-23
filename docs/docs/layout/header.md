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
            <!-- Navbar toggle -->
            <div class="navbar__toggle"></div>
        </div>
    </div>
</header>
```

### Navbar buttons

Change the class `.navbar__link` in `.navbar__button`.

```html
<a href="#" class="navbar__button lv0">
    <span>Navbar button</span>
</a>
```

## SCSS

### Variables

```scss
// Layout
$header-background-color: $white !default;
$header-box-shadow: 0 5px 20px rgba($black, 0.05) !default;

$header-inner-gap: 1.25rem !default;
$header-inner-padding: 1rem 0 !default;

// Logo
$header-logo-height: 2.5rem !default;

// Navbar
$header-navbar-background-color: $white !default;

$header-navbar-lv0-padding-md: 0 $container-padding-x !default;

$header-navbar-lv1-min-width: 150px !default;
$header-navbar-lv1-margin-left-md: 0.75rem !default;
$header-navbar-lv1-background-color: $white !default;
$header-navbar-lv1-border: 1px solid $gray-200 !default;
$header-navbar-lv1-border-radius: 0.25rem !default;
$header-navbar-lv1-box-shadow: 0 0 10px rgba($black, 0.05) !default;

$header-navbar-item-parent-active-padding-bottom-md: 0.75rem !default;

$header-navbar-item-lv0-border-md: 1px solid $light-gray !default;

$header-navbar-link-gap: 0.25rem !default;
$header-navbar-link-color: $dark-gray !default;
$header-navbar-link-font-size: $small-font-size !default;
$header-navbar-link-hover-color: $body-color !default;

$header-navbar-link-parent-padding-bottom-md: 0.5rem !default;

$header-navbar-link-lv0-padding: 0.5rem 0.75rem !default;
$header-navbar-link-lv0-padding-md: 1rem 0 !default;
$header-navbar-link-lv0-font-weight-md: $font-weight-medium !default;

$header-navbar-link-lv1-padding: $header-navbar-link-lv0-padding !default;
$header-navbar-link-lv1-padding-md: 0.25rem 0 !default;
$header-navbar-link-lv1-hover-background-color: $gray-50 !default;

$header-navbar-button-margin-md: $header-navbar-link-lv0-padding-md !default;
$header-navbar-button-padding: $header-navbar-link-lv0-padding !default;
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
});
```

```html [html]
<nav class="header__navbar" data-navbar='{"navbarItemClass": ".navbar__item"}'></nav>
```

:::
