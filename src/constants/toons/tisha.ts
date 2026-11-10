import type { Toon } from "../../types/toons.types";
import icon from "../../assets/toons/tisha.webp";

const tisha: Toon = {
    slug: "tisha",
    name: "Tisha",
    iconUrl: icon,
    rarity: "normal",
    category: "none",
    stats: [3, 4, 4, 2, 3, 2],
    abilities: [
        {
            name: "Tidy Up!",
            description: "This Toon can create a pulse that increases the Movement Speed of Toons around her by 25% for 5 seconds. This pulse also removes any Ichor puddles within its radius. Has a Cooldown of 50.",
            type: "active",
            icon: "tidyUp",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 30 },
        },
        {
            type: "finishMachines",
            params: { count: 30 },
        },
        {
            type: "surviveFloors",
            params: { count: 25 },
        },
        {
            type: "pickItems",
            params: { count: 30 },
        },
        {
            type: "surviveFloorsWithOther",
            params: { count: 5, playersCount: 3 },
        },
        {
            type: "travel",
            params: { meters: 50000 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 500 },
        },
    ],
};

export default tisha;
