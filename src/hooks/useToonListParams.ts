import { useSearchParams } from "react-router";
import { DEFAULT_SORT_DIR, DEFAULT_SORT_KEY, SORT_KEYS, type SortDir, type SortKey } from "../utils/toonsFiltering";

export function useToonListParams() {
    const [params, setParams] = useSearchParams();

    const rawSortKey = params.get("sort");
    const rawSortDir = params.get("dir");
    const search = params.get("q") ?? "";

    const sortKey: SortKey = SORT_KEYS.includes(rawSortKey as SortKey) ? rawSortKey as SortKey : DEFAULT_SORT_KEY;
    const sortDir: SortDir = rawSortDir === "asc" || rawSortDir === "desc" ? rawSortDir : DEFAULT_SORT_DIR;

    const update = (name: string, value: string, defaultValue: string = "") => {
        setParams(
            (prev) => {
                const next = new URLSearchParams(prev);
                if (value === defaultValue) next.delete(name);
                else next.set(name, value);
                return next;
            },
            { replace: true },
        );
    };

    const getParams = (): string => {
        const query = params.toString();
        return query ? `?${query}` : "";
    };

    return {
        search,
        sortKey,
        sortDir,
        setSearch: (value: string) => update("q", value.slice(0, 20)),
        setSortKey: (value: SortKey) => update("sort", value, DEFAULT_SORT_KEY),
        setSortDir: (value: SortDir) => update("dir", value, DEFAULT_SORT_DIR),
        getParams,
    }
}