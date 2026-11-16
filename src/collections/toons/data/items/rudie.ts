import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/rudie.webp";

const rudie: Toon = {
    slug: "rudie",
    name: "Rudie",
    iconUrl: icon,
    rarity: "common",
    category: "holiday",
    stats: [3, 3, 3, 3, 3, 3],
    abilities: [
        {
            name: "Antler Charge",
            description: "This Toon uses his antlers to quickly charge forward in a short burst, helping him escape tricky situations.",
            type: "active",
            icon: "antlerCharge",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 60 },
        },
        {
            type: "finishMachines",
            params: { count: 30 },
        },
        {
            type: "pickItems",
            params: { count: 35 },
        },
        {
            type: "surviveFloors",
            params: { count: 25 },
        },
        {
            type: "travel",
            params: { meters: 50000 },
        },
        {
            type: "useItems",
            params: { count: 30 },
        },
    ],
    requirements: [
        {
            type: "ornament",
            params: { count: 300 },
        },
    ],
};

export default rudie;
