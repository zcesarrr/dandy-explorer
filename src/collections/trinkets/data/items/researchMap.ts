import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/research-map.webp";

const researchMap: Trinket = {
    slug: "research-map",
    name: "Research Map",
    iconUrl: icon,
    description: "Highlights all Research Capsules every 10 seconds during matches.",
    category: "other",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            price: 200,
        },
    },
};

export default researchMap;
