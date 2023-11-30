<script setup lang="ts">
import Card from '../components/Card.vue';

const props = defineProps<{
    example: string;
}>();
</script>

<template>
    <div class="docs-example">
        <div class="grid">
            <div class="col-md-6">
                <template v-if="props.example === 'example'">
                    <Card />
                </template>
                <template v-if="props.example === 'with-link'">
                    <Card :hasLink="true" />
                </template>
                <template v-if="props.example === 'full-link'">
                    <Card :isLink="true" />
                </template>
                <template v-if="props.example === 'without-image'">
                    <Card :hasImage="false" />
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/layout/grid';
</style>
