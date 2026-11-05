import type { Toon } from "../../types/toons";

const ginger: Toon = {
    slug: "ginger",
    name: "Ginger",
    iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/c/c6/Ginger_Render.png",
    rarity: "normal",
    category: "holiday",
    stats: [3, 3, 2, 3, 4, 3],
    abilities: [
        {
            name: "Baked with Care!",
            description: "This toon can heal a nearby targeted Toon to full Hearts for 100 tapes with a cooldown of 100. For every extra Ginger, the cost increases by 50 Tapes and the Cooldown increases by 30.",
            type: "active",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 25 },
        },
        {
            type: "pickItems",
            params: { count: 35 },
        },
        {
            type: "surviveFloors",
            params: { count: 30 },
        },
        {
            type: "custom",
            params: { text: "Survive 10 Floors with 2 other Players in your round!" },
        },
        {
            type: "travel",
            params: { meters: 55000 },
        },
        {
            type: "useItems",
            params: { count: 35 },
        },
    ],
    requirements: [
        {
            type: "ornament",
            params: { count: 700 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "Twisted Ginger" },
        },
    ],
};

export default ginger;
