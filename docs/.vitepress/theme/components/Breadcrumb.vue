<script setup lang="ts">
const props = defineProps<{
    numberOfItems: number;
}>();

const items = new Array(props.numberOfItems).fill(0);
const breadcrumbItems = items.map((item, index) => {
    return {
        label: index === 0 ? 'Home' : `Page ${index}`,
        isLink: index === 0,
    };
});
</script>

<template>
    <div class="docs-example">
        <nav class="breadcrumb">
            <ul class="breadcrumb__list">
                <li v-for="breadcrumb in breadcrumbItems" class="breadcrumb__item">
                    <span v-if="!breadcrumb.isLink" class="breadcrumb__link">{{ breadcrumb.label }}</span>
                    <a v-else href="javascript:void(0)" class="breadcrumb__link">
                        <span>{{ breadcrumb.label }}</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/base';
@import '../../../../src/scss/components/breadcrumb';
</style>
