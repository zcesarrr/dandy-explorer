import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/moon-pack-heirloom.webp";

const moonPack: Trinket = {
    slug: "moon-pack-heirloom",
    name: "Moon Pack Heirloom",
    iconUrl: icon,
    description: "Highlights all other teammates' locations for 3 seconds for the user after any user completes a machine.",
    category: "other",
    event: "halloween",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-eclipse" } },
};

export default moonPack;
