/** @type {import('stylelint').Config} */
module.exports = {
    extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier-scss'],
    plugins: ['stylelint-prettier'],
    ignorePatterns: '.gitignore',
    rules: {
        'prettier/prettier': true,
        'color-hex-length': 'long',
        'declaration-property-value-disallowed-list': null,
        'function-parentheses-space-inside': 'never-single-line',
        'max-nesting-depth': [
            2,

            {
                ignore: ['pseudo-classes'],
                ignoreAtRules: [/include/],
            },
        ],
        'selector-class-pattern': null,
        'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class'] }],
        'scss/at-each-key-value-single-line': true,
        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-mixin-argumentless-call-parentheses': 'never',
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/dollar-variable-default': [true, { ignore: 'local' }],
        'scss/selector-no-union-class-name': true,
        'scss/no-duplicate-mixins': true,
        'order/properties-alphabetical-order': null,
    },
};
