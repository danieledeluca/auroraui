export const grays = {
    '$gray-50': '#fafafa',
    '$gray-100': '#f5f5f5',
    '$gray-200': '#eeeeee',
    '$gray-300': '#e0e0e0',
    '$gray-400': '#bdbdbd',
    '$gray-500': '#9e9e9e',
    '$gray-600': '#757575',
    '$gray-700': '#616161',
    '$gray-800': '#424242',
    '$gray-900': '#212121',
};

export const colors = {
    '$red': '#f44336',
    '$pink': '#e91e63',
    '$purple': '#9c27b0',
    '$deep-purple': '#673ab7',
    '$indigo': '#3f51b5',
    '$blue': '#2196f3',
    '$light-blue': '#03a9f4',
    '$cyan': '#00bcd4',
    '$teal': '#009688',
    '$green': '#4caf50',
    '$light-green': '#8bc34a',
    '$lime': '#cddc39',
    '$yellow': '#ffeb3b',
    '$amber': '#ffc107',
    '$orange': '#ff9800',
    '$deep-orange': '#ff5722',
    '$brown': '#795548',
    '$gray': '$gray-500',
    '$light-gray': '$gray-300',
    '$dark-gray': '$gray-700',
    '$blue-gray': '#607d8b',
    '$black': '#000000',
    '$white': '#ffffff',
};

export const theme = {
    $primary: colors['$blue'],
    $success: colors['$green'],
    $warning: colors['$amber'],
    $error: colors['$red'],
    $info: colors['$teal'],
    $light: grays['$gray-50'],
    $dark: grays['$gray-900'],
};

export const allColors = {
    grays,
    colors,
    theme,
};

export function parseColorVariable(variable: string) {
    return variable.replace('$', '');
}
