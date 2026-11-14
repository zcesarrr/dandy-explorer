import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/dandy-plush.webp";

const dandyPlush: Trinket = {
    slug: "dandy-plush",
    name: "Dandy Plush",
    iconUrl: icon,
    description: "Grants the user a 50% discount on all Dandy's Shop Items.",
    category: "other",
    event: "none",
    rarity: "lethal",
    holder: { type: "research", params: { count: 100, twisted: "twisted-dandy" } },
};

export default dandyPlush;
