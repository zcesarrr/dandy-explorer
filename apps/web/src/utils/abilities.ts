import type { AbilityType } from "../types/abilities";

export function abilityTypeString(type: AbilityType) {
    const strings = {
        passive: "Passive",
        active: "Active",
    };

    return strings[type];
}
