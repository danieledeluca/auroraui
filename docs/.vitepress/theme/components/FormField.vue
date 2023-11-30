<script setup lang="ts">
const props = defineProps<{
    label?: string;
    type: string;
    id?: string;
    name?: string;
    placeholder?: string;
    options?: string[];
    isDisabled?: boolean;
    isChecked?: boolean;
    isRequired?: boolean;
    isMultiple?: boolean;
}>();

const labelText = props.label || `This is an example of ${props.type} input`;
const labelClass = props.isRequired ? 'is-required' : '';
const inputId = props.id || `${props.type}-example`;
const inputPlaceholder = props.placeholder || `Input ${props.type}`;
const selectOptions = props.options || new Array(4).fill('This is an example of option');
</script>

<template>
    <template v-if="['checkbox', 'radio'].includes(props.type)">
        <label v-if="labelText" :for="inputId" :class="labelClass">
            <input
                :type="props.type"
                :id="inputId"
                :name="props.type === 'radio' ? `${props.type}-example` : ''"
                :disabled="props.isDisabled"
                :checked="props.isChecked"
                :required="props.isRequired"
            />
            <span>{{ labelText }}</span>
        </label>
    </template>
    <template v-else>
        <label v-if="labelText" :for="inputId" :class="labelClass">{{ labelText }}</label>
        <template v-if="props.type === 'textarea'">
            <textarea
                :type="props.type"
                :id="inputId"
                :placeholder="inputPlaceholder"
                :disabled="props.isDisabled"
                :required="props.isRequired"
            ></textarea>
        </template>
        <template v-else-if="props.type === 'select'">
            <select
                :id="inputId"
                :disabled="props.isDisabled"
                :required="props.isRequired"
                :multiple="props.isMultiple"
            >
                <option v-for="(option, index) in selectOptions" :value="index">{{ option }}</option>
            </select>
        </template>
        <template v-else>
            <input
                :type="props.type"
                :id="inputId"
                :placeholder="inputPlaceholder"
                :disabled="props.isDisabled"
                :required="props.isRequired"
            />
        </template>
    </template>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/reset/reset';
@import '../../../../src/scss/base/forms';
</style>
