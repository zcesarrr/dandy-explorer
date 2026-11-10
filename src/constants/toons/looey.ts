import type { Toon } from "../../types/toons.types";
import icon from "../../assets/toons/looey.webp";

const looey: Toon = {
    slug: "looey",
    name: "Looey",
    iconUrl: icon,
    rarity: "normal",
    category: "none",
    stats: [3, 4, 3, 3, 2, 3],
    abilities: [
        {
            name: "Heart of Helium",
            description: "For each missing heart this Toon has, they gain 20% more walk and run speed multiplier. At one heart, this Toon gains 40% more speed multiplier. His speed is reduced back when healed.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "finishMachines",
            params: { count: 30 },
        },
        {
            type: "usePassiveAbility",
            params: { count: 30 },
        },
        {
            type: "pickCapsules",
            params: { count: 50 },
        },
        {
            type: "pickItems",
            params: { count: 45 },
        },
        {
            type: "surviveFloors",
            params: { count: 30 },
        },
        {
            type: "travel",
            params: { meters: 80000 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 1000 },
        },
        {
            type: "mastery",
            params: { toon: "Poppy" },
        },
    ],
};

export default looey;
