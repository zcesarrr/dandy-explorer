import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/poppy.webp";

const poppy: Toon = {
    slug: "poppy",
    name: "Poppy",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 3, 3, 3, 3, 3],
    abilities: [
        {
            name: "Panic Pop",
            description: "This Toon receives a 50% Speed boost for 3 seconds when attacked.",
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
            type: "pickItems",
            params: { count: 30 },
        },
        {
            type: "surviveFloors",
            params: { count: 25 },
        },
        {
            type: "useItems",
            params: { count: 30 },
        },
        {
            type: "travel",
            params: { meters: 50000 },
        },
    ],
    requirements: [
        {
            type: "custom",
            params: { text: "Obtained for free when first starting the game" },
        },
        {
            type: "custom",
            params: { text: "Or 100 Ichor if Boxten was chosen instead" },
        },
    ],
};

export default poppy;
