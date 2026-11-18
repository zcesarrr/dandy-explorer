import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/bone.webp";

const bone: Trinket = {
    slug: "bone",
    name: "Bone",
    iconUrl: icon,
    description: "Increases both Walk and Run Speed by 25% when picking up an Item for 4 seconds. Effect can stack but caps at 40 speed. (Does not include Capsules and Tapes)",
    category: "stamina",
    event: "none",
    rarity: "main",
    holder: { type: "research", params: { count: 100, twisted: "twisted-pebble" } },
};

export default bone;
