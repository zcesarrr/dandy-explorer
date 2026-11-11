import type { CollectionItem, CollectionSort, SortGroup, SortOption } from "../types/collection.types";

export type SortDir = "asc" | "desc";
export const DEFAULT_SORT_DIR: SortDir = "asc";

const collator = new Intl.Collator("en", { sensitivity: "base" });

export function compareNames(a: string, b: string): number {
    return collator.compare(a, b);
}

function normalizeString(str: string): string {
    return str.toLowerCase().trim();
}

export function findSortOption<T>(groups: SortGroup<T>[], key: string): SortOption<T> | undefined {
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        if (!group) continue;

        const option = group.options.find(option => option.key === key);
        if (option) return option;
    }

    return undefined;
}

export function filterItems<T extends CollectionItem>(
    items: readonly T[],
    search: string,
    sort: CollectionSort<T>,
    sortKey: string,
    sortDir: SortDir
): T[] {
    const dir = sortDir === "asc" ? 1 : -1;
    const option = findSortOption(sort.groups, sortKey) ?? findSortOption(sort.groups, sort.defaultKey);

    const query = normalizeString(search);
    const filtered = query !== ""
        ? items.filter(item => normalizeString(item.name).includes(query))
        : items;
    
    return [...filtered].sort((a, b) => {
        const byName = compareNames(a.name, b.name);
        return (option?.compare(a, b) ?? 0) * dir || byName;
    });
}
