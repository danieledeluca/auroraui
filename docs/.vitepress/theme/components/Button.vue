<script setup lang="ts">
interface Props {
    htmlTag?: 'link' | 'button';
    link?: string;
    text?: string;
    type?: 'primary' | 'secondary';
    color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'light' | 'dark';
    size?: 'big' | 'small';
    hasIcon?: boolean;
    iconPosition?: 'left' | 'right';
    isIconOnly?: boolean;
    isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    htmlTag: 'button',
    link: 'javascript:void(0)',
    text: 'Button',
    hasIcon: false,
    isIconOnly: false,
    isDisabled: false,
});

const buttonClasses = ['button'];
if (props.type) buttonClasses.push(`button--${props.type}`);
if (props.color) buttonClasses.push(props.color);
if (props.size) buttonClasses.push(`button--${props.size}`);
if (props.isIconOnly) buttonClasses.push(`button--icon`);
if (props.htmlTag === 'link' && props.link && props.isDisabled) buttonClasses.push('disabled');
</script>

<template>
    <button v-if="props.htmlTag === 'button'" type="button" :class="buttonClasses" :disabled="props.isDisabled">
        <i v-if="(props.hasIcon && props.iconPosition === 'left') || props.isIconOnly" class="si-icon-sparkle"></i>
        <span v-if="!props.isIconOnly">{{ props.text }}</span>
        <i v-if="props.hasIcon && props.iconPosition === 'right'" class="si-icon-sparkle"></i>
    </button>
    <a v-if="props.htmlTag === 'link'" :href="props.link" :class="buttonClasses">
        <i v-if="(props.hasIcon && props.iconPosition === 'left') || props.isIconOnly" class="si-icon-sparkle"></i>
        <span v-if="!props.isIconOnly">{{ props.text }}</span>
        <i v-if="props.hasIcon && props.iconPosition === 'right'" class="si-icon-sparkle"></i>
    </a>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/reset/reset';
@import '../../../../src/scss/base/buttons';
</style>
