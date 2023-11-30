<script setup>
import Pagination from '@/components/Pagination.vue';
</script>

# Pagination

## Example

<Pagination :numberOfItems="4" />

```html
<nav class="pagination">
    <ul class="pagination__list">
        <li class="pagination__item">
            <a href="#" class="pagination__link">
                <i class="si-icon-chevron-left"></i>
            </a>
        </li>
        <li class="pagination__item is-active">
            <span class="pagination__link">1</span>
        </li>
        <li class="pagination__item">
            <a href="#" class="pagination__link">
                <span>2</span>
            </a>
        </li>
        <li class="pagination__item">
            <a href="#" class="pagination__link">
                <span>3</span>
            </a>
        </li>
        <li class="pagination__item">
            <a href="#" class="pagination__link">
                <span>4</span>
            </a>
        </li>
        <li class="pagination__item">
            <a href="#" class="pagination__link">
                <i class="si-icon-chevron-right"></i>
            </a>
        </li>
    </ul>
</nav>
```

## SCSS

### Variables

```scss
$pagination-list-gap: 0.5rem !default;

$pagination-link-background-color: $white !default;
$pagination-link-box-shadow: 0 0 10px rgba($black, 0.05) !default;
$pagination-link-size: 'small' !default;

$pagination-link-active-background-color: $primary !default;
```
