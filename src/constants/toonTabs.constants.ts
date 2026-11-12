import AbilitiesTab from "../components/tabs/AbilitiesTab";
import QuestsTab from "../components/tabs/QuestsTab";
import RequirementsTab from "../components/tabs/RequirementsTab";
import type { TabDef } from "../types/collection.types";
import type { Toon } from "../types/toons.types";

export const TOON_TABS = [
    { key: "abilities", name: "Abilities", icon: "handStars", Component: AbilitiesTab },
    { key: "quests", name: "Mastery Quests", icon: "medal", Component: QuestsTab },
    { key: "requirements", name: "Requirements", icon: "key", Component: RequirementsTab },
] as const satisfies readonly TabDef<Toon>[];
