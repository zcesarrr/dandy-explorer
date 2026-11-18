import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/vanity-mirror.webp";

const vanityMirror: Trinket = {
    slug: "vanity-mirror",
    name: "Vanity Mirror",
    iconUrl: icon,
    description: "Increases Run Speed by 30% during Panic Mode.",
    category: "moveSpeed",
    event: "none",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-glisten" } },
};

export default vanityMirror;
