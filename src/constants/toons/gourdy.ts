import type { Toon } from "../../types/toons";
import icon from "../../assets/toons/gourdy.webp";

const gourdy: Toon = {
    slug: "gourdy",
    name: "Gourdy",
    iconUrl: icon,
    rarity: "main",
    category: "halloween",
    stats: [2, 5, 4, 1, 1, 5],
    abilities: [
        {
            name: "Trick or Treat",
            description: "This Toon applies a random 20% boost for 15 seconds to all Toons within range. Has a cooldown of 35.",
            type: "active",
        },
        {
            name: "Sugar Rush",
            description: "Provides a 20% speed boost to all Players for 5 seconds when the Elevator opens and when Panic Mode begins.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 120 },
        },
        {
            type: "finishMachines",
            params: { count: 175 },
        },
        {
            type: "pickItems",
            params: { count: 100 },
        },
        {
            type: "surviveFloors",
            params: { count: 70 },
        },
        {
            type: "surviveFloorsWithAny",
            params: { count: 30, any: "Main" },
        },
        {
            type: "travel",
            params: { meters: 150000 },
        },
    ],
    requirements: [
        {
            type: "pumpkin",
            params: { count: 3000 },
        },
        {
            type: "ichor",
            params: { count: 2500 },
        },
        {
            type: "research",
            params: { count: 100, twisted: "Twisted Gourdy" },
        },
    ],
};

export default gourdy;
