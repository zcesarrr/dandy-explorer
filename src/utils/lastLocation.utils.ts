function key(basePath: string) {
    return `last:${basePath}`;
}

export function saveLastLocation(basePath: string, url: string) {
    try {
        sessionStorage.setItem(key(basePath), url);
    } catch { /* in case the browser didn't want to use sessionStorage */ }
}

export function getLastLocation(basePath: string): string | null {
    try {
        return sessionStorage.getItem(key(basePath));
    } catch {
        return null;
    }
}

export function getLastListLocation(basePath: string): string {
    const saved = getLastLocation(basePath) ?? "";
    const queryStart = saved.indexOf("?");

    return `${basePath}${queryStart >= 0 ? saved.slice(queryStart) : ""}`;
}
