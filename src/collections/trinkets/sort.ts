import { EVENT_THEME_PRIORITY, RARITY_PRIORITY } from "../../constants/sort.constants";
import type { CollectionSort } from "../../types/collection.types";
import { compareNames } from "../../utils/collectionFiltering.utils";
import type { Trinket, TrinketCategory, TrinketHolderType } from "./types/trinkets.types";

const CATEGORY_PRIORITY: Record<TrinketCategory, number> = {
    skillCheck: 0,
    moveSpeed: 1,
    stamina: 2,
    stealth: 3,
    extSpeed: 4,
    other: 5,
};

const AVAILABILITY_PRIORITY: Record<TrinketHolderType, number> = {
    shop: 0,
    research: 1,
};

export const TRINKET_SORT: CollectionSort<Trinket> = {
    defaultKey: "name",
    groups: [
        {
            options: [
                {
                    key: "name",
                    label: "Name",
                    compare: (a, b) => compareNames(a.name, b.name),
                },
                {
                    key: "category",
                    label: "Category",
                    compare: (a, b) => CATEGORY_PRIORITY[a.category] - CATEGORY_PRIORITY[b.category],
                },
                {
                    key: "rarity",
                    label: "Rarity",
                    compare: (a, b) => RARITY_PRIORITY[a.rarity] - RARITY_PRIORITY[b.rarity],
                },
                {
                    key: "event",
                    label: "Event",
                    compare: (a, b) => EVENT_THEME_PRIORITY[a.event] - EVENT_THEME_PRIORITY[b.event],
                },
                {
                    key: "availability",
                    label: "Availability",
                    compare: (a, b) => AVAILABILITY_PRIORITY[a.holder.type] - AVAILABILITY_PRIORITY[b.holder.type],
                },
            ],
        },
    ],
};
