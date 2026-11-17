import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/cooler.webp";

const cooler: Trinket = {
    slug: "cooler",
    name: "Cooler",
    iconUrl: icon,
    description: "Grants the user 50 more Stamina, but lowers Movement Speed by 5%.",
    category: "stamina",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            price: 2250,
            requirements: [
                {
                    "type": "travel",
                    params: { meters: 250000 },
                },
                {
                    type: "pickItems",
                    params: { count: 30, rarity: "rare" },
                },
            ],
        },
    },
};

export default cooler;
