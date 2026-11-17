import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/speedy-shoes.webp";

const speedyShoes: Trinket = {
    slug: "speedy-shoes",
    name: "Speedy Shoes",
    iconUrl: icon,
    description: "Increases both Walk and Run Speed by 5%.",
    category: "moveSpeed",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            price: 400,
        },
    },
};

export default speedyShoes;
