import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/blue-bandana.webp";

const blueBandana: Trinket = {
    slug: "blue-bandana",
    name: "Blue Bandana",
    iconUrl: icon,
    description: "Increases your Extraction Speed by 7.5%, but decreases Skill Check chance by 5%.",
    category: "extSpeed",
    event: "none",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-boxten" } },
};

export default blueBandana;
