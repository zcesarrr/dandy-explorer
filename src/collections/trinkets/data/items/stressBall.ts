import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/stress-ball.webp";

const stressBall: Trinket = {
    slug: "stress-ball",
    name: "Stress Ball",
    iconUrl: icon,
    description: "Increases your Extraction Speed by 5% upon completion of a Skill Check. Effect lasts for 15 seconds and stacks.",
    category: "extSpeed",
    event: "none",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-squirm" } },
};

export default stressBall;
