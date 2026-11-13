import type { ITEM_RARITY_LABELS, RARITY_LABELS } from "../constants/rarity.constants";

export type Rarity = keyof typeof RARITY_LABELS;
export type ToonRarity = Exclude<Rarity, "uncommon" | "rare" | "lethal">;
export type ItemRarity = keyof typeof ITEM_RARITY_LABELS;

export type EventTheme = "none" | "halloween" | "holiday" | "easter";
