import type { Toon } from "../types/toons";

const yatta: Toon = {
    slug: "yatta",
    name: "Yatta",
    iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/7/75/Yatta_Render.png",
    rarity: "normal",
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
            params: { count: 20, toon: "Looey" },
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

const looey: Toon = {
    slug: "looey",
    name: "Looey",
    iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/d/d0/Looey_Render.png",
    rarity: "normal",
    category: "none",
    stats: [3, 4, 3, 3, 2, 3],
    abilities: [
        {
            name: "Heart of Helium",
            description: "For each missing heart this Toon has, they gain 20% more walk and run speed multiplier. At one heart, this Toon gains 40% more speed multiplier. His speed is reduced back when healed.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "finishMachines",
            params: { count: 30 },
        },
        {
            type: "usePassiveAbility",
            params: { count: 30 },
        },
        {
            type: "pickCapsules",
            params: { count: 50 },
        },
        {
            type: "pickItems",
            params: { count: 45 },
        },
        {
            type: "surviveFloors",
            params: { count: 30 },
        },
        {
            type: "travel",
            params: { meters: 80000 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 1000 },
        },
        {
            type: "mastery",
            params: { toon: "Poppy" },
        },
    ],
};

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

const TOONS = [
    yatta,
    looey,
    bobette,
] as const satisfies Toon[];

export default TOONS;
