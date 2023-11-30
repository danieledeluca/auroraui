<script setup lang="ts">
import Cover from '../components/Cover.vue';

const props = defineProps<{
    example: string;
}>();
</script>

<template>
    <div class="docs-example">
        <template v-if="props.example === 'example'">
            <Cover />
        </template>
        <template v-if="props.example === 'with-link'">
            <Cover :hasLink="true" />
        </template>
        <template v-if="props.example === 'full-link'">
            <Cover :isLink="true" />
        </template>
        <template v-if="props.example === 'alignment-center'">
            <Cover alignment="center" />
        </template>
        <template v-if="props.example === 'alignment-right'">
            <Cover alignment="right" />
        </template>
        <template v-if="props.example === 'parallax'">
            <Cover
                title="Parallax title"
                content="Parallax content, lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsam."
                :showBody="false"
                :showOverlay="false"
                :isParallax="true"
            />
        </template>
    </div>
</template>
