import { TOON_TABS } from "../constants/toonTabs";
import type { ToonTabDef } from "../types/toonTabs";

export function getToonTab(key: string | undefined): ToonTabDef {
    return TOON_TABS.find((tab) => tab.key === key) ?? TOON_TABS[0];
}
