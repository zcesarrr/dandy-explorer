import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/soulvester.webp";

const soulvester: Toon = {
    slug: "soulvester",
    name: "Soulvester",
    iconUrl: icon,
    rarity: "common",
    category: "halloween",
    stats: [3, 5, 1, 1, 3, 5],
    abilities: [
        {
            name: "Soul Shield",
            description: "This Toon spends a heart to guard an ally, teleporting to block the next damage they would take and stunning the attacking Twisted for 1.5s. This Toon gains 1-Star Speed boost while guarding and 3-Star Speed boost for 2s after defending.",
            type: "active",
            icon: "soulShield",
        },
    ],
    quests: [
        {
            type: "blackouts",
            params: { count: 5 },
        },
        {
            type: "finishMachines",
            params: { count: 100 },
        },
        {
            type: "surviveFloors",
            params: { count: 30 },
        },
        {
            type: "surviveFloorsWith",
            params: { count: 10, toons: ["connie"] },
        },
        {
            type: "travel",
            params: { meters: 50000 },
        },
        {
            type: "useItems",
            params: { count: 50 },
        },
    ],
    requirements: [
        {
            type: "pumpkin",
            params: { count: 700 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "twisted-soulvester" },
        },
    ],
};

export default soulvester;
