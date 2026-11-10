import type { Toon } from "../../types/toons.types";
import icon from "../../assets/toons/connie.webp";

const connie: Toon = {
    slug: "connie",
    name: "Connie",
    iconUrl: icon,
    rarity: "normal",
    category: "none",
    stats: [3, 2, 1, 3, 5, 4],
    abilities: [
        {
            name: "Haunting Escape",
            description: "This Toon uses her ability to become invisible for 5 seconds. Twisteds will not be able to notice her during this time, unless she is up against a Lethal Twisted which will still see her. Has a cooldown of 50.",
            type: "active",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 100 },
        },
        {
            type: "surviveFloors",
            params: { count: 50 },
        },
        {
            type: "travel",
            params: { meters: 55000 },
        },
        {
            type: "finishMachines",
            params: { count: 50 },
        },
        {
            type: "custom",
            params: { text: "Survive 5 Floors with 2 other Players in your round!" },
        },
        {
            type: "useItems",
            params: { count: 50 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 2000 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "Twisted Connie" },
        },
    ],
};

export default connie;
