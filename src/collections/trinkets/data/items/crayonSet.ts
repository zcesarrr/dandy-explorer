import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/crayon-set.webp";

const crayonSet: Trinket = {
    slug: "crayon-set",
    name: "Crayon Set",
    iconUrl: icon,
    description: "Grants a random item from the Uncommon Tier every new Floor (if user's Inventory has a slot open). Dandy's Shop exclusive items are included.",
    category: "other",
    event: "none",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-scraps" } },
};

export default crayonSet;
