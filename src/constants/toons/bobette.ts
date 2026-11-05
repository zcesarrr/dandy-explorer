import type { Toon } from "../../types/toons";

const bobette: Toon = {
    slug: "bobette",
    name: "Bobette",
    iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/f/f0/Bobette_Render.png",
    rarity: "main",
    category: "holiday",
    stats: [2, 4, 3, 5, 2, 2],
    abilities: [
        {
            name: "Precious Packaging",
            description: "This Toon can duck and cover herself into a gift box for 8 seconds, in which she is invincible yet unable to move.",
            type: "active",
        },
        {
            name: "Festive Aura",
            description: "The festive aura of this Toon passively gives those around her 50% faster stamina regeneration and a 25% speed boost that lasts for 5 seconds.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 100 },
        },
        {
            type: "finishMachines",
            params: { count: 120 },
        },
        {
            type: "reachFloor",
            params: { count: 20 },
        },
        {
            type: "surviveFloors",
            params: { count: 60 },
        },
        {
            type: "travel",
            params: { meters: 150000 },
        },
        {
            type: "useItems",
            params: { count: 125 },
        },
    ],
    requirements: [
        {
            type: "ornament",
            params: { count: 3000 },
        },
        {
            type: "ichor",
            params: { count: 2500 },
        },
        {
            type: "research",
            params: { count: 100, twisted: "Twisted Bobette" },
        },
    ],
};

export default bobette;
