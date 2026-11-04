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
            label: "2000 Ichor",
        },
        {
            type: "toonsOwning",
            label: "Own 15 or more Toons",
        },
        {
            type: "research",
            label: "50% Research on Twisted Yatta",
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
            label: "1000 Ichor",
        },
        {
            type: "mastery",
            label: "Complete all Mastery Quests on Poppy",
        },
    ],
};

const TOONS = [
    yatta,
    looey
] as const satisfies Toon[];

export default TOONS;
