<script setup>
import CoverView from '@/views/CoverView.vue';
</script>

# Parallax

This component is made on top of the [Cover component](./cover.md).

## Example

<CoverView example="parallax" />

```html
<div class="cover parallax" style="background-image: url('/background.jpg');"></div>
```

## JavaScript

### Import

```js
import { SparkleParallax } from '@sparkleui/sparkle';
```

### Initialize

```js
const sparkleParallax = new SparkleParallax(document.querySelector('.parallax'));
sparkleParallax.mount();
```

### Options

::: code-group

```js [js]
const sparkleParallax = new SparkleParallax(document.querySelector('.parallax'));
sparkleParallax.mount({
    scrollSpeed: 2,
});
```

```html [html]
<div class="cover parallax" style="background-image: url('/background.jpg');" data-parallax='{"scrollSpeed": 2}'></div>
```

:::
