import type { IconId } from "../types/icons.types";
import type { EventTheme } from "../types/rarity.types";

export const RARITY_LABELS = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    main: "Main Character",
    lethal: "Lethal",
};

export const ITEM_RARITY_LABELS = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    veryRare: "Very Rare",
    ultraRare: "Ultra Rare",
};

export const EVENT_THEME_DATA: Record<Exclude<EventTheme, "none">, { label: string, Icon: IconId }> = {
    easter: { label: "Easter", Icon: "easterEgg" },
    halloween: { label: "Halloween", Icon: "pumpkin" },
    holiday: { label: "Christmas", Icon: "ornament" },
} as const;
