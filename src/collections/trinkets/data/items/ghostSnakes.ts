import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/ghost-snakes-in-a-can.webp";

const ghostSnakes: Trinket = {
    slug: "ghost-snakes-in-a-can",
    name: "Ghost Snakes In A Can",
    iconUrl: icon,
    description: "Reduces an Active Ability's cooldown by 5 Seconds. Has no effect on Toons without an Active Ability.",
    category: "other",
    event: "none",
    rarity: "uncommon",
    holder: { type: "research", params: { count: 100, twisted: "twisted-connie" } },
};

export default ghostSnakes;
