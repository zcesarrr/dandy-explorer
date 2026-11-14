import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/shelly.webp";

const shelly: Toon = {
    slug: "shelly",
    name: "Shelly",
    iconUrl: icon,
    rarity: "main",
    category: "none",
    stats: [2, 5, 3, 2, 3, 3],
    abilities: [
        {
            name: "Inspiration",
            description: "This Toon can boost the Extraction Speed of a selected Toon by 75% for 15 seconds. Has a cooldown of 60.",
            type: "active",
            icon: "inspiration",
        },
        {
            name: "Problem Solver",
            description: "This Toon gains a 25% Movement Speed boost when any Machine is completed for 10 seconds.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 125 },
        },
        {
            type: "pickItems",
            params: { count: 100 },
        },
        {
            type: "surviveFloorsWithOther",
            params: { count: 15, playersCount: 4 },
        },
        {
            type: "finishMachines",
            params: { count: 150 },
        },
        {
            type: "surviveFloors",
            params: { count: 80 },
        },
        {
            type: "travel",
            params: { meters: 150000 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 4250 },
        },
        {
            type: "research",
            params: { count: 100, twisted: "twisted-shelly" },
        },
        {
            type: "mastery",
            params: { toon: "tisha" },
        },
    ],
};

export default shelly;
