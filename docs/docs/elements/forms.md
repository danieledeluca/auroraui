<script setup>
import FormsView from '@/views/FormsView.vue';
</script>

# Forms

## Example

<FormsView example="example" />

```html
<form>
    <div class="grid mb-3">
        <div class="col-md-6 mb-3 mb-md-0">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="First name" />
        </div>
        <div class="col-md-6">
            <label for="last-name">Last name</label>
            <input type="text" id="last-name" placeholder="Last name" />
        </div>
    </div>
    <label for="email">Email address</label>
    <input type="text" id="email" placeholder="Email address" />
    <fieldset>
        <label for="terms-conditions" class="is-required">
            <input type="checkbox" id="terms-conditions" />
            <span>I agree to the Terms and Conditions</span>
        </label>
    </fieldset>
    <button type="button" class="button button--primary primary">
        <span>Submit</span>
    </button>
</form>
```

## Inputs

### Text

<FormsView example="text" />

```html
<label for="text-example">This is an example of text input</label><input type="text" id="text-example" />
```

### Email

<FormsView example="email" />

```html
<label for="email-example">This is an example of email input</label><input type="email" id="email-example" />
```

### Password

<FormsView example="password" />

```html
<label for="password-example">This is an example of password input</label>
<input type="password" id="password-example" />
```

### Search

<FormsView example="search" />

```html
<label for="search-example">This is an example of search input</label><input type="search" id="search-example" />
```

### Telephone

<FormsView example="telephone" />

```html
<label for="tel-example">This is an example of telephone input</label><input type="tel" id="tel-example" />
```

### URL

<FormsView example="url" />

```html
<label for="url-example">This is an example of url input</label><input type="url" id="url-example" />
```

### Number

<FormsView example="number" />

```html
<label for="number-example">This is an example of number input</label><input type="number" id="number-example" />
```

### Date

<FormsView example="date" />

```html
<label for="date-example">This is an example of date input</label><input type="date" id="date-example" />
```

### Datetime local

<FormsView example="datetime-local" />

```html
<label for="datetime-local-example">This is an example of datetime local input</label>
<input type="datetime-local" id="datetime-local-example" />
```

### Week

<FormsView example="week" />

```html
<label for="week-example">This is an example of week input</label><input type="week" id="week-example" />
```

### Month

<FormsView example="month" />

```html
<label for="month-example">This is an example of month input</label><input type="month" id="month-example" />
```

### Time

<FormsView example="time" />

```html
<label for="time-example">This is an example of time input</label><input type="time" id="time-example" />
```

### Checkbox

<FormsView example="checkbox" />

```html
<fieldset>
    <label for="checkbox-example">
        <input type="checkbox" id="checkbox-example" />
        <span>This is an example of checkbox input</span>
    </label>
    <label for="checkbox-checked-example">
        <input type="checkbox" id="checkbox-checked-example" checked />
        <span>This is an example of checked checkbox input</span>
    </label>
</fieldset>
```

### Radio

<FormsView example="radio" />

```html
<fieldset>
    <label for="radio-example">
        <input type="radio" id="radio-example" name="radio-example" />
        <span>This is an example of radio input</span>
    </label>
    <label for="radio-checked-example">
        <input type="radio" id="radio-checked-example" name="radio-example" checked />
        <span>This is an example of checked radio input</span>
    </label>
</fieldset>
```

### Color

<FormsView example="color" />

```html
<label for="color-example">This is an example of color input</label><input type="color" id="color-example" />
```

### File

<FormsView example="file" />

```html
<label for="file-example">This is an example of file input</label><input type="file" id="file-example" />
```

### Range

<FormsView example="range" />

```html
<label for="range-example">This is an example of range input</label><input type="range" id="range-example" />
```

## Textarea

<FormsView example="textarea" />

```html
<label for="textarea-example">This is an example of textarea</label> <textarea id="textarea-example"></textarea>
```

## Select

<FormsView example="select" />

