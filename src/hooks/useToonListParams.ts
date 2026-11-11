import { useSearchParams } from "react-router";
import { DEFAULT_SORT_DIR, findSortOption, type SortDir } from "../utils/collectionFiltering.utils";
import { TOON_SORT } from "../collections/toons/sort";

export function useToonListParams() {
    const [params, setParams] = useSearchParams();

    const rawSortKey = params.get("sort");
    const rawSortDir = params.get("dir");
    const search = params.get("q") ?? "";

    const sortKey: string = rawSortKey !== null && findSortOption(TOON_SORT.groups, rawSortKey) ? rawSortKey : TOON_SORT.defaultKey;
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
        setSortKey: (value: string) => update("sort", value, TOON_SORT.defaultKey),
        setSortDir: (value: SortDir) => update("dir", value, DEFAULT_SORT_DIR),
        getParams,
    }
}