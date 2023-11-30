<script setup>
import TextColors from '@/components/TextColors.vue';
</script>

# Text colors

## Overview

| Property | Class          | Values          | Responsive |
| -------- | -------------- | --------------- | ---------- |
| `color`  | `text-{value}` | `$color-values` | `true`     |

## Colors

<TextColors />

```html
<p class="text-primary">.text-primary</p>
<p class="text-success">.text-success</p>
<p class="text-warning">.text-warning</p>
<p class="text-error">.text-error</p>
<p class="text-info">.text-info</p>
<p class="text-light">.text-light</p>
<p class="text-dark">.text-dark</p>
```

## SCSS

### Variables

The values are from [main theme colors](../customize/colors.md#main-theme-colors).

```scss
// Utilities values
$color-values: $theme-colors !default;

$utilities: (
    'color': (
        'responsive': true,
        'property': color,
        'class': text,
        'values': $color-values,
    ),
) !default;
```
