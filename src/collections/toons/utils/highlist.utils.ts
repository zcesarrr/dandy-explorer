export function hl(value: string | number) {
    return `{{${value}}}`;
}

export function a(value: string | number, href: string) {
    return `##${value}:${href}##`
}
