import type { Toon } from "../../types/toons.types";
import icon from "../../assets/toons/sprout.webp";

const sprout: Toon = {
    slug: "sprout",
    name: "Sprout",
    iconUrl: icon,
    rarity: "main",
    category: "none",
    stats: [2, 2, 4, 5, 3, 2],
    abilities: [
        {
            name: "Baked Sweets",
            description: "This Toon can heal a targeted Toon by 1 Heart at the cost of 100 Tapes Tapes. Has a cooldown of 100. Tape cost scales with the number of Sprouts in the round.",
            type: "active",
            icon: "bakedSweets",
        },
        {
            name: "Overprotective",
            description: "This Toon can see where all the other alive Toons are, along with their current Health status.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 50 },
        },
        {
            type: "surviveFloors",
            params: { count: 75 },
        },
        {
            type: "pickItems",
            params: { count: 125 },
        },
        {
            type: "surviveFloorsWithOther",
            params: { count: 15, playersCount: 4 },
        },
        {
            type: "surviveFloorsWith",
            params: { count: 30, toons: ["Cosmo"] },
        },
        {
            type: "travel",
            params: { meters: 150000 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 4500 },
        },
        {
            type: "research",
            params: { count: 100, twisted: "Twisted Sprout" },
        },
        {
            type: "mastery",
            params: { toon: "Cosmo" },
        },
    ],
};

export default sprout;
