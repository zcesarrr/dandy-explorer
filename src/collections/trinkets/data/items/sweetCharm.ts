import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/sweet-charm.webp";

const sweetCharm: Trinket = {
    slug: "sweet-charm",
    name: "Sweet Charm",
    iconUrl: icon,
    description: "Decreases Active Ability Cooldown by 8%. Has no effect on Toons without an Active Ability.",
    category: "other",
    event: "none",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-cosmo" } },
};

export default sweetCharm;
