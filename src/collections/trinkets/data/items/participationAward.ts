import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/participation-award.webp";

const participationAward: Trinket = {
    slug: "participation-award",
    name: "Participation Award",
    iconUrl: icon,
    description: "Increases Skill Check chance by 25%, but decreases Skill Check size by 10%.",
    category: "skillCheck",
    event: "none",
    rarity: "main",
    holder: { type: "research", params: { count: 100, twisted: "twisted-shelly" } },
};

export default participationAward;
