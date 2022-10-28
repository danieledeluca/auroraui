const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const mode = require('gulp-mode')();
const rollup = require('gulp-rollup-2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { babel } = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');
const browserSync = require('browser-sync').create();

// Paths
const paths = {
    styles: {
        src: './assets/scss/**/*.scss',
        dest: './assets/css',
    },
    scripts: {
        src: './assets/js/**/!(*.min).js',
        dest: './assets/js',
    },
};

// Options
const options = {
    styles: {
        sass: {
            outputStyle: 'expanded',
            includePaths: ['node_modules'],
        },
        suffix: '.min',
        overrideBrowserslist: ['last 2 versions'],
    },
    rollup: {
        input: `${paths.scripts.dest}/app.js`,
        plugins: [
            nodeResolve(),
            commonjs(),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
            }),
        ],
        output: {
            file: `${paths.scripts.dest}/app.min.js`,
            format: 'umd',
            sourcemap: true,
        },
    },
    browserSync: {
        server: true,
        files: ['./**/*.html'],
        https: true,
    },
};

/**
 * Start server
 */
function serve() {
    browserSync.init(options.browserSync);
}

/**
 * Compile CSS files
 */
function compileCSS() {
    if (mode.production()) {
        options.styles.sass.outputStyle = 'compressed';
    }

    return gulp
        .src(paths.styles.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass(options.styles.sass).on('error', sass.logError))
        .pipe(mode.production(autoprefixer({ overrideBrowserslist: options.styles.overrideBrowserslist })))
        .pipe(rename({ suffix: options.styles.suffix }))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

/**
 * Compile JS files
 */
async function compileJS() {
    if (mode.production()) {
        options.rollup.plugins.push(
            terser({
                format: {
                    comments: false,
                },
            })
        );
    }

    (await rollup.src(options.rollup))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

/**
 * Watch CSS and JS files for changes
 */
function watch() {
    gulp.watch(paths.styles.src, { ignoreInitial: false }, compileCSS);
    gulp.watch(paths.scripts.src, { ignoreInitial: false }, compileJS);
}

// Tasks
exports.serve = serve;
exports.watch = gulp.parallel(serve, watch);
exports.build = gulp.parallel(compileCSS, compileJS);
