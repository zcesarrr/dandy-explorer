import type { Toon } from "../../types/toons.types";
import icon from "../../assets/toons/razzle-and-dazzle.webp";

const razzleAndDazzle: Toon = {
    slug: "razzle-and-dazzle",
    name: "Razzle & Dazzle",
    iconUrl: icon,
    rarity: "normal",
    category: "none",
    stats: [3, 3, 3, 3, 3, 3],
    abilities: [
        {
            name: "Comedy/Tragedy",
            description: "This Toon swaps between Movement Speed on odd numbered Floors, and Extraction Speed on even numbered Floors.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "dandysShop",
            params: { count: 10 },
        },
        {
            type: "finishMachines",
            params: { count: 50 },
        },
        {
            type: "pickItems",
            params: { count: 100 },
        },
        {
            type: "surviveFloors",
            params: { count: 75 },
        },
        {
            type: "travel",
            params: { meters: 100000 },
        },
        {
            type: "useItems",
            params: { count: 100 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 2000 },
        },
    ],
};

export default razzleAndDazzle;
