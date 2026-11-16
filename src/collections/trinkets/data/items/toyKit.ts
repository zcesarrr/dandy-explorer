import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/toy-kit.webp";

const toyKit: Trinket = {
    slug: "toy-kit",
    name: "Toy Kit",
    iconUrl: icon,
    description: "If your Toon has a ring-based aura ability, increase the radius by 25%.",
    category: "other",
    event: "holiday",
    rarity: "main",
    holder: { type: "research", params: { count: 100, twisted: "twisted-bobette" } },
};

export default toyKit;
