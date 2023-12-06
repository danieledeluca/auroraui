<script setup lang="ts">
const props = defineProps<{
    example: string;
}>();
</script>

<template>
    <div class="docs-example">
        <template v-if="props.example === 'figure'">
            <figure>
                <img src="/background.jpg" alt="Sparkle image" />
            </figure>
        </template>
        <template v-if="props.example === 'figcaption'">
            <figure>
                <img src="/background.jpg" alt="Sparkle image" />
                <figcaption>This is an example of figure caption</figcaption>
            </figure>
        </template>
        <template v-if="props.example === 'full-width-image'">
            <img src="/background.jpg" alt="Sparkle image" class="img--full" />
        </template>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/reset/reset';
@import '../../../../src/scss/base/images';
</style>
