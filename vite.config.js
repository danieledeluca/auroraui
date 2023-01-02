/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/assets/js/app.js'),
            name: 'Rocket',
            fileName: 'rocket',
        },
        rollupOptions: {
            external: ['jquery', '@splidejs/splide'],
            output: {
                globals: {
                    'jquery': '$',
                    '@splidejs/splide': 'Splide',
                },
                assetFileNames: ({ name }) => {
                    if (name === 'style.css') return 'rocket.css';
                    return name;
                },
            },
        },
    },
});
