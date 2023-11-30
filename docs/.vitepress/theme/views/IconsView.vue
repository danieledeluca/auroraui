<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { Icon, icons, iconAnimations } from '../composables/icons';

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
            <div v-for="icon in filteredIcons" class="icon__card">
                <i class="icon" :class="`si-icon-${icon.name}`"></i>
                <div class="icon__name">
                    <small>{{ icon.name }}</small>
                </div>
            </div>
        </div>
        <div class="icons" v-if="props.example === 'animations' && iconAnimations.length">
            <div v-for="animation in iconAnimations" class="icon__card">
                <i class="icon si-icon-star" :class="`si-icon-${animation}`"></i>
                <div class="icon__name">
                    <small>{{ animation }}</small>
                </div>
            </div>
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
    grid-auto-rows: 1fr;
    gap: 1rem;
}

.icon__card {
    text-align: center;
}

.icon {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
    background-color: var(--vp-c-bg-soft);
    border-radius: 0.25rem;
    font-size: 2.5rem;
    aspect-ratio: 1;
    transition: transition('border-color');
    transition-duration: 0.25s;
}

.icon__name {
    margin-top: 0.5rem;
}
</style>
