import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/thinking-cap.webp";

const thinkingCap: Trinket = {
    slug: "thinking-cap",
    name: "Thinking Cap",
    iconUrl: icon,
    description: "Increases Skill Check window size by 40 units.",
    category: "skillCheck",
    event: "none",
    rarity: "common",
    requirement: { type: "shop", params: { price: 750 } },
};

export default thinkingCap;
