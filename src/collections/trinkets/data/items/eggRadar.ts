import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/egg-radar.webp";

const eggRadar: Trinket = {
    slug: "egg-radar",
    name: "Egg Radar",
    iconUrl: icon,
    description: "Highlights Baskets in your vicinity every 10 seconds during matches, making them easier to spot during events.",
    category: "other",
    event: "easter",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-eggson" } },
};

export default eggRadar;
