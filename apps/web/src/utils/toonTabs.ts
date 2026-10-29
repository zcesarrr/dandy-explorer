import { TOON_TABS, type ToonTabKey } from "../constants/toonTabs";

export function isToonTabKey(v: string | undefined): v is ToonTabKey {
    return TOON_TABS.some((t) => t.key === v);
}
