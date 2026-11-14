import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/pull-toy.webp";

const pullToy: Trinket = {
    slug: "pull-toy",
    name: "Pull Toy",
    iconUrl: icon,
    description: "Increases both Walk and Run Speed by 25% when a new Floor arrives for 10 seconds.",
    category: "moveSpeed",
    event: "none",
    rarity: "common",
    holder: { type: "shop", params: { price: 1250 } },
};

export default pullToy;
