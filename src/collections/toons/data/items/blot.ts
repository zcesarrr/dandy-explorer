import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/blot.webp";

const blot: Toon = {
    slug: "blot",
    name: "Blot",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 1, 4, 5, 3, 2],
    abilities: [
        {
            name: "Blot Jr.",
            description: "This Toon places a decoy that attracts nearby Twisteds and has 1 Heart. This ability costs 10 Tapes and has a cooldown of 60 seconds. For each extra Blot on a team the cost of the decoy costs an additional 10 tapes.",
            type: "active",
            icon: "blotJr",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 40 },
        },
        {
            type: "pickCapsules",
            params: { count: 100 },
        },
        {
            type: "surviveFloors",
            params: { count: 30 },
        },
        {
            type: "surviveFloorsWith",
            params: { count: 10, toons: ["looey", "yatta"] },
        },
        {
            type: "travel",
            params: { meters: 120000 },
        },
        {
            type: "useItems",
            params: { count: 100 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 3000 },
        },
        {
            type: "mastery",
            params: { toon: "Looey" },
        },
        {
            type: "mastery",
            params: { toon: "Yatta" },
        },
    ],
};

export default blot;
