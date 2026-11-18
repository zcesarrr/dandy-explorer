import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/cherished-blanket.webp";

const cherisedBlanket: Trinket = {
    slug: "cherised-blanket",
    name: "Cherised Blanket",
    iconUrl: icon,
    description: "Increases the duration of Trails created by your Abilities by 4 seconds. Has no effect on Toons without a Trail Ability.",
    category: "other",
    event: "none",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-waxwell" } },
};

export default cherisedBlanket;
