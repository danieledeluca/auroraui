<script setup>
import ImagesView from '@/views/ImagesView.vue';
</script>

# Images

## Figure

<ImagesView example="figure" />

```html
<figure>
    <img src="/background.jpg" alt="Sparkle image" />
</figure>
```

## Figcaption

<ImagesView example="figcaption" />

```html
<figure>
    <img src="/background.jpg" alt="Sparkle image" />
    <figcaption>This is an example of figure caption</figcaption>
</figure>
```

## Full width images

<ImagesView example="full-width-image" />

```html
<img src="/background.jpg" alt="Sparkle image" class="img--full" />
```

## SCSS

### Variables

```scss
// Figure
$figure-margin: 0 0 1rem !default;

// Figcaption
$figcaption-margin-top: 0.5rem !default;
$figcaption-color: $dark-gray !default;
$figcaption-font-size: $small-font-size !default;
```
