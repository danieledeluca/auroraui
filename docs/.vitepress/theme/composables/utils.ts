export function capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function kebabToText(text: string) {
    return text.replace(/-/g, ' ');
}
