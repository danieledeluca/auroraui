<script setup>
import { useData } from 'vitepress';
import IconView from '@/views/IconView.vue';
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue';
import { capitalize, kebabToText } from '@/composables/utils.ts';
import { icons } from '@/composables/icons.ts';

const { params } = useData();
const iconData = icons.find((icon) => icon.name === params.value.icon);
</script>

# {{ kebabToText(capitalize($params.icon)) }}

<p v-if="iconData.tags.length"><strong>Tags</strong>: {{ iconData.tags.join(', ')}}</p>

## Preview

<IconView :icon="$params.icon" example="preview" />

## Examples

<IconView :icon="$params.icon" example="examples" />

## Download

Download the SVG to use or edit.

<VPButton text="Download SVG file" :href="`https://github.com/sparkleui/sparkle-icons/blob/main/src/icons/${$params.icon}.svg`"></VPButton>

## Usage

::: code-group

```html-vue [HTML]
<i class="si-icon-{{ $params.icon }}"></i>
```

```html-vue [SVG]
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="{{ iconData.path }}" />
</svg>
```

:::

## Icon code

-   HTML: <code>&#x{{ iconData.code }};</code>
-   CSS: <code>\\{{ iconData.code }}</code>
