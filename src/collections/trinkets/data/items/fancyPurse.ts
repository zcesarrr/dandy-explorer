import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/fancy-purse.webp";

const fancyPurse: Trinket = {
    slug: "fancy-purse",
    name: "Fancy Purse",
    iconUrl: icon,
    description: "Start with 100 extra Tapes.",
    category: "other",
    event: "none",
    rarity: "uncommon",
    holder: { type: "research", params: { count: 100, twisted: "twisted-teagan" } },
};

export default fancyPurse;
