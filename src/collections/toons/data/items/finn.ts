import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/finn.webp";

const finn: Toon = {
    slug: "finn",
    name: "Finn",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 4, 3, 2, 3, 3],
    abilities: [
        {
            name: "Reel In",
            description: "This Toon gains a 35% Movement Speed boost when any Machine is completed for 10 seconds.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "dandysShop",
            params: { count: 5 },
        },
        {
            type: "pickItems",
            params: { count: 30 },
        },
        {
            type: "travel",
            params: { meters: 55000 },
        },
        {
            type: "finishMachines",
            params: { count: 45 },
        },
        {
            type: "surviveFloors",
            params: { count: 30 },
        },
        {
            type: "useItems",
            params: { count: 30 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 500 },
        },
        {
            type: "finishMachines",
            params: { count: 15 },
        },
    ],
};

export default finn;
