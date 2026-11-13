import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/brightney.webp";

const brightney: Toon = {
    slug: "brightney",
    name: "Brightney",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 3, 3, 4, 1, 4],
    abilities: [
        {
            name: "Night Light",
            description: "This Toon can shine lights on Twisteds to make them visible during Blackouts for 8 seconds. Has a Cooldown of 45.",
            type: "active",
            icon: "nightLight",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 50 },
        },
        {
            type: "finishMachines",
            params: { count: 50 },
        },
        {
            type: "travel",
            params: { meters: 80000 },
        },
        {
            type: "blackouts",
            params: { count: 15 },
        },
        {
            type: "pickItems",
            params: { count: 60 },
        },
        {
            type: "useItems",
            params: { count: 60 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 1250 },
        },
        {
            type: "experienceBlackouts",
            params: { count: 5 },
        },
    ],
};

export default brightney;
