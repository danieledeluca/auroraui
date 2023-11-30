<script setup lang="ts">
import { theme, parseColorVariable } from '../composables/colors';
</script>

<template>
    <div class="docs-example">
        <p v-for="(_, variable) in theme" :class="`text-${parseColorVariable(variable)}`">
            {{ `.text-${parseColorVariable(variable)}` }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/utilities';
</style>
