import type { Toon } from "../../types/toons.types";
import icon from "../../assets/toons/shrimpo.webp";

const shrimpo: Toon = {
    slug: "shrimpo",
    name: "Shrimpo",
    iconUrl: icon,
    rarity: "normal",
    category: "none",
    stats: [3, 1, 1, 1, -1, 1],
    abilities: [
        {
            name: "Bully",
            description: "Stealth is drastically lower than any other Toon. Only play this Toon if you are looking for a challenge.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "finishMachines",
            params: { count: 30 },
        },
        {
            type: "surviveFloors",
            params: { count: 30 },
        },
        {
            type: "travel",
            params: { meters: 50000 },
        },
        {
            type: "pickItems",
            params: { count: 30 },
        },
        {
            type: "custom",
            params: { text: "Survive 5 Floors with 2 or more Players in your round!" },
        },
        {
            type: "useItems",
            params: { count: 30 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 100 },
        },
    ],
};

export default shrimpo;
