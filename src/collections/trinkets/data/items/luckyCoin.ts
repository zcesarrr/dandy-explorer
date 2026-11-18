import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/lucky-coin.webp";

const luckyCoin: Trinket = {
    slug: "lucky-coin",
    name: "Lucky Coin",
    iconUrl: icon,
    description: "Gain a 12% boost to a random Stat each Floor. Prior Floor's effect wears off when entering a new Floor. As Gigi, removes Common items from her Ability's pool.",
    category: "other",
    event: "none",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-gigi" } },
};

export default luckyCoin;
