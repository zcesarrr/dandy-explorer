import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/paint-bucket.webp";

const paintBucket: Trinket = {
    slug: "paint-bucket",
    name: "Paint Bucket",
    iconUrl: icon,
    description: "Increases Skill Check Size and Chance by 10%. As Brusha, receive a +25% speed boost for 5 seconds after a successful machine buff.",
    category: "skillCheck",
    event: "none",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-brusha" } },
};

export default paintBucket;
