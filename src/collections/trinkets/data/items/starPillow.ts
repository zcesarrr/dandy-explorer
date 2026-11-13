import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/star-pillow.webp";

const starPillow: Trinket = {
    slug: "star-pillow",
    name: "Star Pillow",
    iconUrl: icon,
    description: "Increases Stamina Regeneration by 100% while extracting. As Astro, increases ability range by 25%, and spawns 1 more star pillow pickup per floor.",
    category: "stamina",
    event: "none",
    rarity: "main",
    requirement: { type: "research", params: { count: 100, twisted: "Twisted Astro" } },
};

export default starPillow;
