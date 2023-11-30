<script setup lang="ts">
const props = defineProps<{
    example: string;
}>();
</script>

<template>
    <div class="docs-example">
        <div class="container">
            <div class="grid">
                <template v-if="props.example === 'auto-width'">
                    <div class="col">Col</div>
                    <div class="col">Col</div>
                    <div class="col">Col</div>
                </template>
                <template v-if="props.example === 'variable-width'">
                    <div class="col-8">Col 8</div>
                    <div class="col-4">Col 4</div>
                </template>
                <template v-if="props.example === 'responsive-columns'">
                    <div class="col col-md-8">Col md 8</div>
                    <div class="col col-md-4">Col md 4</div>
                </template>
                <template v-if="props.example === 'columns-order'">
                    <div class="col-8 order-2">Col 8</div>
                    <div class="col-4 order-1">Col 4</div>
                </template>
                <template v-if="props.example === 'columns-offset'">
                    <div class="col-4 offset-2">Col 4</div>
                    <div class="col-4 offset-1">Col 4</div>
                </template>
                <template v-if="props.example === 'nesting-columns'">
                    <div class="col-4">Col 4</div>
                    <div class="col-8">
                        <div class="grid">
                            <div class="col-8">Col 8</div>
                            <div class="col-4">Col 4</div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/layout/container';
@import '../../../../src/scss/layout/grid';

.grid {
    > * {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: $primary;
        color: color-contrast($primary);
        text-align: center;
        outline: 1px solid darken($primary, 20);
    }
}
</style>
