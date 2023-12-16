<script setup>
import IconsView from '@/views/IconsView.vue';
</script>

# Icons

## Example

<i class="si-icon-sparkle"></i>

```html
<i class="si-icon-sparkle"></i>
```

## Icons list

<IconsView example="icons" />

## SCSS

### Variables

```scss
$sparkle-icons: (
    'activity': '\e900',
    'alert-circle': '\e901',
    'alert-triangle': '\e902',
    'android': '\e903',
    'apple': '\e904',
    'archive': '\e905',
    'arrow-down': '\e906',
    'arrow-down-left': '\e907',
    'arrow-down-right': '\e908',
    'arrow-left': '\e909',
    'arrow-right': '\e90a',
    'arrow-up': '\e90b',
    'arrow-up-left': '\e90c',
    'arrow-up-right': '\e90d',
    'award': '\e90e',
    'behance': '\e90f',
    'book': '\e910',
    'book-open': '\e911',
    'bookmark': '\e912',
    'briefcase': '\e913',
    'calendar': '\e914',
    'check': '\e915',
    'chevron-down': '\e916',
    'chevron-left': '\e917',
    'chevron-right': '\e918',
    'chevron-up': '\e919',
    'chevrons-down': '\e91a',
    'chevrons-left': '\e91b',
    'chevrons-right': '\e91c',
    'chevrons-up': '\e91d',
    'clipboard': '\e91e',
    'clock': '\e91f',
    'compass': '\e920',
    'copy': '\e921',
    'corner-down-left': '\e922',
    'corner-down-right': '\e923',
    'corner-left-down': '\e924',
    'corner-left-up': '\e925',
    'corner-right-down': '\e926',
    'corner-right-up': '\e927',
    'corner-up-left': '\e928',
    'corner-up-right': '\e929',
    'credit-card': '\e92a',
    'discord': '\e92b',
    'download': '\e92c',
    'download-cloud': '\e92d',
    'dribbble': '\e92e',
    'edit': '\e92f',
    'external-link': '\e930',
    'eye': '\e931',
    'eye-off': '\e932',
    'facebook-1': '\e933',
    'facebook-2': '\e934',
    'file': '\e935',
    'filter': '\e936',
    'flag': '\e937',
    'folder': '\e938',
    'gift': '\e939',
    'github': '\e93a',
    'google': '\e93b',
    'grid': '\e93c',
    'heart': '\e93d',
    'help-circle': '\e93e',
    'home-1': '\e93f',
    'home-2': '\e940',
    'home-3': '\e941',
    'image': '\e942',
    'info': '\e943',
    'instagram': '\e944',
    'key': '\e945',
    'link': '\e946',
    'linkedin-1': '\e947',
    'linkedin-2': '\e948',
    'list': '\e949',
    'loader-1': '\e94a',
    'loader-2': '\e94b',
    'log-in': '\e94c',
    'log-out': '\e94d',
    'mail': '\e94e',
    'map': '\e94f',
    'map-pin': '\e950',
    'maximize': '\e951',
    'menu': '\e952',
    'message-square': '\e953',
    'messenger': '\e954',
    'minimize': '\e955',
    'moon': '\e956',
    'navigation': '\e957',
    'paperclip': '\e958',
    'phone': '\e959',
    'pinterest': '\e95a',
    'plus': '\e95b',
    'printer': '\e95c',
    'reddit': '\e95d',
    'search': '\e95e',
    'send': '\e95f',
    'settings': '\e960',
    'share': '\e961',
    'shopping-cart': '\e962',
    'skype': '\e963',
    'sliders': '\e964',
    'snapchat': '\e965',
    'sparkle': '\e966',
    'spotify': '\e967',
    'star': '\e968',
    'sun': '\e969',
    'tag': '\e96a',
    'telegram': '\e96b',
    'thumbs-down': '\e96c',
    'thumbs-up': '\e96d',
    'tiktok': '\e96e',
    'trash': '\e96f',
    'trending-down': '\e970',
    'trending-up': '\e971',
    'truck': '\e972',
    'twitch': '\e973',
    'twitter': '\e974',
    'upload': '\e975',
    'upload-cloud': '\e976',
    'user': '\e977',
    'users': '\e978',
    'vimeo': '\e979',
    'whatsapp': '\e97a',
    'x': '\e97b',
    'youtube': '\e97c',
    'zoom-in': '\e97d',
    'zoom-out': '\e97e',
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
