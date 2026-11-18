import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/friendship-bracelet.webp";

const friendshipBracelet: Trinket = {
    slug: "friendship-bracelet",
    name: "Friendship Bracelet",
    iconUrl: icon,
    description: "Gain 5 max Stamina for every alive Toon in the round. Maxes at 40 Stamina.",
    category: "stamina",
    event: "none",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-goob" } },
};

export default friendshipBracelet;
