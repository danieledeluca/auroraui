# Sass

## Functions

### Math

These functions implements some of [Sass math functions](https://sass-lang.com/documentation/modules/math), so you don't need to add `@use 'sass:math';` in every single file you need to use them.

```scss
@use 'sass:math';

@function div($dividend, $divisor) {
    @return math.div($dividend, $divisor);
}

@function pow($base, $exponent) {
    @return math.pow($base, $exponent);
}
```

### String replace

This function replace a string (`$search`) inside a `$string` with another string (`$replace`).

It's used in the [SVG Encode](#svg-encode) function.

```scss
@function str-replace($string, $search, $replace: '') {
    $index: str-index($string, $search);

    @if $index {
        @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
    }

    @return $string;
}
```

### Remove unit

This function remove the unit from a `$value`. If the unit of the `$value` is `rem` the value will be converted in `px` unit before returning the result.

It's used in the [Responsive font size](#responsive-font-size) function.

```scss
@function remove-unit($value) {
    $unit: unit($value);
    $modifier: if($unit == 'rem', div(1, $rem-value), 1);

    @return div($value, ($value * 0 + $modifier));
}
```

### Convert to REM

This function convert a the unit of a `$value` from `px` to `rem`.

It's used in the [Responsive font size](#responsive-font-size) function.

```scss
@function convert-to-rem($value) {
    @return #{div($value, $rem-value)}rem;
}
```

### Color contrast

These functions calculate the right color to use given a `$background-color` based on [WCAG accessibility](https://www.w3.org/TR/WCAG/#contrast-minimum).

The `luminance` function is an implementation of the procedure described by [WCAG](https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests).

```scss
$min-contrast-ratio: 4.5 !default;

@function color-contrast($background-color, $color-contrast-dark: $dark, $color-contrast-light: $light) {
    $foreground-colors: $color-contrast-light, $color-contrast-dark, $white, $black;
    $max-ratio: 0;
    $max-ratio-color: null;

    @each $color in $foreground-colors {
        $contrast-ratio: contrast-ratio($background-color, $color);

        @if $contrast-ratio > $min-contrast-ratio {
            @return $color;
        } @else if $contrast-ratio > $max-ratio {
            $max-ratio: $contrast-ratio;
            $max-ratio-color: $color;
        }
    }

    @return $max-ratio-color;
}

@function contrast-ratio($background-color, $foreground-color) {
    $lum1: luminance($background-color);
    $lum2: luminance($foreground-color);

    @return if($lum1 > $lum2, div($lum1 + 0.05, $lum2 + 0.05), div($lum2 + 0.05, $lum1 + 0.05));
}

@function luminance($color) {
    $rgb: (
        'red': div(red($color), 255),
        'green': div(green($color), 255),
        'blue': div(blue($color), 255),
    );

    @each $color, $value in $rgb {
        $value: if($value < 0.03928, div($value, 12.92), pow(div(($value + 0.055), 1.055), 2.4));
        $rgb: map-merge(
            $rgb,
            (
                $color: $value,
            )
        );
    }

    @return 0.2126 * map-get($rgb, 'red') + 0.7152 * map-get($rgb, 'green') + 0.0722 * map-get($rgb, 'blue');
}
```

### SVG Encode

This function is used to encode `svg` HTML tag.

This function is used by [form elements](../elements/forms) to use SVG icons as background images.

```scss
@function svg-encode($string) {
    $encoding-reference: (
        '<': '%3c',
        '>': '%3e',
        '#': '%23',
        '(': '%28',
        ')': '%29',
    );

    @each $char, $value in $encoding-reference {
        $string: str-replace($string, $char, $value);
    }

    @return 'data:image/svg+xml,#{$string}';
}
```

### Responsive font size

This function is a simpler and smaller version of [RFS by Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/rfs/).

```scss
$rfs-base-value: 1.25rem !default;
$rfs-factor: 3 !default;

@function rfs-value($font-size) {
    // Get breakpoint value
    $breakpoint-value: map-get($breakpoints, 'xl');

    // Remove units
    $base-value: remove-unit($rfs-base-value);
    $breakpoint-value: remove-unit($breakpoint-value);
    $value: remove-unit($font-size);

    // Add the media query only if the $value is greater than the $base-value
    @if $value <= $base-value {
        @return convert-to-rem($value);
    } @else {
        // Calculate the minimum value
        $min-value: $base-value + div(($value - $base-value), $rfs-factor);

        // Calculate the difference between the $value and the $min-value
        $diff-value: $value - $min-value;

        // Format the $min-value in rem
        $min-value: convert-to-rem($min-value);

        // Calculate the variable width between 0 and $breakpoint-value
        $variable-width: #{div($diff-value * 100, $breakpoint-value)}vw;

        // Return the calculated value
        @return calc(#{$min-value} + #{$variable-width});
    }
}
```

### Transition

This function return the value of the `transition` property based on the `$properties` that are passed to it. If no properties are passed, it will return the value for all properties.

```scss
$transition-duration: 0.3s !default;
$transition-timing-function: ease-in-out !default;

@function transition($properties...) {
    $properties-length: length($properties);
    $transition: '';

    @if $properties-length > 0 {
        @each $property in $properties {
            $index: index($properties, $property);
            $transition: '#{$transition}#{$property} #{$transition-duration} #{$transition-timing-function}';

            @if $index < $properties-length {
                $transition: '#{$transition}, ';
            }
        }
    } @else {
        $transition: 'all #{$transition-duration} #{$transition-timing-function}';
    }

    @return unquote($transition);
}
```

## Mixins

The directory `scss/abstracts/mixins/` has a lot of mixins that can be used across your own project.
