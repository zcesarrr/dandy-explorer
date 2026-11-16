import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/toodles.webp";

const toodles: Toon = {
    slug: "toodles",
    name: "Toodles",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 3, 3, 3, 4, 2],
    abilities: [
        {
            name: "Beginner's Luck",
            description: "This Toon can roll for a 15% boost to a random Stat that lasts for 10 seconds. Has a cooldown of 25.",
            type: "active",
            icon: "beginnersLuck",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 75 },
        },
        {
            type: "finishMachines",
            params: { count: 30 },
        },
        {
            type: "surviveFloors",
            params: { count: 30 },
        },
        {
            type: "useItems",
            params: { count: 35 },
        },
        {
            type: "pickItems",
            params: { count: 35 },
        },
        {
            type: "travel",
            params: { meters: 52500 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 350 },
        },
        {
            type: "surviveFloors",
            params: { count: 15 },
        },
    ],
};

export default toodles;
