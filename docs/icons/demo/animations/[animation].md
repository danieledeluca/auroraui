<script setup>
import { useData } from 'vitepress';
import IconView from '@/views/IconView.vue';
import { capitalize } from '@/composables/utils.ts';

const { params } = useData();
</script>

# {{ capitalize($params.animation) }}

## Preview

<IconView :animation="$params.animation" example="preview" />

## Usage

```html-vue [HTML]
<i class="si-icon-sparkle si-icon-{{ $params.animation }}"></i>
```
