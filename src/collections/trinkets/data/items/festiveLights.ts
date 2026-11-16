import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/festive-lights.webp";

const festiveLights: Trinket = {
    slug: "festive-lights",
    name: "Festive Lights",
    iconUrl: icon,
    description: "Highlights Ornaments in your vicinity every 10 seconds during matches, making them easier to spot during events.",
    category: "other",
    event: "holiday",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-rudie" } },
};

export default festiveLights;
