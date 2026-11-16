import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/bone-needle-and-thread.webp";

const boneNeedle: Trinket = {
    slug: "bone-needle-and-thread",
    name: "Bone Needle and Thread",
    iconUrl: icon,
    description: "Highlights Pumpkins and Halloween Decor in your vicinity every 10 seconds during matches, making them easier to spot during events.",
    category: "other",
    event: "halloween",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-ribecca" } },
};

export default boneNeedle;
