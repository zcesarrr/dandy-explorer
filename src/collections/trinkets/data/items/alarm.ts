import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/alarm.webp";

const alarm: Trinket = {
    slug: "alarm",
    name: "Alarm",
    iconUrl: icon,
    description: "Increases both Walk and Run speed by 25% when Panic Mode activates for 10 seconds.",
    category: "moveSpeed",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            price: 1000,
            requirements: [
                {
                    type: "surviveFloors",
                    params: { count: 50 },
                },
            ],
        },
    },
};

export default alarm;
