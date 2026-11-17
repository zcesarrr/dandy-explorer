import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/speedometer.webp";

const speedometer: Trinket = {
    slug: "speedometer",
    name: "Speedometer",
    iconUrl: icon,
    description: "Grants the user 15 more Stamina.",
    category: "stamina",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            price: 450,
        },
    },
};

export default speedometer;
