/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/js/sparkle.js'),
            fileName: 'sparkle',
            name: 'sparkle',
        },
        rollupOptions: {
            external: ['@sparkleui/sparkle-icons'],
            output: {
                assetFileNames: ({ name }) => {
                    if (name === 'style.css') return 'sparkle.min.css';
                    return name;
                },
                banner: `
                    /*!
                     * Sparkle (${pkg.homepage})
                     * Version: ${pkg.version}
                     * License: ${pkg.license}
                     * Copyright: @ ${new Date().getFullYear()} ${pkg.author}
                     */`,
            },
        },
        sourcemap: true,
    },
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [autoprefixer()],
        },
    },
});
