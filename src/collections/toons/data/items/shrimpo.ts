import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/shrimpo.webp";

const shrimpo: Toon = {
    slug: "shrimpo",
    name: "Shrimpo",
    iconUrl: icon,
    rarity: "common",
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
            type: "surviveFloorsWithOther",
            params: { count: 5, playersCount: 2 },
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
