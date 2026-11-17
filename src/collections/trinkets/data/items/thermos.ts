import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/thermos.webp";

const thermos: Trinket = {
    slug: "thermos",
    name: "Thermos",
    iconUrl: icon,
    description: "Increases Stamina regeneration by 15%.",
    category: "stamina",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            price: 1250,
            requirements: [
                {
                    type: "surviveFloors",
                    params: { count: 50 },
                },
                {
                    type: "pickItems",
                    params: { count: 50 },
                },
            ],
        },
    },
};

export default thermos;
