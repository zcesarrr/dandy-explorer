import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/goob.webp";

const goob: Toon = {
    slug: "goob",
    name: "Goob",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 3, 4, 4, 2, 2],
    abilities: [
        {
            name: "Hug",
            description: "This Toon can pull other Toons towards his position. Needs direct line of sight. 30 second cooldown.",
            type: "active",
            icon: "hug",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 100 },
        },
        {
            type: "surviveFloorsWithOther",
            params: { count: 3, playersCount: 4 },
        },
        {
            type: "travel",
            params: { meters: 100000 },
        },
        {
            type: "pickItems",
            params: { count: 80 },
        },
        {
            type: "surviveFloorsWith",
            params: { count: 25, toons: ["scraps"] },
        },
        {
            type: "useItems",
            params: { count: 80 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 1750 },
        },
        {
            type: "quests",
            params: { count: 3, toon: "scraps" },
        },
    ],
};

export default goob;
