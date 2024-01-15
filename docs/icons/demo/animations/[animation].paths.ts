import { iconAnimations } from '../../../.vitepress/theme/composables/icons.ts';

export default {
    paths() {
        return iconAnimations.map((animation) => {
            return {
                params: {
                    animation,
                },
            };
        });
    },
};
