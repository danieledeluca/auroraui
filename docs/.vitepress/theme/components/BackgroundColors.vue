<script setup lang="ts">
import { theme, parseColorVariable } from '../composables/colors';
</script>

<template>
    <div class="docs-example">
        <p v-for="(_, variable) in theme" :class="`background-${parseColorVariable(variable)}`">
            {{ `.background-${parseColorVariable(variable)}` }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/utilities';

@each $color, $value in $theme-colors {
    .background-#{$color} {
        color: color-contrast($value);
    }
}

[class^='background-'] {
    padding: 0.75rem;
    border-radius: 0.25rem;
}
</style>
