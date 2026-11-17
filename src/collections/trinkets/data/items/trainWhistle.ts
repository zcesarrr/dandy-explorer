import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/train-whistle.webp";

const trainWhistle: Trinket = {
    slug: "train-whistle",
    name: "Train Whistle",
    iconUrl: icon,
    description: "Makes the user immune to the Slow Debuff.",
    category: "other",
    event: "none",
    rarity: "lethal",
    holder: { type: "research", params: { count: 100, twisted: "twisted-dyle" } },
};

export default trainWhistle;
