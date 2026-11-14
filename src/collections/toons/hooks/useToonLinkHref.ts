import { useSearchParams } from "react-router";
import { useIsDesktop } from "../../../hooks/useIsDesktop";

const PRESERVED_PARAMS = ["sort", "dir"] as const;

export function useHighlistLinkHref() {
    const [params] = useSearchParams();
    const isDesktop = useIsDesktop();

    return (to: string) => {
        const kept = new URLSearchParams();

        for (const key of PRESERVED_PARAMS) {
            const value = params.get(key);
            if (value !== null) kept.set(key, value);
        }

        const query = kept.toString();
        return `${to}${isDesktop ? "/abilities" : ""}${query ? `?${query}` : ""}`;
    }
}