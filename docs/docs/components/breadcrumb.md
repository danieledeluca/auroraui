<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>

# Breadcrumb

## Example

<Breadcrumb :numberOfItems="4" />
 
```html
<nav class="breadcrumb">
    <ul class="breadcrumb__list">
        <li class="breadcrumb__item">
            <a href="#" class="breadcrumb__link">
                <span>Home</span>
            </a>
        </li>
        <li class="breadcrumb__item">
            <span class="breadcrumb__link">Page 1</span>
        </li>
        <li class="breadcrumb__item">
            <span class="breadcrumb__link">Page 2</span>
        </li>
        <li class="breadcrumb__item">
            <span class="breadcrumb__link">Page 3</span>
        </li>
    </ul>
</nav>
```

## SCSS

### Variables

```scss
$breadcrumb-list-gap: 0.25rem !default;

$breadcrumb-item-divider-icon: 'chevron-right' !default;

$breadcrumb-link-font-size: $small-font-size !default;
$breadcrumb-link-font-weight: $font-weight-semi-bold !default;
```
