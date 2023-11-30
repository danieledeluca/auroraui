<script setup lang="ts">
const navbarItems = [
    {
        label: 'Home',
        link: 'javascript:void(0)',
        isButton: false,
        children: [],
    },
    {
        label: 'Parent',
        link: 'javascript:void(0)',
        isButton: false,
        children: [
            {
                label: 'Submenu item',
                link: 'javascript:void(0)',
                isButton: false,
            },
            {
                label: 'Submenu item',
                link: 'javascript:void(0)',
                isButton: false,
            },
        ],
    },
];
</script>

<template>
    <ul class="navbar lv0">
        <li
            class="navbar__item lv0"
            v-for="navbarItem in navbarItems"
            :class="{ 'is-parent': navbarItem.children.length }"
        >
            <a :href="navbarItem.link" class="lv0" :class="navbarItem.isButton ? 'navbar__button' : 'navbar__link'">
                <span>{{ navbarItem.label }}</span>
            </a>
            <div class="navbar__toggle" v-if="navbarItem.children.length"></div>
            <ul class="navbar lv1" v-if="navbarItem.children.length">
                <li class="navbar__item lv1" v-for="subItem in navbarItem.children">
                    <a :href="subItem.link" class="lv1" :class="subItem.isButton ? 'navbar__button' : 'navbar__link'">
                        <span>{{ subItem.label }}</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/base';
@import '../../../../src/scss/layout/layout';
</style>
