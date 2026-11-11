import type { Toon } from "../../types/toons.types";
import icon from "../../assets/toons/rodger.webp";

const rodger: Toon = {
    slug: "rodger",
    name: "Rodger",
    iconUrl: icon,
    rarity: "normal",
    category: "none",
    stats: [3, 3, 2, 3, 3, 4],
    abilities: [
        {
            name: "Detective",
            description: "This Toon gains twice the amount of Research from Capsules and encountering Twisteds.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "collectResearch",
            params: { count: 1000 },
        },
        {
            type: "encounterTwisteds",
            params: { count: 100 },
        },
        {
            type: "pickCapsules",
            params: { count: 125 },
        },
        {
            type: "pickItems",
            params: { count: 60 },
        },
        {
            type: "travel",
            params: { meters: 75000 },
        },
        {
            type: "useItems",
            params: { count: 60 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 1000 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "any Twisted" },
        },
    ],
};

export default rodger;
