import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/flyte.webp";

const flyte: Toon = {
    slug: "flyte",
    name: "Flyte",
    iconUrl: icon,
    rarity: "common",
    category: "easter",
    stats: [3, 2, 4, 2, 3, 4],
    abilities: [
        {
            name: "Gust",
            description: "This Toon places a 'Gust' at Flyte's location that lasts for 10 seconds. Any Toon that walks into the Gust receives a 15% Movement Speed boost while in the Gust and for 3 seconds after leaving. Has a cooldown of 50 seconds.",
            type: "active",
            icon: "gust",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 85 },
        },
        {
            type: "reachFloor",
            params: { count: 12 },
        },
        {
            type: "surviveFloorsWith",
            params: { count: 5, toons: ["flutter"] },
        },
        {
            type: "finishMachines",
            params: { count: 60 },
        },
        {
            type: "surviveFloors",
            params: { count: 45 },
        },
        {
            type: "travel",
            params: { meters: 90000 },
        },
    ],
    requirements: [
        {
            type: "easter",
            params: { count: 700 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "twisted-flyte" },
        },
    ],
};

export default flyte;
