/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/js/app.js'),
            fileName: pkg.name,
            name: pkg.config.fullName,
        },
        rollupOptions: {
            output: {
                assetFileNames: ({ name }) => {
                    if (name === 'style.css') return `${pkg.name}.css`;
                    return name;
                },
                banner: `
                    /*!
                     * ${pkg.config.fullName} (${pkg.homepage})
                     * Version: ${pkg.version}
                     * License: ${pkg.license}
                     * Copyright: ${new Date().getFullYear()} ${pkg.author}
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
