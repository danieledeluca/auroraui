# Advanced usage

## SCSS

If in your projects you're using SCSS you can import the the stylesheets individually.

There are some stylesheets that are **mandatory**.

```scss
@import '@sparkleui/sparkle/scss/abstracts/abstracts';
@import '@sparkleui/sparkle/scss/base/base';
```

::: tip
See the [source code](./contents.md) to know the path for the specif file you want to import.
:::

### Example

```scss
// Import the mandatory stylesheets
@import '@sparkleui/sparkle/scss/abstracts/abstracts';
@import '@sparkleui/sparkle/scss/base/base';

// Import the stylesheet for the cover component
@import '@sparkleui/sparkle/scss/components/cover';
```

## JavaScript

Similarly, you can import single JavaScript component.

### Example

```js
import { SparkleParallax } from '@sparkleui/sparkle';
```

::: tip
See the [source code](./contents.md) to know the path for the specif file you want to import.
:::
