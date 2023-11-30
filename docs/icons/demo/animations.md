<script setup>
import IconsView from '@/views/IconsView.vue';
</script>

# Animations

## Example

<i class="si-icon-star si-icon-beat"></i>

```html
<i class="si-icon-star si-icon-beat"></i>
```

## Animations

<IconsView example="animations" />

## SCSS

### Variables

```scss
$sparkle-icon-animations: (
    'beat': 'si-beat 1s ease-in-out infinite',
    'bounce': 'si-bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite',
    'fade': 'si-fade 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    'flip': 'si-flip 1s ease-in-out infinite',
    'shake': 'si-shake 1s linear infinite',
    'spin': 'si-spin 2s linear infinite',
) !default;
```

### Mixins

```scss
@mixin sparkle-icon-animation($name) {
    animation: unquote(map-get($sparkle-icon-animations, $name));
}
```
