import type { CollectionSort } from "../../types/collection.types";
import { compareNames } from "../../utils/collectionFiltering.utils";
import type { Trinket } from "./types/trinkets.types";

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
            ],
        },
    ],
};
