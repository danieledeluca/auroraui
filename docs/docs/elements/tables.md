<script setup>
import TablesView from '@/views/TablesView.vue';
</script>

# Tables

## Base table

<TablesView example="base" />

```html
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
```

## Table with footer

<TablesView example="footer" />

```html
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
```

## Table with caption

<TablesView example="caption" />

```html
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
```

## Responsive table

<TablesView example="responsive" />

```html
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
```

## Stripped table

<TablesView example="stripped" />

```html
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
```

## SCSS

### Variables

```scss
$table-margin-bottom: 1rem !default;
$table-caption-side: bottom !default;

// Table cell
$table-cell-padding: 0.5rem !default;
$table-cell-border-bottom-width: 1px !default;
$table-cell-border-bottom: $table-cell-border-bottom-width solid $light-gray !default;

// Table caption
$table-caption-padding: 0.5rem 0 !default;
$table-caption-color: $dark-gray !default;

// Table group divider
$table-group-divider-border-bottom: $table-cell-border-bottom-width * 2 solid currentColor !default;

// Table stripped
$table-stripped-background-color: $gray-200 !default;
```
