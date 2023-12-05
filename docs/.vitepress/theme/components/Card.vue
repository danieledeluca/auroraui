<script setup lang="ts">
import Button from './Button.vue';

interface Props {
    title?: string;
    content?: string;
    buttonText?: string;
    hasImage?: boolean;
    hasLink?: boolean;
    isLink?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Card title',
    content:
        'Card content, lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod non eveniet maiores quae ipsum aut incidunt accusamus eum soluta.',
    hasImage: true,
    hasLink: false,
    isLink: false,
});
</script>

<template>
    <a v-if="props.isLink" href="javascript:void(0)" class="card">
        <div v-if="props.hasImage" class="card__image">
            <img src="/sparkle/background.jpg" alt="Card image" />
        </div>
        <div class="card__body">
            <div class="h3 card__title">
                <span>{{ props.title }}</span>
            </div>
            <div class="card__content">
                {{ props.content }}
            </div>
        </div>
    </a>
    <div v-else class="card">
        <a v-if="props.hasLink && props.hasImage" href="javascript:void(0)" class="card__image">
            <img src="/sparkle/background.jpg" alt="Card image" />
        </a>
        <div v-else-if="props.hasImage" class="card__image">
            <img src="/sparkle/background.jpg" alt="Card image" />
        </div>
        <div class="card__body">
            <div class="h3 card__title">
                <a v-if="props.hasLink" href="javascript:void(0)" class="card__link">
                    <span>{{ props.title }}</span>
                </a>
                <span v-else>{{ props.title }}</span>
            </div>
            <div class="card__content">
                {{ props.content }}
            </div>
            <div v-if="props.hasLink" class="card__actions">
                <Button html-tag="link" type="primary" color="primary" :text="props.buttonText" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/base';
@import '../../../../src/scss/components/card';
</style>
