import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/squirm.webp";

const squirm: Toon = {
    slug: "squirm",
    name: "Squirm",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 3, 3, 2, 2, 5],
    abilities: [
        {
            name: "Distressed Delicacy",
            description: "Hold down your ability to eat books, gaining 100% extraction speed for 10 seconds. Proximity to a bookshelf makes this Toon's cooldown recover twice as fast. Cooldown of 80.",
            type: "active",
            icon: "distressedDelicacy",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 100 },
        },
        {
            type: "finishMachines",
            params: { count: 100 },
        },
        {
            type: "custom",
            params: { text: "Eat from 100 Bookshelves!" },
        },
        {
            type: "surviveFloors",
            params: { count: 30 },
        },
        {
            type: "surviveFloorsWith",
            params: { count: 5, toons: ["brightney"] },
        },
        {
            type: "travel",
            params: { meters: 60000 },
        },
    ],
    requirements: [
        {
            type: "research",
            params: { count: 50, twisted: "Twisted Squirm" },
        },
        {
            type: "titlesOwning",
            params: { count: 3 },
        },
        {
            type: "ichor",
            params: { count: 3000 },
        },
    ],
};

export default squirm;
