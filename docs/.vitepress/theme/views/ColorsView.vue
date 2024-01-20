<script setup lang="ts">
import { allColors, parseColorVariable } from '../composables/colors';

const props = defineProps<{
    color: string;
}>();

const currentColors = allColors[props.color];
</script>

<template>
    <div class="colors">
        <div v-for="[variable] in Object.entries(currentColors)" class="color">
            <div class="color__preview" :style="{ backgroundColor: currentColors[variable] }"></div>
            <div class="color__name">
                <span>{{ parseColorVariable(variable) }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';

.colors {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;

    .color {
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        font-size: $small-font-size;
        text-align: center;
    }
}
.color__preview {
    border-radius: 12px;
    aspect-ratio: 1;
}

.color__name {
    margin-top: 0.5rem;
}
</style>
