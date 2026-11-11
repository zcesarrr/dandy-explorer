import type { Toon } from "../../types/toons.types";
import icon from "../../assets/toons/eggson.webp";

const eggson: Toon = {
    slug: "eggson",
    name: "Eggson",
    iconUrl: icon,
    rarity: "normal",
    category: "easter",
    stats: [3, 3, 3, 3, 3, 3],
    abilities: [
        {
            name: "Fixer Upper",
            description: "When Eggson first touches a machine, he hits the side of it with his cane, giving it 20% of total completion. This can only be used once per machine per player but works on multiple machines on the same floor.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "finishMachines",
            params: { count: 30 },
        },
        {
            type: "pickCapsules",
            params: { count: 30 },
        },
        {
            type: "surviveFloors",
            params: { count: 25 },
        },
        {
            type: "usePassiveAbility",
            params: { count: 80 },
        },
        {
            type: "pickItems",
            params: { count: 35 },
        },
        {
            type: "travel",
            params: { meters: 50000 },
        },
    ],
    requirements: [
        {
            type: "easter",
            params: { count: 300 },
        },
    ],
};

export default eggson;
