<script setup lang="ts">
import { allColors, parseColorVariable } from '../composables/colors';

const props = defineProps<{
    color: string;
}>();
</script>

<template>
    <div class="colors">
        <div
            v-for="[variable] in Object.entries(allColors[props.color])"
            class="color"
            :class="parseColorVariable(variable)"
        >
            <span>{{ variable }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';

.colors {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;

    .color {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.25rem;
        border-radius: 0.25rem;
        font-size: $small-font-size;
        text-align: center;
        aspect-ratio: 1;

        @each $gray, $value in $grays {
            &.#{$gray} {
                background-color: $value;
                color: color-contrast($value);
            }
        }

        @each $color, $value in $colors {
            &.#{$color} {
                background-color: $value;
                color: color-contrast($value);
            }
        }

        @each $theme-color, $value in $theme-colors {
            &.#{$theme-color} {
                background-color: $value;
                color: color-contrast($value);
            }
        }
    }
}
</style>
