import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/megaphone.webp";

const megaphone: Trinket = {
    slug: "megaphone",
    name: "Megaphone",
    iconUrl: icon,
    description: "This Trinket grants the user one Air Horn every other Floor if the user has an inventory slot open.",
    category: "other",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            price: 1850,
            requirements: [
                {
                    type: "encounterTwisteds",
                    params: { count: 125 },
                },
                {
                    type: "reachFloor",
                    params: { count: 20 },
                },
            ],
        },
    },
};

export default megaphone;
