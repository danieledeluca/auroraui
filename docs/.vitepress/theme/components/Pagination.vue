<script setup lang="ts">
const props = defineProps<{
    numberOfItems: number;
}>();

const items = new Array(props.numberOfItems).fill(0);
const paginationItems = items.map((item, index) => {
    return {
        label: index + 1,
        isActive: index === 0,
    };
});
</script>

<template>
    <div class="docs-example">
        <nav class="pagination">
            <ul class="pagination__list">
                <li class="pagination__item">
                    <a href="javascript:void(0)" class="pagination__link">
                        <i class="si-icon-chevron-left"></i>
                    </a>
                </li>
                <li
                    v-for="paginationItem in paginationItems"
                    class="pagination__item"
                    :class="{ 'is-active': paginationItem.isActive }"
                >
                    <span v-if="paginationItem.isActive" class="pagination__link">{{ paginationItem.label }}</span>
                    <a v-else href="javascript:void(0)" class="pagination__link">
                        <span>{{ paginationItem.label }}</span>
                    </a>
                </li>
                <li class="pagination__item">
                    <a href="javascript:void(0)" class="pagination__link">
                        <i class="si-icon-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/base';
@import '../../../../src/scss/components/pagination';
</style>
