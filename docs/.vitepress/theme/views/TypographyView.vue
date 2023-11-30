<script setup lang="ts">
const props = defineProps<{
    example: string;
}>();
</script>

<template>
    <div class="docs-example">
        <template v-if="props.example === 'headings'">
            <div class="h1">This is an example of heading 1</div>
            <div class="h2">This is an example of heading 2</div>
            <div class="h3">This is an example of heading 3</div>
            <div class="h4">This is an example of heading 4</div>
            <div class="h5">This is an example of heading 5</div>
            <div class="h6">This is an example of heading 6</div>
        </template>
        <template v-if="props.example === 'display'">
            <div class="huge">Huge text</div>
            <div class="large">Large text</div>
            <div class="bigger">Bigger text</div>
            <div class="big">Big text</div>
        </template>
        <template v-if="props.example === 'paragraph'">
            <p>This is an example of paragraph</p>
        </template>
        <template v-if="props.example === 'lead'">
            <p class="lead">This is an example of lead paragraph</p>
        </template>
        <template v-if="props.example === 'unordered-lists'">
            <ul>
                <li>This is an example of unordered list</li>
                <li>
                    This is an example of unordered list
                    <ul>
                        <li>This is an example of nested list</li>
                        <li>This is an example of nested list</li>
                    </ul>
                </li>
                <li>This is an example of unordered list</li>
            </ul>
        </template>
        <template v-if="props.example === 'ordered-lists'">
            <ol>
                <li>This is an example of ordered list</li>
                <li>
                    This is an example of ordered list
                    <ol>
                        <li>This is an example of nested list</li>
                        <li>This is an example of nested list</li>
                    </ol>
                </li>
                <li>This is an example of ordered list</li>
            </ol>
        </template>
        <template v-if="props.example === 'nav-lists'">
            <nav>
                <ul>
                    <li>This is an example of list inside a <code>&lt;nav&gt</code> element</li>
                    <li>This is an example of list inside a <code>&lt;nav&gt</code> element</li>
                </ul>
            </nav>
        </template>
        <template v-if="props.example === 'description-lists'">
            <dl>
                <dt>This is an example of term for description list</dt>
                <dd>This is an example of description for description list</dd>
                <dt>This is an example of term for description list</dt>
                <dd>This is an example of description for description list</dd>
            </dl>
        </template>
        <template v-if="props.example === 'blockquote'">
            <blockquote>
                <p>This is an example of blockquote</p>
            </blockquote>
        </template>
        <template v-if="props.example === 'blockquote-caption'">
            <figure>
                <blockquote>
                    <p>This is an example of the blockquote with caption</p>
                </blockquote>
                <figcaption>This is an example of caption <cite>with cite</cite></figcaption>
            </figure>
        </template>
        <template v-if="props.example === 'address'">
            <address>
                <strong>This is an example of address</strong><br />
                This is an example of address<br />
                <a href="#">This is an example of address</a>
            </address>
        </template>
        <template v-if="props.example === 'inline-text-elements'">
            <p><a href="#">This is an example of link</a></p>
            <p><small>This is an example of small text</small></p>
            <p><strong>This is an example of bold text</strong></p>
            <p><b>This is an example of bold text</b></p>
            <p><em>This is an example of italic text</em></p>
            <p><i>This is an example of italic text</i></p>
            <p><del>This is an example of delete text</del></p>
            <p><s>This is an example of delete text</s></p>
            <p><ins>This is an example of underline text</ins></p>
            <p><u>This is an example of underline text</u></p>
            <p>This is an example of <mark>highlight</mark> text</p>
            <p>This is an example of <sub>subscript</sub> text</p>
            <p>This is an example of <sup>superscript</sup> text</p>
            <p>This is an example of <abbr title="Abbreviated">abbr</abbr> text</p>
        </template>
        <template v-if="props.example === 'code-elements'">
            <pre>&lt;p&gt;This is an example of preformatted text&lt;/p&gt;</pre>
            <p>This is an example of <code>inline code</code></p>
            <pre><code>This is an example of inline code inside a &lt;pre&gt; element</code></pre>
            <p>This is an example of <kbd>keyboard input</kbd></p>
            <p>This is an example of <samp>sample output</samp></p>
            <p>This is an example of <var>variable</var></p>
        </template>
        <template v-if="props.example === 'hr'">
            <hr />
        </template>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/reset/reset';
@import '../../../../src/scss/base/typography';
</style>
