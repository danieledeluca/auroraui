<script setup>
import ButtonsView from '@/views/ButtonsView.vue';
</script>

# Buttons

To make a button there are some classes that are mandatory:

-   base class: `button`
-   type class: `button--primary` or `button--secondary`
-   color class: there are a class for each color in the `$theme-colors` variable ([Main theme colors](../customize/colors.md#main-theme-colors))

## Base button

<ButtonsView example="base" />

```html
<button type="button" class="button">
    <span>Button</span>
</button>
```

## Primary button

<ButtonsView example="primary" />

```html
<button type="button" class="button button--primary primary">
    <span>Button</span>
</button>
<button type="button" class="button button--primary success">
    <span>Button</span>
</button>
<button type="button" class="button button--primary warning">
    <span>Button</span>
</button>
<button type="button" class="button button--primary error">
    <span>Button</span>
</button>
<button type="button" class="button button--primary info">
    <span>Button</span>
</button>
<button type="button" class="button button--primary light">
    <span>Button</span>
</button>
<button type="button" class="button button--primary dark">
    <span>Button</span>
</button>
```

## Secondary button

<ButtonsView example="secondary" />

```html
<button type="button" class="button button--secondary primary">
    <span>Button</span>
</button>
<button type="button" class="button button--secondary success">
    <span>Button</span>
</button>
<button type="button" class="button button--secondary warning">
    <span>Button</span>
</button>
<button type="button" class="button button--secondary error">
    <span>Button</span>
</button>
<button type="button" class="button button--secondary info">
    <span>Button</span>
</button>
<button type="button" class="button button--secondary light">
    <span>Button</span>
</button>
<button type="button" class="button button--secondary dark">
    <span>Button</span>
</button>
```

## Button icon

### Text and icon

<ButtonsView example="text-icon" />

```html
<button type="button" class="button button--primary primary">
    <i class="si-icon-star"></i>
    <span>Button</span>
</button>
<button type="button" class="button button--secondary primary">
    <span>Button</span>
    <i class="si-icon-star"></i>
</button>
```

### Icon only

<ButtonsView example="icon-only" />

```html
<button type="button" class="button button--primary button--icon primary">
    <i class="si-icon-star"></i>
</button>
<button type="button" class="button button--secondary button--icon primary">
    <i class="si-icon-star"></i>
</button>
```

## Button size

### Big

<ButtonsView example="big" />

```html
<button type="button" class="button button--primary button--big primary">
    <span>Button</span>
</button>
<button type="button" class="button button--secondary button--big primary">
    <span>Button</span>
</button>
```

### Small

<ButtonsView example="small" />

```html
<button type="button" class="button button--primary button--small primary">
    <span>Button</span>
</button>
<button type="button" class="button button--secondary button--small primary">
    <span>Button</span>
</button>
```

## Disabled button

<ButtonsView example="disabled" />

```html
<button type="button" class="button button--primary primary" disabled>
    <span>Button</span>
</button>
<button type="button" class="button button--secondary primary" disabled>
    <span>Button</span>
</button>
```

## SCSS

### Variables

```scss
// Button multipliers
$button-padding-x-multiplier: 2 !default;
$button-icon-font-size-multiplier: 1.5 !default;

// Button
$button-padding-y: 0.75rem !default;
$button-padding-x: $button-padding-y * $button-padding-x-multiplier !default;
$button-background-color: transparent !default;
$button-color: $body-color !default;
$button-border-width: 1px !default;
$button-border-color: transparent !default;
$button-border-radius: 0.25rem !default;
$button-font-size: $body-font-size !default;
$button-font-weight: $font-weight-medium !default;
$button-line-height: $body-line-height !default;
$button-text-transform: null !default;
$button-disabled-opacity: 0.5 !default;

$button-icon-width: calc(
    ($button-padding-y * 2) + ($button-font-size * $button-line-height) + ($button-border-width * 2)
) !default;
$button-icon-margin: div($button-padding-x, 2) !default;
$button-icon-font-size: $button-font-size * $button-icon-font-size-multiplier !default;

// Button big
$button-big-padding-y: $button-padding-y + 0.125rem !default;
$button-big-padding-x: $button-big-padding-y * $button-padding-x-multiplier !default;
$button-big-font-size: $body-font-size * 1.25 !default;

$button-big-icon-width: calc(
    ($button-big-padding-y * 2) + ($button-big-font-size * $button-line-height) + ($button-border-width * 2)
) !default;
$button-big-icon-margin: div($button-big-padding-x, 2) !default;
$button-big-icon-font-size: $button-big-font-size * $button-icon-font-size-multiplier !default;

// Button small
$button-small-padding-y: $button-padding-y - 0.25rem !default;
$button-small-padding-x: $button-small-padding-y * $button-padding-x-multiplier !default;
$button-small-font-size: $body-font-size * 0.875 !default;

$button-small-icon-width: calc(
    ($button-small-padding-y * 2) + ($button-small-font-size * $button-line-height) + ($button-border-width * 2)
) !default;
$button-small-icon-margin: div($button-small-padding-x, 2) !default;
$button-small-icon-font-size: $button-small-font-size * $button-icon-font-size-multiplier !default;
```

### Mixins

```scss
@mixin button {
    --#{$prefix}-button-padding: #{$button-padding-y $button-padding-x};
    --#{$prefix}-button-background-color: #{$button-background-color};
    --#{$prefix}-button-color: #{$button-color};
    --#{$prefix}-button-border-color: #{$button-border-color};
    --#{$prefix}-button-font-size: #{$button-font-size};
    --#{$prefix}-button-hover-background-color: #{$button-background-color};
    --#{$prefix}-button-hover-color: #{$button-color};
    --#{$prefix}-button-hover-border-color: #{$button-border-color};
    --#{$prefix}-button-icon-margin: #{$button-icon-margin};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: var(--#{$prefix}-button-padding);
    background-color: var(--#{$prefix}-button-background-color);
    color: var(--#{$prefix}-button-color);
    border: $button-border-width solid var(--#{$prefix}-button-border-color);
    border-radius: $button-border-radius;
    font-size: var(--#{$prefix}-button-font-size);
    font-weight: $button-font-weight;
    line-height: $button-line-height;
    text-align: center;
    text-decoration: none;
    text-transform: $button-text-transform;
    text-shadow: none;
    cursor: pointer;
    user-select: none;
    transition: transition(background-color, color, border-color);
    transition-duration: 0.15s;

    &:hover,
    &:focus {
        background-color: var(--#{$prefix}-button-hover-background-color);
        color: var(--#{$prefix}-button-hover-color);
        border-color: var(--#{$prefix}-button-hover-border-color);
    }

    &:disabled,
    &.disabled {
        opacity: $button-disabled-opacity;
        pointer-events: none;
    }

    > :not([hidden]) {
        ~ :not([hidden]) {
            margin-left: var(--#{$prefix}-button-icon-margin);
        }
    }
}

@mixin button-primary($color, $hover-color: darken($color, 5)) {
    --#{$prefix}-button-background-color: #{$color};
    --#{$prefix}-button-color: #{color-contrast($color)};
    --#{$prefix}-button-border-color: #{$color};
    --#{$prefix}-button-hover-background-color: #{$hover-color};
    --#{$prefix}-button-hover-color: #{color-contrast($hover-color)};
    --#{$prefix}-button-hover-border-color: #{$hover-color};
}

@mixin button-secondary($color) {
    --#{$prefix}-button-color: #{$color};
    --#{$prefix}-button-border-color: #{$color};
    --#{$prefix}-button-hover-background-color: #{$color};
    --#{$prefix}-button-hover-color: #{color-contrast($color)};
}

@mixin button-icon {
    --#{$prefix}-button-padding: 0;
    --#{$prefix}-button-font-size: #{$button-icon-font-size};
    --#{$prefix}-button-icon-width: #{$button-icon-width};
    justify-content: center;
    width: var(--#{$prefix}-button-icon-width);
    aspect-ratio: 1;
}

@mixin button-size($size) {
    @if $size == 'big' {
        --#{$prefix}-button-padding: #{$button-big-padding-y $button-big-padding-x};
        --#{$prefix}-button-font-size: #{$button-big-font-size};
        --#{$prefix}-button-icon-margin: #{$button-big-icon-margin};
    } @else if $size == 'small' {
        --#{$prefix}-button-padding: #{$button-small-padding-y $button-small-padding-x};
        --#{$prefix}-button-font-size: #{$button-small-font-size};
        --#{$prefix}-button-icon-margin: #{$button-small-icon-margin};
    }
}

@mixin button-icon-size($size) {
    @if $size == 'big' {
        --#{$prefix}-button-font-size: #{$button-big-icon-font-size};
        --#{$prefix}-button-icon-width: #{$button-big-icon-width};
    } @else if $size == 'small' {
        --#{$prefix}-button-font-size: #{$button-small-icon-font-size};
        --#{$prefix}-button-icon-width: #{$button-small-icon-width};
    }
}
```
