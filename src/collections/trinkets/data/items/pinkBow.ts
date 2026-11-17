import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/pink-bow.webp";

const pinkBow: Trinket = {
    slug: "pink-bow",
    name: "Pink Bow",
    iconUrl: icon,
    description: "Increases Run Speed by 7.5%.",
    category: "moveSpeed",
    event: "none",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-poppy" } },
};

export default pinkBow;
