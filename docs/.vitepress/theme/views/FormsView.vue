<script setup lang="ts">
import FormField from '../components/FormField.vue';
import Button from '../components/Button.vue';

const props = defineProps<{
    example: string;
}>();
</script>

<template>
    <div class="docs-example">
        <form @submit.prevent>
            <template v-if="props.example === 'example'">
                <div class="grid mb-3">
                    <div class="col-md-6 mb-3 mb-md-0">
                        <FormField label="Name" id="name" type="text" placeholder="First name" />
                    </div>
                    <div class="col-md-6">
                        <FormField label="Last name" id="last-name" type="text" placeholder="Last name" />
                    </div>
                </div>
                <FormField label="Email address" id="email" type="text" placeholder="Email address" />
                <fieldset>
                    <FormField
                        label="I agree to the Terms and Conditions"
                        id="terms-conditions"
                        type="checkbox"
                        :isRequired="true"
                    />
                </fieldset>
                <Button text="Submit" type="primary" color="primary" />
            </template>
            <template v-else-if="['checkbox', 'radio'].includes(props.example)">
                <fieldset>
                    <FormField :type="props.example" />
                    <FormField
                        :label="`This is an example of ${props.example} checked input`"
                        :id="`${props.example}-checked-example`"
                        :type="props.example"
                        :isChecked="true"
                    />
                </fieldset>
            </template>
            <template v-else-if="props.example === 'textarea'">
                <FormField
                    :type="props.example"
                    :label="`This is an example of ${props.example}`"
                    placeholder="Textarea"
                />
            </template>
            <template v-else-if="props.example === 'select'">
                <FormField :type="props.example" :label="`This is an example of ${props.example}`" />
            </template>
            <template v-else-if="props.example === 'select-multiple'">
                <FormField
                    label="This is an example of multiple select"
                    :id="`${props.example}-example`"
                    type="select"
                    :isChecked="true"
                    :isMultiple="true"
                />
            </template>
            <template v-else-if="props.example === 'buttons'">
                <div class="buttons">
                    <button type="button">Button</button>
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </template>
            <template v-else-if="props.example === 'progress'">
                <progress max="100" value="50"></progress>
            </template>
            <template v-else-if="props.example === 'progress-indeterminate'">
                <progress></progress>
            </template>
            <template v-else-if="props.example === 'legend'">
                <fieldset>
                    <legend>This is an example of legend</legend>
                </fieldset>
            </template>
            <template v-else-if="props.example === 'disabled'">
                <FormField
                    label="This is an example of disabled text input"
                    id="text-disabled-example"
                    type="text"
                    :isDisabled="true"
                />
            </template>
            <template v-else-if="props.example === 'disabled-checkbox'">
                <fieldset>
                    <FormField
                        label="This is an example of disabled checkbox input"
                        id="checkbox-disabled-example"
                        type="checkbox"
                        :isDisabled="true"
                    />
                </fieldset>
            </template>
            <template v-else-if="props.example === 'disabled-radio'">
                <fieldset>
                    <FormField
                        label="This is an example of disabled radio input"
                        id="radio-disabled-example"
                        type="radio"
                        :isDisabled="true"
                    />
                </fieldset>
            </template>
            <template v-else-if="props.example === 'disabled-select'">
                <FormField
                    label="This is an example of disabled select"
                    id="select-disabled-example"
                    type="select"
                    :isDisabled="true"
                />
            </template>
            <template v-else-if="props.example === 'required'">
                <FormField
                    label="This is an example of required text input"
                    id="text-required-example"
                    type="text"
                    :isRequired="true"
                />
            </template>
            <template v-else-if="props.example === 'required-checkbox'">
                <fieldset>
                    <FormField
                        label="This is an example of required checkbox input"
                        id="checkbox-required-example"
                        type="checkbox"
                        :isRequired="true"
                    />
                </fieldset>
            </template>
            <template v-else-if="props.example === 'required-radio'">
                <fieldset>
                    <FormField
                        label="This is an example of required radio input"
                        id="radio-required-example"
                        type="radio"
                        :isRequired="true"
                    />
                </fieldset>
            </template>
            <template v-else-if="props.example === 'required-select'">
                <FormField
                    label="This is an example of required select"
                    id="select-required-example"
                    type="select"
                    :isRequired="true"
                />
            </template>
            <template v-else>
                <FormField :type="props.example" />
            </template>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/reset/reset';
@import '../../../../src/scss/layout/layout';
@import '../../../../src/scss/utilities';

.buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
