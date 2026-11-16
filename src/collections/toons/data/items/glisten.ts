import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/glisten.webp";

const glisten: Toon = {
    slug: "glisten",
    name: "Glisten",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 2, 3, 3, 2, 5],
    abilities: [
        {
            name: "Reflection",
            description: "This Toon can travel through a mirror, instantly teleporting to a targeted Toon regardless of line of sight and can inflict Confused III on himself. Has a cooldown of 100.",
            type: "active",
            icon: "reflection",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 60 },
        },
        {
            type: "pickItems",
            params: { count: 60 },
        },
        {
            type: "travel",
            params: { meters: 100000 },
        },
        {
            type: "finishMachines",
            params: { count: 100 },
        },
        {
            type: "surviveFloors",
            params: { count: 50 },
        },
        {
            type: "useItems",
            params: { count: 60 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 2500 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "twisted-glisten" },
        },
        {
            type: "finishMachines",
            params: { count: 300 },
        },
    ],
};

export default glisten;
