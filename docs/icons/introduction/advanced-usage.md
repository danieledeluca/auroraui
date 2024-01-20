# Advanced usage

If in your projects you're using SCSS you can import some useful `mixin`, to help you to use the icons trough CSS.

```scss
@mixin sparkle-icon($icon: null) {
    @if $icon {
        content: map-get($sparkle-icons, $icon);
    }

    display: inline-block;
    font-family: $sparkle-icons-font-family !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: -0.125em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@mixin sparkle-icon-animation($name) {
    animation: map-get($sparkle-icon-animations, $name);
}
```

To use these mixins, first you need to import them.

```scss
@import '@sparkleui/icons/scss';
```

Then just include them with the correct name (you can find the list of all the names [here](../demo/icons/index.md#variables)).

```scss
.foo::before {
    @include sparkle-icon('sparkle');
    @include sparkle-icon-animations('beat');
}
```
