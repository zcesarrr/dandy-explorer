import type { CollectionConfig } from "../../types/collection.types";
import TrinketImage from "./components/TrinketImage";
import TrinketInfo from "./components/TrinketInfo";
import TRINKETS from "./data";
import { TRINKET_SORT } from "./sort";
import type { Trinket } from "./types/trinkets.types";

export const trinketsConfig: CollectionConfig<Trinket> = {
    id: "trinkets",
    basePath: "/trinkets",
    labels: {
        singular: "Trinket",
        plural: "Trinkets",
        searchPlaceholder: "Search Trinkets...",
        emptyMessage: "Your Trinket doesn't exist",
    },
    items: TRINKETS,
    sort: TRINKET_SORT,
    Info: TrinketInfo,
    ItemImage: TrinketImage,
    tabs: [],
    desktopInfoSize: 256,
};
