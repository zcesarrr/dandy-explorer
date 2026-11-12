import type { TabDef } from "../types/collection.types";

export function isTabKey<T>(tabs: readonly TabDef<T>[], key: string | undefined): boolean {
    return tabs.some(tab => tab.key === key);
}

export function getTab<T>(tabs: readonly TabDef<T>[], key: string | undefined): TabDef<T> | undefined {
    return tabs.find(tab => tab.key === key) ?? tabs[0];
}
