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
    'activity': '\f101',
    'alert-circle': '\f102',
    'alert-triangle': '\f103',
    'android': '\f104',
    'apple': '\f105',
    'archive': '\f106',
    'arrow-down-left': '\f107',
    'arrow-down-right': '\f108',
    'arrow-down': '\f109',
    'arrow-left': '\f10a',
    'arrow-right': '\f10b',
    'arrow-up-left': '\f10c',
    'arrow-up-right': '\f10d',
    'arrow-up': '\f10e',
    'award': '\f10f',
    'behance': '\f110',
    'book-open': '\f111',
    'book': '\f112',
    'bookmark': '\f113',
    'briefcase': '\f114',
    'calendar': '\f115',
    'check': '\f116',
    'chevron-down': '\f117',
    'chevron-left': '\f118',
    'chevron-right': '\f119',
    'chevron-up': '\f11a',
    'chevrons-down': '\f11b',
    'chevrons-left': '\f11c',
    'chevrons-right': '\f11d',
    'chevrons-up': '\f11e',
    'clipboard': '\f11f',
    'clock': '\f120',
    'compass': '\f121',
    'copy': '\f122',
    'corner-down-left': '\f123',
    'corner-down-right': '\f124',
    'corner-left-down': '\f125',
    'corner-left-up': '\f126',
    'corner-right-down': '\f127',
    'corner-right-up': '\f128',
    'corner-up-left': '\f129',
    'corner-up-right': '\f12a',
    'credit-card': '\f12b',
    'discord': '\f12c',
    'download-cloud': '\f12d',
    'download': '\f12e',
    'dribbble': '\f12f',
    'edit': '\f130',
    'external-link': '\f131',
    'eye-off': '\f132',
    'eye': '\f133',
    'facebook': '\f134',
    'file': '\f135',
    'filter': '\f136',
    'flag': '\f137',
    'folder': '\f138',
    'gift': '\f139',
    'github': '\f13a',
    'google': '\f13b',
    'grid': '\f13c',
    'heart': '\f13d',
    'help-circle': '\f13e',
    'home-1': '\f13f',
    'home-2': '\f140',
    'image': '\f141',
    'info': '\f142',
    'instagram': '\f143',
    'key': '\f144',
    'link': '\f145',
    'linkedin': '\f146',
    'list': '\f147',
    'loader-1': '\f148',
    'loader-2': '\f149',
    'log-in': '\f14a',
    'log-out': '\f14b',
    'mail': '\f14c',
    'map-pin': '\f14d',
    'map': '\f14e',
    'maximize': '\f14f',
    'menu': '\f150',
    'message-square': '\f151',
    'messenger': '\f152',
    'minimize': '\f153',
    'moon': '\f154',
    'navigation': '\f155',
    'paperclip': '\f156',
    'phone': '\f157',
    'pinterest': '\f158',
    'plus': '\f159',
    'printer': '\f15a',
    'reddit': '\f15b',
    'search': '\f15c',
    'send': '\f15d',
    'settings': '\f15e',
    'share': '\f15f',
    'shopping-cart': '\f160',
    'skype': '\f161',
    'sliders': '\f162',
    'snapchat': '\f163',
    'sparkle': '\f164',
    'spotify': '\f165',
    'star': '\f166',
    'sun': '\f167',
    'tag': '\f168',
    'telegram': '\f169',
    'thumbs-down': '\f16a',
    'thumbs-up': '\f16b',
    'tiktok': '\f16c',
    'trash': '\f16d',
    'trending-down': '\f16e',
    'trending-up': '\f16f',
    'truck': '\f170',
    'twitch': '\f171',
    'twitter': '\f172',
    'upload-cloud': '\f173',
    'upload': '\f174',
    'user': '\f175',
    'users': '\f176',
    'vimeo': '\f177',
    'whatsapp': '\f178',
    'x': '\f179',
    'youtube': '\f17a',
    'zoom-in': '\f17b',
    'zoom-out': '\f17c',
) !default;
```

### Mixins

```scss
@mixin sparkle-icon($icon: null) {
    @if $icon {
        content: map-get($sparkle-icons, $icon);
    }

    display: inline-block;
    font-family: $sparkle-icons-font-family !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: -0.125em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```
