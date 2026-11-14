import { useLocation, useSearchParams } from "react-router";
import { useIsDesktop } from "../../../hooks/useIsDesktop";

const PRESERVED_PARAMS = ["sort", "dir"] as const;
const BASE_PATHS = ["/toons", "/twisteds", "/trinkets"] as const;

export function useHighlistLinkHref() {
    const { pathname } = useLocation();
    const [params] = useSearchParams();
    const isDesktop = useIsDesktop();

    return (to: string) => {
        const collectionPath = BASE_PATHS.find(basePath => to.startsWith(basePath));
        if (!pathname.includes(collectionPath || "")) return to;

        const kept = new URLSearchParams();

        for (const key of PRESERVED_PARAMS) {
            const value = params.get(key);
            if (value !== null) kept.set(key, value);
        }

        const query = kept.toString();
        return `${to}${isDesktop ? "/abilities" : ""}${query ? `?${query}` : ""}`;
    }
}