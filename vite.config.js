/* eslint-disable import/no-extraneous-dependencies */
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/assets/js/app.js'),
            fileName: 'rocket',
            name: 'Rocket',
        },
        rollupOptions: {
            external: ['@splidejs/splide'],
            output: {
                assetFileNames: ({ name }) => {
                    if (name === 'style.css') return 'rocket.css';
                    return name;
                },
                globals: {
                    '@splidejs/splide': 'Splide',
                },
            },
        },
        sourcemap: true,
        watch: true,
    },
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [autoprefixer()],
        },
    },
});
