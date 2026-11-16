import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/scrapbook.webp";

const scrapbook: Trinket = {
    slug: "scrapbook",
    name: "Scrapbook",
    iconUrl: icon,
    description: "Reduces your Stealth by 5%.",
    category: "stealth",
    event: "easter",
    rarity: "uncommon",
    holder: { type: "research", params: { count: 100, twisted: "twisted-flyte" } },
};

export default scrapbook;
