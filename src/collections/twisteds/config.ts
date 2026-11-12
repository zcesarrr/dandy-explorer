import type { CollectionConfig } from "../../types/collection.types";
import TwistedButton from "./components/TwistedButton";
import TwistedImage from "./components/TwistedImage";
import TwistedInfo from "./components/TwistedInfo";
import TWISTEDS from "./data";
import { TWISTED_SORT } from "./sort";
import type { Twisted } from "./types/twisteds.types";

export const twistedsConfig: CollectionConfig<Twisted> = {
    id: "twisteds",
    basePath: "/twisteds",
    labels: {
        singular: "Twisted",
        plural: "Twisteds",
        searchPlaceholder: "Search Twisteds...",
        emptyMessage: "Your Twisted hasn't been researched yet",
    },
    items: TWISTEDS,
    sort: TWISTED_SORT,
    ItemImage: TwistedImage,
    ItemButton: TwistedButton,
    Info: TwistedInfo,
    tabs: [],
    desktopInfoSize: 288,
};
