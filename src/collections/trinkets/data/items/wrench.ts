import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/wrench.webp";

const wrench: Trinket = {
    slug: "wrench",
    name: "Wrench",
    iconUrl: icon,
    description: "Instantly adds a large amount of completion to the first Machine you extract from on any Floor. Limit of 1 activation per Floor.",
    category: "extSpeed",
    event: "none",
    rarity: "common",
    requirement: { type: "shop", params: { price: 325 } },
};

export default wrench;
