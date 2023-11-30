<script setup lang="ts">
const props = defineProps<{
    example: string;
}>();
</script>

<template>
    <div class="docs-example">
        <template v-if="props.example === 'base'">
            <table>
                <thead>
                    <tr>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                </tbody>
            </table>
        </template>
        <template v-if="props.example === 'footer'">
            <table>
                <thead>
                    <tr>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Footer</td>
                        <td>Footer</td>
                        <td>Footer</td>
                    </tr>
                </tfoot>
            </table>
        </template>
        <template v-if="props.example === 'caption'">
            <table>
                <caption>
                    This is an example of caption
                </caption>
                <thead>
                    <tr>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                </tbody>
            </table>
        </template>
        <template v-if="props.example === 'responsive'">
            <table class="table--responsive">
                <thead>
                    <tr>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-th="Heading">Cell</td>
                        <td data-th="Heading">Cell</td>
                        <td data-th="Heading">Cell</td>
                    </tr>
                    <tr>
                        <td data-th="Heading">Cell</td>
                        <td data-th="Heading">Cell</td>
                        <td data-th="Heading">Cell</td>
                    </tr>
                    <tr>
                        <td data-th="Heading">Cell</td>
                        <td data-th="Heading">Cell</td>
                        <td data-th="Heading">Cell</td>
                    </tr>
                </tbody>
            </table>
        </template>
        <template v-if="props.example === 'stripped'">
            <table class="table--stripped">
                <thead>
                    <tr>
                        <th>Heading</th>
                        <th>Heading</th>
                        <th>Heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                </tbody>
            </table>
        </template>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/reset/reset';
@import '../../../../src/scss/base/tables';
</style>
