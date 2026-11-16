import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/coal.webp";

const coal: Toon = {
    slug: "coal",
    name: "Coal",
    iconUrl: icon,
    rarity: "common",
    category: "holiday",
    stats: [3, 2, 4, 4, 3, 2],
    abilities: [
        {
            name: "Scout",
            description: "This Toon can sniff out items across the map, causing items to be highlighted for all Toons for 10 seconds. Has a cooldown of 30.",
            type: "active",
            icon: "scout",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 100 },
        },
        {
            type: "pickCapsules",
            params: { count: 85 },
        },
        {
            type: "pickItems",
            params: { count: 120 },
        },
        {
            type: "surviveFloorsWith",
            params: { count: 5, toons: ["pebble"] },
        },
        {
            type: "travel",
            params: { meters: 90000 },
        },
        {
            type: "useItems",
            params: { count: 85 },
        },
    ],
    requirements: [
        {
            type: "ornament",
            params: { count: 1500 },
        },
        {
            type: "trinketsOwning",
            params: { count: 15 },
        },
    ],
};

export default coal;
