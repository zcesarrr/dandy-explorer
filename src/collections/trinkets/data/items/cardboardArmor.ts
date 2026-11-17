import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/cardboard-amor.webp";

const cardboardArmor: Trinket = {
    slug: "cardboard-armor",
    name: "Cardboard 'Armor'",
    iconUrl: icon,
    description: "Protects the user from long-ranged Twisted attacks. Limit of 1 activation per Floor.",
    category: "other",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            price: 2750,
            requirements: [
                {
                    "type": "research",
                    params: { count: 100, twisted: "twisted-goob" },
                },
                {
                    "type": "research",
                    params: { count: 100, twisted: "twisted-scraps" },
                },
            ],
        },
    },
};

export default cardboardArmor;
