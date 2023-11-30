<script setup>
import CardView from '@/views/CardView.vue';
</script>

# Card

## Example

<CardView example="example" />

```html
<div class="card">
    <div class="card__image">
        <img src="/background.jpg" alt="Card image" />
    </div>
    <div class="card__body">
        <h3 class="card__title">
            <span>Card title</span>
        </h3>
        <div class="card__content">
            Card content, lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod non eveniet maiores
            quae ipsum aut incidunt accusamus eum soluta.
        </div>
    </div>
</div>
```

## Card with link

<CardView example="with-link" />

```html
<div class="card">
    <a href="#" class="card__image">
        <img src="/background.jpg" alt="Card image" />
    </a>
    <div class="card__body">
        <h3 class="card__title">
            <a href="#" class="card__link">
                <span>Card title</span>
            </a>
        </h3>
        <div class="card__content">
            Card content, lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod non eveniet maiores
            quae ipsum aut incidunt accusamus eum soluta.
        </div>
        <div class="card__actions">
            <a href="#" class="button button--primary primary">
                <span>Button</span>
            </a>
        </div>
    </div>
</div>
```

## Card full link

<CardView example="full-link" />

```html
<a href="#" class="card">
    <div class="card__image">
        <img src="/background.jpg" alt="Card image" />
    </div>
    <div class="card__body">
        <h3 class="card__title">
            <span>Card title</span>
        </h3>
        <div class="card__content">
            Card content, lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod non eveniet maiores
            quae ipsum aut incidunt accusamus eum soluta.
        </div>
    </div>
</a>
```

## Card without image

<CardView example="without-image" />

```html
<div class="card">
    <div class="card__body">
        <h3 class="card__title">
            <span>Card title</span>
        </h3>
        <div class="card__content">
            Card content, lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod non eveniet maiores
            quae ipsum aut incidunt accusamus eum soluta.
        </div>
    </div>
</div>
```

## SCSS

### Variables

```scss
$card-margin-bottom: 2rem !default;
$card-background-color: $white !default;
$card-color: color-contrast($card-background-color) !default;
$card-border-radius: 0.25rem !default;
$card-box-shadow: 0 0 20px rgba($black, 0.05) !default;

$card-image-height: 300px !default;
$card-image-height-md: 200px !default;

$card-body-padding: 1.25rem !default;
$card-body-last-child-margin-top: 1rem !default;

$card-actions-gap: 1rem !default;
```
