import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/glazed-fondant-bag.webp";

const glazedBag: Trinket = {
    slug: "glazed-fondant-bag",
    name: "Glazed Fondant Bag",
    iconUrl: icon,
    description: "Gives 4 extra seconds to candy Item effects.",
    category: "other",
    event: "easter",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-cocoa" } },
};

export default glazedBag;
