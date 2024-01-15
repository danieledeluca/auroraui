<script setup>
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
</script>

# Getting started

## Install

Sparkle Icons are published to NPM, but they can also be manually downloaded if needed.

### NPM

Install Sparkle Icons with npm.

```sh
npm install @sparkleui/sparkle-icons
```

### Download

Download the [release](https://github.com/sparkleui/icons/releases/) from GitHub.

<VPButton text="Download latest release" href="https://github.com/sparkleui/icons/releases/latest/"></VPButton>

### CDN

Include the library in your website from jsDelivr.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sparkleui/icons/dist/sparkle-icons.min.css" />
```

## Import

::: code-group

```css [css]
@import url('@sparkleui/sparkle-icons');
```

```scss [scss]
@import '@sparkleui/sparkle-icons';
```

```js [js]
import '@sparkleui/sparkle-icons';
```

:::

## Usage

Sparkle Icons are SVGs, so you can include them into your HTML in a few ways.

### Icon font

Sparkle Icons includes a class for every icons. Include the icon web fonts in your page via CSS, then reference the class names as needed in your HTML.

Use `font-size` and `color` to change the icon appearance.

```html
<i class="si-icon-sparkle"></i>
```

### CSS

Add the icon trough CSS, using [pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) (`::before` and `::after`).

```css
.foo::before {
    content: '\e966';
    font-family: 'sparkle-icons';
}
```
