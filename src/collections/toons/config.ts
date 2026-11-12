import ToonInfo from "../../components/blocks/ToonInfo";
import ToonImage from "../../components/ToonImage";
import TOONS from "../../constants/toons.constants";
import { TOON_TABS } from "../../constants/toonTabs.constants";
import type { CollectionConfig } from "../../types/collection.types";
import type { Toon } from "../../types/toons.types";
import ToonButton from "./components/ToonButton";
import { TOON_SORT } from "./sort";

export const toonsConfig: CollectionConfig<Toon> = {
    id: "toons",
    basePath: "/toons",
    labels: {
        singular: "Toon",
        plural: "Toons",
        searchPlaceholder: "Search Toons...",
        emptyMessage: "Sorry, but your Toon is in another show!",
    },
    items: TOONS,
    sort: TOON_SORT,
    ItemImage: ToonImage,
    ItemButton: ToonButton,
    Info: ToonInfo,
    mobileInfoTab: { name: "Info", icon: "person" },
    tabs: TOON_TABS,
};
