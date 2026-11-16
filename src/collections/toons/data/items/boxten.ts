import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/boxten.webp";

const boxten: Toon = {
    slug: "boxten",
    name: "Boxten",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 3, 3, 3, 3, 3],
    abilities: [
        {
            name: "Wind-Up",
            description: "This Toon gains 6% more Extraction Speed for every alive Toon in the round. Maxes at 48%.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "finishMachines",
            params: { count: 50 },
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
            type: "pickItems",
            params: { count: 30 },
        },
        {
            type: "surviveFloorsWithOther",
            params: { count: 1, playersCount: 7 },
        },
        {
            type: "useItems",
            params: { count: 30 },
        },
    ],
    requirements: [
        {
            type: "custom",
            params: { text: "Obtained for free when first starting the game" },
        },
        {
            type: "custom",
            params: { text: "Or 100 Ichor if Poppy was chosen instead" },
        },
    ],
};

export default boxten;
