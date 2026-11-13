import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/yatta.webp";

const yatta: Toon = {
    slug: "yatta",
    name: "Yatta",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 3, 4, 1, 2, 5],
    abilities: [
        {
            name: "Piñata Party",
            description: "This Toon drops 2 random candy items after completing a machine, and 4 random candy items when injured.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "finishMachines",
            params: { count: 85 },
        },
        {
            type: "pickCapsules",
            params: { count: 50 },
        },
        {
            type: "pickItems",
            params: { count: 120 },
        },
        {
            type: "surviveFloorsWith",
            params: { count: 20, toons: ["Looey"] },
        },
        {
            type: "travel",
            params: { meters: 45000 },
        },
        {
            type: "useItems",
            params: { count: 120 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 2000 },
        },
        {
            type: "toonsOwning",
            params: { count: 15 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "Twisted Yatta" },
        },
    ],
};

export default yatta;
