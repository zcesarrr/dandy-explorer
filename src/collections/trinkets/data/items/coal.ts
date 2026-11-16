import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/coal.webp";

const coal: Trinket = {
    slug: "coal",
    name: "Coal",
    iconUrl: icon,
    description: "Decreases Stealth by 10% and Walk and Run Speed by 10%.",
    category: "stealth",
    event: "holiday",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-coal" } },
};

export default coal;
