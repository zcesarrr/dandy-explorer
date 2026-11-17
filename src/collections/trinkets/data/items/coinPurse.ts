import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/coin-purse.webp";

const coinPurse: Trinket = {
    slug: "coin-purse",
    name: "Coin Purse",
    iconUrl: icon,
    description: "Start with 30 extra Tapes.",
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

export default coinPurse;
