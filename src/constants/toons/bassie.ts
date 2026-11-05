import type { Toon } from "../../types/toons";

const bassie: Toon = {
    slug: "bassie",
    name: "Bassie",
    iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/0/0c/Bassie_Render.png",
    rarity: "main",
    category: "easter",
    stats: [2, 1, 5, 4, 4, 2],
    abilities: [
        {
            name: "Springful Sharing",
            description: "This Toon can drop items from her inventory, sharing them with other Toons.",
            type: "active",
        },
        {
            name: "Easter Basket",
            description: "This Toon's basket provides her with an extra inventory slot for carrying 1 extra item.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 120 },
        },
        {
            type: "reachFloor",
            params: { count: 20 },
        },
        {
            type: "travel",
            params: { meters: 160000 },
        },
        {
            type: "finishMachines",
            params: { count: 110 },
        },
        {
            type: "surviveFloors",
            params: { count: 65 },
        },
        {
            type: "useItems",
            params: { count: 130 },
        },
    ],
    requirements: [
        {
            type: "easter",
            params: { count: 3000 },
        },
        {
            type: "ichor",
            params: { count: 2500 },
        },
        {
            type: "research",
            params: { count: 100, twisted: "Twisted Bassie" },
        },
    ],
};

export default bassie;