```html
<label for="select-example">This is an example of select</label>
<select id="select-example">
    <option value="0">This is an example of option</option>
    <option value="1">This is an example of option</option>
    <option value="2">This is an example of option</option>
    <option value="4">This is an example of option</option>
</select>
```

### Multiple select

<FormsView example="select-multiple" />

```html
<label for="select-multiple-example">This is an example of multiple select</label>
<select id="select-multiple-example" multiple>
    <option value="0">This is an example of option</option>
    <option value="1">This is an example of option</option>
    <option value="2">This is an example of option</option>
    <option value="4">This is an example of option</option>
</select>
```

## Buttons

<FormsView example="buttons" />

```html
<button type="button">Button</button>
<button type="reset">Reset</button>
<button type="submit">Submit</button>
```

## Progress

<FormsView example="progress" />

```html
<progress max="100" value="50"></progress>
```

### Progress without a value

<FormsView example="progress-indeterminate" />

```html
<progress></progress>
```

## Legend

<FormsView example="legend" />

```html
<fieldset>
    <legend>This is an example of legend</legend>
</fieldset>
```

## Disabled fields

### Inputs

<FormsView example="disabled" />

```html
<label for="text-disabled-example">This is an example of disabled text input</label>
<input type="text" id="text-disabled-example" disabled />
```

<FormsView example="disabled-checkbox" />

```html
<fieldset>
    <label for="checkbox-disabled-example">
        <input type="checkbox" id="checkbox-disabled-example" disabled />
        <span>This is an example of disabled checkbox input</span>
    </label>
</fieldset>
```

<FormsView example="disabled-radio" />

```html
<fieldset>
    <label for="radio-disabled-example">
        <input type="radio" id="radio-disabled-example" name="radio-example" disabled />
        <span>This is an example of disabled radio input</span>
    </label>
</fieldset>
```

### Select

<FormsView example="disabled-select" />

```html
<label for="select-disabled-example">This is an example of disabled select</label>
<select id="select-disabled-example" disabled>
    <option value="0">This is an example of option</option>
    <option value="1">This is an example of option</option>
    <option value="2">This is an example of option</option>
    <option value="4">This is an example of option</option>
</select>
```

## Required fields

### Inputs

<FormsView example="required" />

```html
<label for="text-required-example" class="is-required">This is an example of required text input</label>
<input type="text" id="text-required-example" required />
```

<FormsView example="required-checkbox" />

```html
<label for="checkbox-required-example" class="is-required">
    <input type="checkbox" id="checkbox-required-example" required />
    <span>This is an example of required checkbox input</span>
</label>
```

<FormsView example="required-radio" />

```html
<label for="radio-required-example" class="is-required">
    <input type="radio" id="radio-required-example" name="radio-example" required />
    <span>This is an example of required radio input</span>
</label>
```

### Select

<FormsView example="required-select" />

```html
<label for="select-required-example" class="is-required">This is an example of required select</label>
<select id="select-required-example" required>
    <option value="0">This is an example of option</option>
    <option value="1">This is an example of option</option>
    <option value="2">This is an example of option</option>
    <option value="4">This is an example of option</option>
</select>
```

## SCSS

### Variables

