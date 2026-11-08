import AbilitiesTab from "../components/tabs/AbilitiesTab";
import QuestsTab from "../components/tabs/QuestsTab";
import RequirementsTab from "../components/tabs/RequirementsTab";
import type { ToonTabDef } from "../types/toonTabs";

export const TOON_TABS = [
    { key: "abilities", name: "Abilities", icon: "handStars", Component: AbilitiesTab },
    { key: "quests", name: "Mastery Quests", icon: "medal", Component: QuestsTab },
    { key: "requirements", name: "Requirements", icon: "key", Component: RequirementsTab },
] as const satisfies readonly ToonTabDef[];

export type ToonTabKey = (typeof TOON_TABS)[number]["key"];
export type MobileTabKey = ToonTabKey | "info";
