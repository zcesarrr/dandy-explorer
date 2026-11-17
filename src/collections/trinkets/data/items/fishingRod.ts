import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/fishing-rod.webp";

const fishingRod: Trinket = {
    slug: "fishing-rod",
    name: "Fishing Rod",
    iconUrl: icon,
    description: "Highlights all Machine locations for the user when a new Floor arrives for 5 seconds",
    category: "other",
    event: "none",
    rarity: "uncommon",
    holder: { type: "research", params: { count: 100, twisted: "twisted-finn" } },
};

export default fishingRod;
