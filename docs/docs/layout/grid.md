<script setup>
import GridView from '@/views/GridView.vue';
</script>

# Grid

## Columns width

### Auto width

Use the class `.col` to set the width of the column to auto.

<GridView example="auto-width" />

```html
<div class="container">
    <div class="grid">
        <div class="col">Col</div>
        <div class="col">Col</div>
        <div class="col">Col</div>
    </div>
</div>
```

### Variable width

Use classes from `.col-1` to `.col-12` to size columns.

<GridView example="variable-width" />

```html
<div class="container">
    <div class="grid">
        <div class="col-8">Col 8</div>
        <div class="col-4">Col 4</div>
    </div>
</div>
```

## Responsive columns

Use `.col-{breakpoint}-{width}` classes to size columns at different breakpoint.

<GridView example="responsive-columns" />

```html
<div class="container">
    <div class="grid">
        <div class="col col-md-8">Col md 8</div>
        <div class="col col-md-4">Col md 4</div>
    </div>
</div>
```

## Columns order

Use `.order-{breakpoint}-{order}` class to change the order of the columns.

<GridView example="columns-order" />

```html
<div class="container">
    <div class="grid">
        <div class="col-8 order-2">Col 8</div>
        <div class="col-4 order-1">Col 4</div>
    </div>
</div>
```

Use class `.order-first` to set the column in first position, and `order-last` to set it in last position.

## Columns offset

Use `.offset-{breakpoint}-{width}` class to set the offset of the columns.

<GridView example="columns-offset" />

```html
<div class="container">
    <div class="grid">
        <div class="col-4 offset-2">Col 4</div>
        <div class="col-4 offset-1">Col 4</div>
    </div>
</div>
```

## Nesting columns

<GridView example="nesting-columns" />

```html
<div class="container">
    <div class="grid">
        <div class="col-4">Col 4</div>
        <div class="col-8">
            <div class="grid">
                <div class="col-8">Col 8</div>
                <div class="col-4">Col 4</div>
            </div>
        </div>
    </div>
</div>
```

## SCSS

### Variables

```scss
$grid-columns: 12 !default;
```
