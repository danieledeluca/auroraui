<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from './Navbar.vue';
import SparkleNavbar from '../../../../src/js/classes/Navbar';

const headerNavbar = ref();

onMounted(() => {
    const sparkleNavbar = new SparkleNavbar(headerNavbar.value);
    sparkleNavbar.mount();
});
</script>

<template>
    <div class="docs-example">
        <header class="header">
            <div class="container">
                <div class="header__inner">
                    <!-- Header logo -->
                    <a href="javascript:void(0)" class="header__logo">
                        <img src="/favicon.svg" alt="Sparkle UI logo" class="logo" />
                    </a>
                    <!-- Header navbar -->
                    <nav class="header__navbar header__navbar--collapse" ref="headerNavbar">
                        <Navbar />
                    </nav>
                    <!-- Header hamburger -->
                    <div class="header__hamburger">
                        <div class="hamburger hamburger--vortex">
                            <span class="hamburger__inner"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/base';
@import '../../../../src/scss/layout/layout';

.header {
    position: relative;
    z-index: 9;
}
</style>
