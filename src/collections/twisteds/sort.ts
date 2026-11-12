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
            ],
        },
    ],
};
