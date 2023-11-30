<script setup lang="ts">
const textAlignments = ['left', 'center', 'right'];
</script>

<template>
    <div class="docs-example">
        <p v-for="alignment in textAlignments" :class="`text-${alignment}`">
            {{ `Text align ${alignment}` }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/utilities';
</style>
