import '@sparkleui/icons';

import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.scss';

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {});
    },
    enhanceApp({ app, router, siteData }) {},
} satisfies Theme;
