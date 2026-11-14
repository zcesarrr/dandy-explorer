import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/gigi.webp";

const gigi: Toon = {
    slug: "gigi",
    name: "Gigi",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 5, 3, 1, 3, 3],
    abilities: [
        {
            name: "Surprise!",
            description: "This Toon can grant herself a random item from any Tier (Dandy's Shop items included). Has a Cooldown of 60.",
            type: "active",
            icon: "surprise",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 50 },
        },
        {
            type: "finishMachines",
            params: { count: 65 },
        },
        {
            type: "travel",
            params: { meters: 85000 },
        },
        {
            type: "dandysShop",
            params: { count: 30 },
        },
        {
            type: "pickItems",
            params: { count: 150 },
        },
        {
            type: "useItems",
            params: { count: 200 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 2000 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "twisted-gigi" },
        },
        {
            type: "pickItems",
            params: { rarity: "rare", count: 45 },
        },
    ],
};

export default gigi;
