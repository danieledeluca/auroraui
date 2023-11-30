<script setup>
import CoverView from '@/views/CoverView.vue';
</script>

# Cover

## Example

<CoverView example="example" />

```html
<div class="cover cover--overlay" style='background-image: url("/background.jpg");'>
    <div class="cover__body">
        <h1 class="cover__title">
            <span>Cover title</span>
        </h1>
        <div class="cover__content lead">
            Cover content, lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsam.
        </div>
    </div>
</div>
```

## Cover with link

<CoverView example="with-link" />

```html
<div class="cover cover--overlay" style='background-image: url("/background.jpg");'>
    <div class="cover__body">
        <h1 class="cover__title">
            <span>Cover title</span>
        </h1>
        <div class="cover__content lead">
            Cover content, lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsam.
        </div>
        <div class="cover__actions">
            <a href="#" class="button button--primary primary">
                <span>Button</span>
            </a>
        </div>
    </div>
</div>
```

## Cover full link

<CoverView example="full-link" />

```html
<a href="#" class="cover cover--overlay" style='background-image: url("/background.jpg");'>
    <div class="cover__body">
        <h1 class="cover__title">
            <span>Cover title</span>
        </h1>
        <div class="cover__content lead">
            Cover content, lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsam.
        </div>
    </div>
</a>
```

## Cover alignment

### Center

<CoverView example="alignment-center" />

```html
<div class="cover cover--overlay cover--center" style='background-image: url("/background.jpg");'>
    <div class="cover__body">
        <h1 class="cover__title">
            <span>Cover title</span>
        </h1>
        <div class="cover__content lead">
            Cover content, lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsam.
        </div>
    </div>
</div>
```

### Right

<CoverView example="alignment-right" />

```html
<div class="cover cover--overlay cover--right" style='background-image: url("/background.jpg");'>
    <div class="cover__body">
        <h1 class="cover__title">
            <span>Cover title</span>
        </h1>
        <div class="cover__content lead">
            Cover content, lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsam.
        </div>
    </div>
</div>
```

## SCSS

### Variables

```scss
$cover-padding-y: 7rem !default;
$cover-padding-y-md: 5rem !default;

$cover-overlay-background-color: rgba($black, 0.5) !default;
$cover-overlay-color: color-contrast($cover-overlay-background-color) !default;

$cover-body-max-width: 600px !default;
$cover-body-padding: 0 0 0 $cover-padding-y !default;
$cover-body-padding-md: 0 1rem !default;
$cover-body-last-child-margin-top: 1rem !default;

$cover-actions-gap: 1rem !default;
```
