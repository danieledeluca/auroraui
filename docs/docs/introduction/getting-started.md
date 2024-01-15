<script setup>
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
</script>

# Getting started

## Install

Sparkle are published to NPM, but they can also be manually downloaded if needed.

::: warning
To make this library work you need to install also [Sparkle Icons](../../icons/introduction/getting-started.md).
:::

### NPM

Install Sparkle with npm.

```sh
# Install Sparkle, Sparkle Icons
npm install @sparkleui/sparkle @sparkleui/sparkle-icons
```

### Download

Download the [release](https://github.com/sparkleui/sparkle/releases/) from GitHub.

<VPButton text="Download latest release" href="https://github.com/sparkleui/sparkle/releases/latest/"></VPButton>

### CDN

Include the library in your website from jsDelivr.

#### CSS

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sparkleui/sparkle/dist/sparkle.min.css" />
```

#### JS

```html
<script src="https://cdn.jsdelivr.net/npm/@sparkleui/sparkle/dist/sparkle.umd.cjs"></script>
```

## Import

1. **Import Sparkle's CSS**.

::: code-group

```css [css]
@import url('@sparkleui/sparkle/css');
```

```scss [scss]
// Import the compiled version
@import '@sparkleui/sparkle/css';

// or the source version
@import '@sparkleui/sparkle/scss';
```

```js [js]
import '@sparkleui/sparkle/css';
```

:::

::: tip
You can also import the stylesheets individually if you want. Read [Advanced Usage](./advanced-usage.md#scss) for details.
:::

2. **Load the CSS and import Sparkle's JS**.

```js
// Import Sparkle Icons
import '@sparkleui/sparkle-icons';

// Import your custom CSS
import './style.scss';

// Import all Sparkle's JS
import * as sparkleUi from '@sparkleui/sparkle';
```

::: tip
You can also import the components individually if you want. Read [Advanced Usage](./advanced-usage.md#javascript) for details.
:::
