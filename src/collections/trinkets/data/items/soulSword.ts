import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/soul-sword.webp";

const soulSword: Trinket = {
    slug: "soul-sword",
    name: "Soul Sword",
    iconUrl: icon,
    description: "When a Twisted damages the user, the Twisted receives a 15% speed debuff for 30 seconds. Does not stack. As Soulvester, gain an additional heart while this trinket is equipped.",
    category: "other",
    event: "halloween",
    rarity: "uncommon",
    holder: { type: "research", params: { count: 100, twisted: "twisted-soulvester" } },
};

export default soulSword;
