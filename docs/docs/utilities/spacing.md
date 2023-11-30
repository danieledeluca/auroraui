# Spacing

## Overview

| Property  | Class       | Values            | Responsive |
| --------- | ----------- | ----------------- | ---------- |
| `margin`  | `m-{value}` | `$margin-values`  | `true`     |
| `padding` | `p-{value}` | `$padding-values` | `true`     |

## Margin and padding

The classes are named using the format `{property}{side}-{breakpoint}-{value}`.

Where _property_ is one of:

-   `m` - for classes that set `margin`
-   `p` - for classes that set `padding`

Where _side_ is one of:

-   `t` - for classes that set `margin-top` or `padding-top`
-   `b` - for classes that set `margin-bottom` or `padding-bottom`
-   `l` - for classes that set `margin-left` or `padding-left`
-   `r` - for classes that set `margin-right` or `padding-right`
-   `x` - for classes that set `*-left` or `*-right`
-   `y` - for classes that set `*-top` or `*-bottom`
-   blank - for classes that set a `margin` or `padding` on all 4 sides of the element

Where _value_ is one of:

-   `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
-   `1` - for classes that eliminate the `margin` or `padding` to `0.25rem`
-   `2` - for classes that eliminate the `margin` or `padding` to `0.5rem`
-   `3` - for classes that eliminate the `margin` or `padding` to `1rem`
-   `4` - for classes that eliminate the `margin` or `padding` to `1.5rem`
-   `5` - for classes that eliminate the `margin` or `padding` to `3rem`
-   `auto` - for classes that eliminate the `margin` to `auto`

## SCSS

### Variables

```scss
// Spacer
$spacer: 1rem !default;
$spacers: (
    '0': 0,
    '1': $spacer * 0.25,
    '2': $spacer * 0.5,
    '3': $spacer,
    '4': $spacer * 1.5,
    '5': $spacer * 3,
) !default;

// Utilities values
$padding-values: $spacers !default;
$margin-values: map-merge(
    $spacers,
    (
        auto: auto,
    )
) !default;

$utilities: (
    'margin': (
        'responsive': true,
        'property': margin,
        'class': m,
        'values': $margin-values,
    ),
    'margin-x': (
        'responsive': true,
        'property': (
            margin-right,
            margin-left,
        ),
        'class': mx,
        'values': $margin-values,
    ),
    'margin-y': (
        'responsive': true,
        'property': (
            margin-top,
            margin-bottom,
        ),
        'class': my,
        'values': $margin-values,
    ),
    'margin-top': (
        'responsive': true,
        'property': margin-top,
        'class': mt,
        'values': $margin-values,
    ),
    'margin-bottom': (
        'responsive': true,
        'property': margin-bottom,
        'class': mb,
        'values': $margin-values,
    ),
    'padding': (
        'responsive': true,
        'property': padding,
        'class': p,
        'values': $padding-values,
    ),
    'padding-x': (
        'responsive': true,
        'property': (
            padding-right,
            padding-left,
        ),
        'class': px,
        'values': $padding-values,
    ),
    'padding-y': (
        'responsive': true,
        'property': (
            padding-top,
            padding-bottom,
        ),
        'class': py,
        'values': $padding-values,
    ),
    'padding-top': (
        'responsive': true,
        'property': padding-top,
        'class': pt,
        'values': $padding-values,
    ),
    'padding-bottom': (
        'responsive': true,
        'property': padding-bottom,
        'class': pb,
        'values': $padding-values,
    ),
) !default;
```
