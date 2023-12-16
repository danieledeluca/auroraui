# Advanced usage

If in your projects you're using SCSS you can import some useful `mixin`, to help you to use the icons trough CSS.

```scss
@mixin sparkle-icon($icon) {
    content: map-get($sparkle-icons, $icon);
    display: inline-block;
    font-family: $sparkle-icons-font-family;
}

@mixin sparkle-icon-animation($name) {
    animation: unquote(map-get($sparkle-icon-animations, $name));
}
```

To use these mixins, first you need to import them.

```scss
@import '@sparkleui/sparkle-icons/scss';
```

Then just include them with the correct name (you can find the list of all the names [here](../demo/icons#variables)).

```scss
.foo::before {
    @include sparkle-icon('sparkle');
    @include sparkle-icon-animations('beat');
}
```
