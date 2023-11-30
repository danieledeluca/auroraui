<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from './Button.vue';
import SparkleParallax from '../../../../src/js/classes/Parallax';

interface Props {
    title?: string;
    content?: string;
    buttonText?: string;
    alignment?: 'left' | 'center' | 'right';
    showBody?: boolean;
    showOverlay?: boolean;
    hasLink?: boolean;
    isLink?: boolean;
    isParallax?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Cover title',
    content: 'Cover content, lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsam.',
    showBody: true,
    showOverlay: true,
    alignment: 'left',
    hasLink: false,
    isLink: false,
});

const coverClasses = ['cover'];
if (props.showOverlay) coverClasses.push('cover--overlay');
if (props.alignment !== 'left') coverClasses.push(`cover--${props.alignment}`);
if (props.isParallax) coverClasses.push('parallax');

const coverStyle = {
    backgroundImage: 'url(/background.jpg)',
};

const parallax = ref(null);

onMounted(() => {
    if (props.isParallax && parallax.value) {
        const sparkleParallax = new SparkleParallax(parallax.value);
        sparkleParallax.mount();
    }
});
</script>

<template>
    <a v-if="props.isLink" href="javascript:void(0)" :class="coverClasses" :style="coverStyle" ref="parallax">
        <div v-if="props.showBody" class="cover__body">
            <div class="h1 cover__title">
                <span>{{ props.title }}</span>
            </div>
            <div class="cover__content lead">
                {{ content }}
            </div>
        </div>
    </a>
    <div v-else :class="coverClasses" :style="coverStyle" ref="parallax">
        <div v-if="props.showBody" class="cover__body">
            <div class="h1 cover__title">
                <span>{{ props.title }}</span>
            </div>
            <div class="cover__content lead">
                {{ content }}
            </div>
            <div v-if="props.hasLink" class="cover__actions">
                <Button html-tag="link" type="primary" color="primary" :text="props.buttonText" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/base';
@import '../../../../src/scss/components/cover';
@import '../../../../src/scss/components/parallax';
</style>
