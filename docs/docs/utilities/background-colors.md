<script setup>
import BackgroundColors from '@/components/BackgroundColors.vue';
</script>

# Background colors

## Overview

| Property           | Class                | Values                     | Responsive |
| ------------------ | -------------------- | -------------------------- | ---------- |
| `background-color` | `background-{value}` | `$background-color-values` | `true`     |

## Colors

<BackgroundColors />

```html
<p class="background-primary">.background-primary</p>
<p class="background-success">.background-success</p>
<p class="background-warning">.background-warning</p>
<p class="background-error">.background-error</p>
<p class="background-info">.background-info</p>
<p class="background-light">.background-light</p>
<p class="background-dark">.background-dark</p>
```

## SCSS

### Variables

The values are from [main theme colors](../customize/colors.md#main-theme-colors).

```scss
// Utilities values
$background-color-values: $theme-colors !default;

$utilities: (
    'background-color': (
        'responsive': true,
        'property': background-color,
        'class': background,
        'values': $background-color-values,
    ),
) !default;
```
