# Overview

This function is a simpler and smaller version of [Utility API by Bootstrap](https://getbootstrap.com/docs/5.3/utilities/api/).

::: tip
If a utility class is set as `responsive`, it means that you can use the [breakpoint classes](../layout/breakpoints.md) between the property and the value => `{property}-{breakpoint}-{value}` (e.g. `text-md-primary`)
:::

## Mixins

### Utilities

Generate all the CSS for the utility classes.

```scss
@mixin utilities($utility, $infix: '') {
    $values: map-get($utility, values);

    @each $key, $value in $values {
        $properties: map-get($utility, property);

        @if type-of($properties) == 'string' {
            $properties: append((), $properties);
        }

        $class: if(map-has-key($utility, class), map-get($utility, class), nth($properties, 1));
        $class-modifier: -#{$key};

        @if $value != null {
            .#{$class}#{$infix}#{$class-modifier} {
                @each $property in $properties {
                    #{$property}: $value !important;
                }
            }
        }
    }
}
```

### Desktop only

Show an element only on desktop view.

```scss
@mixin desktop-only {
    @include mb-down(md) {
        display: none !important;
    }
}
```

### Mobile only

Show an element only on mobile view.

```scss
@mixin mobile-only {
    @include mb-up(md) {
        display: none !important;
    }
}
```

### Last child no margin

Remove the `margin-bottom` from the last child of an element.

```scss
@mixin last-child-no-margin-bottom {
    &:last-child {
        margin-bottom: 0;
    }
}
```
