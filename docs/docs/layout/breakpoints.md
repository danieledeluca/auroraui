# Breakpoints

## Available breakpoints

| Breakpoint  | Class infix | Dimensions |
| ----------- | ----------- | ---------- |
| Small       | `sm`        | ≥ 576px    |
| Medium      | `md`        | ≥ 768px    |
| Large       | `lg`        | ≥ 992px    |
| Extra large | `xl`        | ≥ 1200px   |

## Media queries

This function is used to find the breakpoint dimension. It's possible to use a custom dimension.

```scss
@function find-break($break) {
    $breakpoint: if(map-get($breakpoints, $break), map-get($breakpoints, $break), $break);

    @return $breakpoint;
}
```

### Min width

```scss
@mixin mb-up($break) {
    $min: find-break($break);

    @media (min-width: $min) {
        @content;
    }
}
```

### Max width

```scss
@mixin mb-down($break) {
    $max: find-break($break) - $break-offset;

    @media (max-width: $max) {
        @content;
    }
}
```

### Between breakpoints

```scss
@mixin mb-between($lower-break, $upper-break) {
    $min: find-break($lower-break);
    $max: find-break($upper-break) - $break-offset;

    @media (min-width: $min) and (max-width: $max) {
        @content;
    }
}
```

## SCSS

### Variables

```scss
$breakpoints: (
    'sm': 576px,
    'md': 768px,
    'lg': 992px,
    'xl': 1200px,
) !default;
$break-offset: 0.02px !default;
```
