import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/ribbon-spool.webp";

const ribbonSpool: Trinket = {
    slug: "ribbon-spool",
    name: "Ribbon Spool",
    iconUrl: icon,
    description: "Gain 10% more Walk and Run Speed on even-numbered Floors.",
    category: "moveSpeed",
    event: "none",
    rarity: "uncommon",
    holder: { type: "research", params: { count: 100, twisted: "twisted-razzle-and-dazzle" } },
};

export default ribbonSpool;
