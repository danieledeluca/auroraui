<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { type Icon, icons, iconAnimations } from '../composables/icons';

const props = defineProps<{
    example: string;
}>();

const filter = ref('');
const filteredIcons = computed<Icon[]>(() => {
    return icons.filter((icon: Icon) => {
        const nameToFind = `${icon.name.replace(/-/g, ' ')} ${icon.tags.join(' ')}`;
        return nameToFind.indexOf(filter.value.toLocaleLowerCase().trim()) >= 0;
    });
});

watch(filter, (newIconFilter) => {
    const newUrl = new URL(window.location.href);

    if (newIconFilter) {
        newUrl.searchParams.set('q', newIconFilter.trim());
    } else {
        newUrl.searchParams.delete('q');
    }

    window.history.replaceState(null, '', newUrl);
});

onMounted(() => {
    filter.value = new URLSearchParams(window.location.search)?.get('q') || '';
});
</script>

<template>
    <div class="docs-example">
        <input
            v-if="props.example === 'icons'"
            v-model="filter"
            type="search"
            id="icon-filter"
            placeholder="Start typing to filter..."
            autocomplete="off"
        />
        <div class="icons" v-if="props.example === 'icons' && filteredIcons.length">
            <a v-for="icon in filteredIcons" :href="`/sparkle/icons/demo/icons/${icon.name}`" class="icon__card">
                <i class="icon" :class="`si-icon-${icon.name}`"></i>
                <div class="icon__name">
                    <small>{{ icon.name }}</small>
                </div>
            </a>
        </div>
        <div class="icons" v-if="props.example === 'animations' && iconAnimations.length">
            <a
                v-for="animation in iconAnimations"
                :href="`/sparkle/icons/demo/animations/${animation}`"
                class="icon__card"
            >
                <i class="icon si-icon-sparkle" :class="`si-icon-${animation}`"></i>
                <div class="icon__name">
                    <small>{{ animation }}</small>
                </div>
            </a>
        </div>
    </div>
    <div v-if="!filteredIcons.length" class="warning custom-block">
        <p class="custom-block-title">WARNING</p>
        <p>Nothing found, try searching again.</p>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/base';

.icons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
}

.icon__card {
    @include reset-link(inherit);

    text-align: center;

    &:hover,
    &:focus {
        .icon {
            border-color: var(--vp-c-brand-1);
        }
    }
}

.icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-bg-soft);
    border-radius: 12px;
    font-size: 2.5rem;
    aspect-ratio: 1;
    transition: transition(background-color, border-color);
    transition-duration: 0.25s;
}

.icon__name {
    margin-top: 0.5rem;
}
</style>
