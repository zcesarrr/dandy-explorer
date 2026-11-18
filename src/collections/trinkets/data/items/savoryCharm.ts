import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/savory-charm.webp";

const savoryCharm: Trinket = {
    slug: "savory-charm",
    name: "Savory Charm",
    iconUrl: icon,
    description: "Saves the user from a fatal attack, granting them invincibility for 10 seconds. Can only activate once per round. Does not save the user from Lethal attacks.",
    category: "other",
    event: "none",
    rarity: "main",
    holder: { type: "research", params: { count: 100, twisted: "twisted-sprout" } },
};

export default savoryCharm;
