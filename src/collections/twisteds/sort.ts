import { EVENT_THEME_PRIORITY, RARITY_PRIORITY } from "../../constants/sort.constants";
import type { CollectionSort } from "../../types/collection.types";
import { compareNames } from "../../utils/collectionFiltering.utils";
import type { Twisted } from "./types/twisteds.types";

export const TWISTED_SORT: CollectionSort<Twisted> = {
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
                    key: "rarity",
                    label: "Rarity",
                    compare: (a, b) => RARITY_PRIORITY[a.rarity] - RARITY_PRIORITY[b.rarity],
                },
                {
                    key: "event",
                    label: "Event",
                    compare: (a, b) => EVENT_THEME_PRIORITY[a.event] - EVENT_THEME_PRIORITY[b.event],
                },
            ],
        },
    ],
};
