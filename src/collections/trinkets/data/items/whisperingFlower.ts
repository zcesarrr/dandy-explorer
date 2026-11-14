import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/whispering-flower.webp";

const whisperingFlower: Trinket = {
    slug: "whispering-flower",
    name: "Whispering Flower",
    iconUrl: icon,
    description: "Increases Stamina Regeneration by 15% for every item in your inventory.",
    category: "stamina",
    event: "easter",
    rarity: "main",
    holder: { type: "research", params: { count: 100, twisted: "twisted-bassie" } },
};

export default whisperingFlower;
