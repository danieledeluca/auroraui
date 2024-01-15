<script setup lang="ts">
const props = defineProps<{
    icon?: string;
    animation?: string;
    example: string;
}>();

const iconClass = `si-icon-${props.icon}`;
</script>

<template>
    <div class="docs-example">
        <template v-if="props.example === 'preview'">
            <div class="preview">
                <i v-if="!props.animation" :class="iconClass"></i>
                <i v-else :class="`si-icon-sparkle si-icon-${props.animation}`"></i>
            </div>
        </template>
        <template v-if="props.example === 'examples'">
            <div class="h2"><i :class="iconClass"></i> Example heading</div>
            <p><i :class="iconClass"></i> Example text</p>
            <p>
                <a href="javascript:void(0)"><i :class="iconClass"></i> Example link</a>
            </p>
            <button type="button" class="button button--primary primary">
                <i :class="iconClass"></i>
                <span>Example button</span>
            </button>
        </template>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/base';

.preview {
    display: grid;
    place-content: center;
    padding: 5rem;
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    font-size: 10rem;
}
</style>
