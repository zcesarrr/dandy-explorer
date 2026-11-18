import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/mime-makeup.webp";

const mimeMakeup: Trinket = {
    slug: "mime-makeup",
    name: "Mime Makeup",
    iconUrl: icon,
    description: "When failing a skill check the user will not alert Twisteds to their location.",
    category: "skillCheck",
    event: "none",
    rarity: "rare",
    holder: { type: "research", params: { count: 100, twisted: "twisted-blot" } },
};

export default mimeMakeup;
