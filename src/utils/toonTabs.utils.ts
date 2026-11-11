import { TOON_TABS, type ToonTabKey } from "../constants/toonTabs.constants";
import type { TabDef } from "../types/collection.types";
import type { Toon } from "../types/toons.types";

export function isToonTabKey(key: string | undefined): key is ToonTabKey {
    return TOON_TABS.some((t) => t.key === key);
}

export function getToonTab(key: string | undefined): TabDef<Toon> {
    return TOON_TABS.find((tab) => tab.key === key) ?? TOON_TABS[0];
}
