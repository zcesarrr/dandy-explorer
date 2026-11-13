import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/scraps.webp";

const scraps: Toon = {
    slug: "scraps",
    name: "Scraps",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 2, 2, 5, 3, 3],
    abilities: [
        {
            name: "Crafty Grapple",
            description: "This Toon can pull herself towards another Toon or Machine's targeted position. Needs direct line of sight. 25 second cooldown.",
            type: "active",
            icon: "craftyGrapple",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 100 },
        },
        {
            type: "dandysShop",
            params: { count: 12 },
        },
        {
            type: "encounterTwisteds",
            params: { count: 25 },
        },
        {
            type: "pickItems",
            params: { count: 60 },
        },
        {
            type: "useItems",
            params: { count: 60 },
        },
        {
            type: "travel",
            params: { meters: 85000 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 1500 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "Twisted Goob" },
        },
    ],
};

export default scraps;
