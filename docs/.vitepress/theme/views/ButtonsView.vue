<script setup lang="ts">
import Button from '../components/Button.vue';
import { theme, parseColorVariable } from '../composables/colors';

const props = defineProps<{
    example: string;
}>();
</script>

<template>
    <div class="docs-example">
        <div class="buttons">
            <template v-if="props.example === 'base'">
                <Button />
            </template>
            <template v-if="props.example === 'primary'">
                <Button
                    v-for="[variable] in Object.entries(theme)"
                    type="primary"
                    :color="parseColorVariable(variable)"
                />
            </template>
            <template v-if="props.example === 'secondary'">
                <Button
                    v-for="[variable] in Object.entries(theme)"
                    type="secondary"
                    :color="parseColorVariable(variable)"
                />
            </template>
            <template v-if="props.example === 'text-icon'">
                <Button type="primary" color="primary" :hasIcon="true" iconPosition="left" />
                <Button type="secondary" color="primary" :hasIcon="true" iconPosition="right" />
            </template>
            <template v-if="props.example === 'icon-only'">
                <Button type="primary" color="primary" :hasIcon="true" :isIconOnly="true" />
                <Button type="secondary" color="primary" :hasIcon="true" :isIconOnly="true" />
            </template>
            <template v-if="props.example === 'big'">
                <Button type="primary" color="primary" size="big" />
                <Button type="secondary" color="primary" size="big" />
            </template>
            <template v-if="props.example === 'small'">
                <Button type="primary" color="primary" size="small" />
                <Button type="secondary" color="primary" size="small" />
            </template>
            <template v-if="props.example === 'disabled'">
                <Button type="primary" color="primary" :isDisabled="true" />
                <Button type="secondary" color="primary" :isDisabled="true" />
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
