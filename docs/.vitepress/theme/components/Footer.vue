<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from './Navbar.vue';
import SparkleNavbar from '../../../../src/js/classes/Navbar';

const footerNavbar = ref();

onMounted(() => {
    const sparkleNavbar = new SparkleNavbar(footerNavbar.value);
    sparkleNavbar.mount();
});
</script>

<template>
    <div class="docs-example">
        <div class="footer">
            <div class="container">
                <div class="footer__inner">
                    <!-- Footer navbar -->
                    <nav class="footer__navbar" ref="footerNavbar">
                        <Navbar />
                    </nav>
                    <!-- Footer bottom -->
                    <div class="footer__bottom">
                        <!-- Footer copyright -->
                        <div class="footer__copyright">
                            <span>
                                © {{ new Date().getFullYear() }} Daniele De Luca |
                                <a href="javascript:void(0)">Privacy Policy</a> |
                                <a href="javascript:void(0)">Cookie Policy</a>
                            </span>
                        </div>
                        <!-- Footer social -->
                        <div class="footer__social">
                            <a href="javascript:void(0)" target="_blank" class="social">
                                <i class="si-icon-facebook-2"></i>
                            </a>
                            <a href="javascript:void(0)" target="_blank" class="social">
                                <i class="si-icon-instagram"></i>
                            </a>
                            <a href="javascript:void(0)" target="_blank" class="social">
                                <i class="si-icon-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../../src/scss/abstracts/abstracts';
@import '../../../../src/scss/base/base';
@import '../../../../src/scss/layout/layout';
</style>
