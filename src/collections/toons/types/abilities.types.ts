import type { IconId } from "../../../types/icons.types";

export type AbilityType = "passive" | "active";

export type Ability = {
    name: string;
    type: AbilityType,
    description: string;
    icon?: IconId,
};
