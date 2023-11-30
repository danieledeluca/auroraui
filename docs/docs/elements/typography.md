<script setup>
import TypographyView from '@/views/TypographyView.vue';
</script>

# Typography

## Headings

<TypographyView example="headings" />

```html
<h1>This is an example of heading 1</h1>
<h2>This is an example of heading 2</h2>
<h3>This is an example of heading 3</h3>
<h4>This is an example of heading 4</h4>
<h5>This is an example of heading 5</h5>
<h6>This is an example of heading 6</h6>
```

::: tip
Classes from `.h1` to `.h6` are also available.
:::

## Display

<TypographyView example="display" />

```html
<h1 class="huge">Huge text</h1>
<h1 class="large">Large text</h1>
<h1 class="bigger">Bigger text</h1>
<h1 class="big">Big text</h1>
```

## Paragraph

<TypographyView example="paragraph" />

```html
<p>This is an example of paragraph</p>
```

### Lead

<TypographyView example="lead" />

```html
<p class="lead">This is an example of lead paragraph</p>
```

## Lists

### Unordered lists

<TypographyView example="unordered-lists" />

```html
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
```

### Ordered lists

<TypographyView example="ordered-lists" />

```html
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
```

### Navigation lists

<TypographyView example="nav-lists" />

```html
<nav>
    <ul>
        <li>This is an example of list inside a <code><nav></code> element</li>
        <li>This is an example of list inside a <code><nav></code> element</li>
    </ul>
</nav>
```

### Description lists

<TypographyView example="description-lists" />

```html
<dl>
    <dt>This is an example of term for description list</dt>
    <dd>This is an example of description for description list</dd>
    <dt>This is an example of term for description list</dt>
    <dd>This is an example of description for description list</dd>
</dl>
```

## Blockquote

<TypographyView example="blockquote" />

```html
<blockquote>
    <p>This is an example of blockquote</p>
</blockquote>
```

### Blockquote with caption

<TypographyView example="blockquote-caption" />

```html
<figure>
    <blockquote>
        <p>This is an example of the blockquote with caption</p>
    </blockquote>
    <figcaption>This is an example of caption <cite>with cite</cite></figcaption>
</figure>
```

## Address

<TypographyView example="address" />

```html
<address>
    <strong>This is an example of address</strong><br />
    This is an example of address<br />
    <a href="#">This is an example of address</a>
</address>
```

## Inline text elements

<TypographyView example="inline-text-elements" />

```html
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
```

::: tip
Classes `.small` and `.strong` are also available.
:::

## Code elements

<TypographyView example="code-elements" />

```html
<pre>&lt;p&gt;This is an example of preformatted text&lt;/p&gt;</pre>
<p>This is an example of <code>inline code</code></p>
<pre><code>This is an example of inline code inside a &lt;pre&gt; element</code></pre>
<p>This is an example of <kbd>keyboard input</kbd></p>
<p>This is an example of <samp>sample output</samp></p>
<p>This is an example of <var>variable</var></p>
```

## Horizontal rule

<TypographyView example="hr" />

```html
<hr />
```

## SCSS

### Variables

```scss
// Font families
$font-family-sans-serif: 'Inter', sans-serif !default;
$font-family-serif: 'Playfair Display', serif !default;
$font-family-monospace: monospace, monospace !default;

// Font size
$font-size: 1rem !default;

// Font weights
$font-weight-thin: 100 !default;
$font-weight-lighter: 200 !default;
$font-weight-light: 300 !default;
$font-weight-normal: 400 !default;
$font-weight-medium: 500 !default;
$font-weight-semi-bold: 600 !default;
$font-weight-bold: 700 !default;
$font-weight-bolder: 800 !default;
$font-weight-black: 900 !default;

// Headings
$headings-margin-bottom: 1rem !default;
$headings-font-family: null !default;
$headings-font-sizes: (
    'h1': $font-size * 2.5,
    'h2': $font-size * 2,
    'h3': $font-size * 1.75,
    'h4': $font-size * 1.5,
    'h5': $font-size * 1.25,
    'h6': $font-size,
) !default;
$headings-font-weight: $font-weight-semi-bold !default;
$headings-line-height: 1.2 !default;

// Display
$display-margin-bottom: $headings-margin-bottom !default;
$display-font-family: $headings-font-family !default;
$display-font-sizes: (
    'huge': $font-size * 5,
    'large': $font-size * 4.5,
    'bigger': $font-size * 4,
    'big': $font-size * 3.5,
) !default;
$display-font-weight: $headings-font-weight !default;
$display-line-height: $headings-line-height !default;

// Paragraph
$paragraph-margin-bottom: 1rem !default;

// Lead
$lead-font-family: null !default;
$lead-font-size: $font-size * 1.25 !default;
$lead-font-size-md: null !default;
$lead-font-weight: null !default;

// Link
$link-color: $primary !default;
$link-text-decoration: underline !default;
$link-hover-color: darken($primary, 5) !default;
$link-hover-text-decoration: null !default;

// Strong
$strong-font-weight: $font-weight-bold !default;

// Small
$small-font-size: 0.875em !default;

// List
$list-margin-bottom: 1rem !default;
$list-padding-left: 2rem !default;

$description-list-margin-bottom: 1rem !default;
$description-list-title-font-weight: $font-weight-bold !default;
$description-list-detail-margin-bottom: 0.5rem !default;

// Blockquote
$blockquote-margin-bottom: 1rem !default;
$blockquote-font-size: $lead-font-size !default;
$blockquote-font-size-md: $lead-font-size-md !default;
$blockquote-figcaption-margin: -$blockquote-margin-bottom 0 0 !default;
$blockquote-figcaption-color: $gray-600 !default;
$blockquote-figcaption-font-size: $small-font-size !default;
$blockquote-figcaption-icon: '\2014\00A0' !default;

// Address
$address-margin-bottom: 1rem !default;

// Mark
$mark-padding: 0.1875em !default;
$mark-background-color: $yellow !default;

// Sub and Sup
$sub-sup-font-size: 0.75em !default;

// Pre
$pre-margin-bottom: 1rem !default;
$pre-font-size: $small-font-size !default;

// Code
$code-color: $primary !default;
$code-font-size: $small-font-size !default;

// Kdb
$kbd-padding: 0.1875rem 0.375rem !default;
$kbd-background-color: $dark !default;
$kbd-color: $light !default;
$kbd-border-radius: 0.25rem !default;
$kbd-font-size: $small-font-size !default;

// Hr
$hr-margin: 1.5rem 0 !default;
$hr-border-top: 1px solid $light-gray !default;
```

### Mixins

```scss
@mixin rfs($font-size) {
    $value: #{$font-size};
    $rfs-value: rfs-value($font-size);

    font-size: $value;

    @if $value != $rfs-value {
        @include mb-down(xl) {
            font-size: $rfs-value;
        }
    }
}

@mixin reset-link($color: $body-color, $hover-color: $color) {
    color: $color;
    text-decoration: none;

    &:hover,
    &:focus {
        color: $hover-color;
    }
}

@mixin reset-list($remove-list-style-type: true) {
    margin: 0;
    padding: 0;

    @if $remove-list-style-type {
        list-style-type: none;
    }
}
```
