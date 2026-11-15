import type { EventTheme, Rarity } from "../types/rarity.types";

export const EVENT_THEME_PRIORITY: Record<EventTheme, number> = {
    none: 0,
    easter: 1,
    halloween: 2,
    holiday: 3,
};

export const RARITY_PRIORITY: Record<Rarity, number> = {
    common: 0,
    uncommon: 1,
    rare: 2,
    main: 3,
    lethal: 4,
};
