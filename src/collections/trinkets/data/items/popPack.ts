import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/pop-pack.webp";

const popPack: Trinket = {
    slug: "pop-pack",
    name: "Pop Pack",
    iconUrl: icon,
    description: "Grants the 'Pop' Item every new Floor (If user's inventory has a slot open).",
    category: "stamina",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            price: 1500,
            requirements: [
                {
                    type: "buyDandysShop",
                    params: { count: 30 },
                },
                {
                    type: "pickItems",
                    params: { count: 75 },
                },
            ],
        },
    },
};

export default popPack;