```scss
// Label
$label-margin-bottom: 0.5rem !default;

// Input
$input-margin: 0 0 1rem !default;
$input-padding-y: $button-padding-y !default;
$input-padding-x: $button-padding-x !default;
$input-background-color: $gray-100 !default;
$input-color: $button-color !default;
$input-border-width: $button-border-width !default;
$input-border: $input-border-width solid $gray-400 !default;
$input-border-radius: $button-border-radius !default;
$input-font-size: $button-font-size !default;
$input-line-height: $button-line-height !default;
$input-focus-border-color: $primary !default;
$input-disabled-background-color: $light-gray !default;
$input-disabled-opacity: $button-disabled-opacity !default;

// Checkbox
$checkbox-width: 1.25em !default;
$checkbox-margin: div($body-line-height - $checkbox-width, 2) 0.5em 0 0 !default;
$checkbox-border-radius: null !default;
$checkbox-checked-background-color: $input-focus-border-color !default;
$checkbox-checked-color: color-contrast($checkbox-checked-background-color) !default;
$checkbox-checked-background-image: svg-encode(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><polyline stroke="#{$checkbox-checked-color}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" points="20 6 9 17 4 12"></polyline></svg>'
) !default;
$checkbox-checked-background: $checkbox-checked-background-color url($checkbox-checked-background-image) no-repeat
    center center !default;
$checkbox-checked-background-size: 0.75em !default;
$checkbox-checked-border-color: $checkbox-checked-background-color !default;

// Radio
$radio-width: $checkbox-width !default;
$radio-margin: $checkbox-margin !default;
$radio-border-radius: 50% !default;
$radio-checked-background-color: $checkbox-checked-background-color !default;
$radio-checked-color: $checkbox-checked-color !default;
$radio-checked-background-image: svg-encode(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><circle cx="50%" cy="50%" r="4.5" fill="#{$radio-checked-color}"/></svg>'
) !default;
$radio-checked-background: $radio-checked-background-color url($radio-checked-background-image) no-repeat center center !default;
$radio-checked-background-size: 1.5em !default;
$radio-checked-border-color: $radio-checked-background-color !default;

// Date
$date-padding: calc($input-padding-y - 1px) $input-padding-x !default;
$date-background-image: svg-encode(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" stroke="#{$input-color}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'
) !default;
$date-background: $input-background-color url($date-background-image) no-repeat right $input-padding-x center !default;
$date-background-size: 1em !default;
$date-padding-right: calc($input-padding-x * 2 + $date-background-size) !default;
$date-icon-margin-right: calc(calc($input-padding-x + $date-background-size) * -1) !default;

// Time
$time-padding: $date-padding !default;
$time-background-image: svg-encode(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" stroke="#{$input-color}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
) !default;
$time-background: $input-background-color url($time-background-image) no-repeat right $input-padding-x center !default;
$time-background-size: 1em !default;
$time-padding-right: calc($input-padding-x * 2 + $time-background-size) !default;
$time-icon-margin-right: calc(calc($input-padding-x + $time-background-size) * -1) !default;

// File
$file-button-color: $primary !default;

// Color
$color-padding: $input-padding-y !default;
$color-height: calc($input-font-size * $input-line-height + $input-padding-y * 2 + $input-border-width * 2) !default;
$color-swatch-border-radius: $input-border-radius !default;

// Range
$range-track-height: 0.25rem !default;
$range-track-background-color: $light-gray !default;
$range-track-border-radius: $input-border-radius !default;

$range-thumb-width: 1.25rem !default;
$range-thumb-margin-top: -(div($range-thumb-width, 2)) + div($range-track-height, 2) !default;
$range-thumb-background-color: $gray-600 !default;
$range-thumb-border-radius: 50% !default;
$range-thumb-active-background-color: $primary !default;

// Textarea
$textarea-min-width: calc(
    $input-line-height * ($input-font-size * 3) + $input-padding-y * 2 + $input-border-width * 2
) !default;

// Select
$select-background-image: svg-encode(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><polyline stroke="#{$input-color}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" points="6 9 12 15 18 9"></polyline></svg>'
) !default;
$select-background: $input-background-color url($select-background-image) no-repeat right $input-padding-x center !default;
$select-background-size: 1em !default;
$select-padding-right: calc($input-padding-x * 2 + $select-background-size) !default;

// Fieldset
$fieldset-margin: 0 0 1rem !default;

// Legend
$legend-margin-bottom: 0.5rem !default;
$legend-font-size: 1.25rem !default;

// Progress
$progress-height: 0.5rem !default;
$progress-margin: $input-margin !default;
$progress-background-color: $range-track-background-color !default;
$progress-color: $primary !default;
$progress-border-radius: $input-border-radius !default;
$progress-indeterminate-background: $progress-background-color linear-gradient(
        to right,
        $progress-color 30%,
        $progress-background-color 30%
    ) top left / 150% 150% no-repeat !default;
```
