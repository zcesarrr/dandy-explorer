import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/brick.webp";

const brick: Trinket = {
    slug: "brick",
    name: "Brick",
    iconUrl: icon,
    description: "Lowers both Walk and Run Speed by 10%. It's a brick, what did you expect?",
    category: "moveSpeed",
    event: "none",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-shrimpo" } },
};

export default brick;
