import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/spare-bulb.webp";

const spareBulb: Trinket = {
    slug: "spare-bulb",
    name: "Spare Bulb",
    iconUrl: icon,
    description: "Increases Blackout light radius by 25%. Also increases light radius for light-producing Toons.",
    category: "other",
    event: "none",
    rarity: "uncommon",
    holder: { type: "research", params: { count: 100, twisted: "twisted-brightney" } },
};

export default spareBulb;
