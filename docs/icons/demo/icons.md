<script setup>
import IconsView from '@/views/IconsView.vue';
</script>

# Icons

## Example

<i class="si-icon-star"></i>

```html
<i class="si-icon-star"></i>
```

## Icons

<IconsView example="icons" />

## SCSS

### Variables

```scss
$sparkle-icons: (
    'alert-triangle': '\e900',
    'apple': '\e901',
    'arrow-down': '\e902',
    'arrow-down-left': '\e903',
    'arrow-down-right': '\e904',
    'arrow-left': '\e905',
    'arrow-right': '\e906',
    'arrow-up': '\e907',
    'arrow-up-left': '\e908',
    'arrow-up-right': '\e909',
    'award': '\e90a',
    'calendar': '\e90b',
    'check': '\e90c',
    'chevron-down': '\e90d',
    'chevron-left': '\e90e',
    'chevron-right': '\e90f',
    'chevron-up': '\e910',
    'chevrons-down': '\e911',
    'chevrons-left': '\e912',
    'chevrons-right': '\e913',
    'chevrons-up': '\e914',
    'clipboard': '\e915',
    'clock': '\e916',
    'compass': '\e917',
    'copy': '\e918',
    'corner-down-left': '\e919',
    'corner-down-right': '\e91a',
    'corner-left-down': '\e91b',
    'corner-left-up': '\e91c',
    'corner-right-down': '\e91d',
    'corner-right-up': '\e91e',
    'corner-up-left': '\e91f',
    'corner-up-right': '\e920',
    'download': '\e921',
    'download-cloud': '\e922',
    'dribbble': '\e923',
    'edit': '\e924',
    'external-link': '\e925',
    'eye': '\e926',
    'eye-off': '\e927',
    'facebook-1': '\e928',
    'facebook-2': '\e929',
    'flag': '\e92a',
    'github': '\e92b',
    'google': '\e92c',
    'grid': '\e92d',
    'heart': '\e92e',
    'home-1': '\e92f',
    'home-2': '\e930',
    'home-3': '\e931',
    'info': '\e932',
    'instagram': '\e933',
    'link': '\e934',
    'linkedin-1': '\e935',
    'linkedin-2': '\e936',
    'loader-1': '\e937',
    'loader-2': '\e938',
    'log-in': '\e939',
    'log-out': '\e93a',
    'mail': '\e93b',
    'map-pin': '\e93c',
    'messenger': '\e93d',
    'moon': '\e93e',
    'pause': '\e93f',
    'pause-circle': '\e940',
    'phone': '\e941',
    'pinterest': '\e942',
    'play': '\e943',
    'play-circle': '\e944',
    'plus': '\e945',
    'reddit': '\e946',
    'search': '\e947',
    'settings': '\e948',
    'shopping-cart': '\e949',
    'skype': '\e94a',
    'sliders': '\e94b',
    'snapchat': '\e94c',
    'spotify': '\e94d',
    'star': '\e94e',
    'sun': '\e94f',
    'tag': '\e950',
    'thumbs-down': '\e951',
    'thumbs-up': '\e952',
    'tiktok': '\e953',
    'trash': '\e954',
    'truck': '\e955',
    'twitch': '\e956',
    'twitter': '\e957',
    'upload': '\e958',
    'upload-cloud': '\e959',
    'user': '\e95a',
    'users': '\e95b',
    'whatsapp': '\e95c',
    'x': '\e95d',
    'youtube': '\e95e',
) !default;
```

### Mixins

```scss
@mixin sparkle-icon($icon) {
    content: map-get($sparkle-icons, $icon);
    display: inline-block;
    font-family: $sparkle-icons-font-family;
}
```
