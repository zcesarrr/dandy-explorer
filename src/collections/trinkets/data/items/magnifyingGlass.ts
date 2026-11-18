import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/magnifying-glass.webp";

const magnifyingGlass: Trinket = {
    slug: "magnifying-glass",
    name: "Magnifying Glass",
    iconUrl: icon,
    description: "Adds slightly more completion when performing a successful Skill Check, but decreases Skill Check size by 33%.",
    category: "skillCheck",
    event: "none",
    rarity: "uncommon",
    holder: { type: "research", params: { count: 100, twisted: "twisted-rodger" } },
};

export default magnifyingGlass;
