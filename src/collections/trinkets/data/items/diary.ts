import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/diary.webp";

const diary: Trinket = {
    slug: "diary",
    name: "Diary",
    iconUrl: icon,
    description: "Increases Stealth by 25%.",
    category: "stealth",
    event: "none",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-flutter" } },
};

export default diary;
