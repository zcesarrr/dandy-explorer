import type { CollectionConfig } from "../../types/collection.types";
import TrinketButton from "./components/TrinketButton";
import TrinketImage from "./components/TrinketImage";
import TrinketInfo from "./components/TrinketInfo";
import TRINKETS from "./data";
import { TRINKET_SORT } from "./sort";
import type { Trinket } from "./types/trinkets.types";

export const trinketsConfig: CollectionConfig<Trinket> = {
    id: "trinkets",
    basePath: "/trinkets",
    noItemsImage: {
        name: "yatta",
        alt: "Yatta Render",
    },
    labels: {
        singular: "Trinket",
        plural: "Trinkets",
        searchPlaceholder: "Search Trinkets...",
        emptyMessage: "Your dream TRINKET doesn't exist!",
    },
    items: TRINKETS,
    sort: TRINKET_SORT,
    Info: TrinketInfo,
    ItemButton: TrinketButton,
    ItemImage: TrinketImage,
    tabs: [],
    desktopInfoSize: 256,
};
