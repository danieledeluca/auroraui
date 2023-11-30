<script setup>
import TextAlignment from '@/components/TextAlignment.vue';
</script>

# Text alignment

## Overview

| Property     | Class          | Values               | Responsive |
| ------------ | -------------- | -------------------- | ---------- |
| `text-align` | `text-{value}` | `$text-align-values` | `true`     |

## Alignment

<TextAlignment />

```html
<p class="text-left">Text align left</p>
<p class="text-center">Text align center</p>
<p class="text-right">Text align right</p>
```

## SCSS

### Variables

```scss
// Utilities values
$text-align-values: (
    'left': left,
    'center': center,
    'right': right,
) !default;

$utilities: (
    'text-align': (
        'responsive': true,
        'property': text-align,
        'class': text,
        'values': $text-align-values,
    ),
) !default;
```
