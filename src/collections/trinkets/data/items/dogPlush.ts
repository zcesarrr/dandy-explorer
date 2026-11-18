import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/dog-plush.webp";

const dogPlush: Trinket = {
    slug: "dog-plush",
    name: "Dog Plush",
    iconUrl: icon,
    description: "Increases Walk Speed by 10%.",
    category: "moveSpeed",
    event: "none",
    rarity: "uncommon",
    holder: { type: "research", params: { count: 100, twisted: "twisted-toodles" } },
};

export default dogPlush;
