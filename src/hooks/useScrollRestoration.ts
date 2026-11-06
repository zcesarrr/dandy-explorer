import { useCallback } from "react";

const positions = new Map<string, number>;

export function useScrollRestoration<T extends HTMLElement>(key: string) {
    return useCallback((element: T | null) => {
        if (!element) return;

        element.scrollTop = positions.get(key) ?? 0;

        const onScroll = () => positions.set(key, element.scrollTop);
        element.addEventListener("scroll", onScroll);

        return () => element.removeEventListener("scroll", onScroll);
    }, [key]);
}
