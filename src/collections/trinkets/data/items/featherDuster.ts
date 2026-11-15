import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/feather-duster.webp";

const featherDuster: Trinket = {
    slug: "feather-duster",
    name: "Feather Duster",
    iconUrl: icon,
    description: "Restores 20 Stamina when picking up an item. (Does not include Capsules and Tapes).",
    category: "stamina",
    event: "none",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-tisha" } },
};

export default featherDuster;
