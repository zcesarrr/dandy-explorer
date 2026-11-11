import type { Toon } from "../../types/toons.types";
import icon from "../../assets/toons/ribecca.webp";

const ribecca: Toon = {
    slug: "ribecca",
    name: "Ribecca",
    iconUrl: icon,
    rarity: "normal",
    category: "halloween",
    stats: [3, 3, 3, 3, 3, 3],
    abilities: [
        {
            name: "The Undead",
            description: "Ribecca is immune to all applied debuffs (does not include trinkets). Whenever this Toon's immunity shines, she feels empowered and receives a random buff in its place for 10 seconds.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "dandysShop",
            params: { count: 25 },
        },
        {
            type: "finishMachines",
            params: { count: 30 },
        },
        {
            type: "ichorSpills",
            params: { count: 5 },
        },
        {
            type: "pickItems",
            params: { count: 35 },
        },
        {
            type: "travel",
            params: { meters: 50000 },
        },
        {
            type: "useItems",
            params: { count: 35 },
        },
    ],
    requirements: [
        {
            type: "pumpkin",
            params: { count: 300 },
        },
    ],
};

export default ribecca;
