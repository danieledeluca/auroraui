import { icons } from '../../../.vitepress/theme/composables/icons.ts';

export default {
    paths() {
        return icons.reduce<{ params: { icon: string } }[]>((acc, icon) => {
            acc.push({
                params: { icon: icon.name },
            });

            return acc;
        }, []);
    },
};
