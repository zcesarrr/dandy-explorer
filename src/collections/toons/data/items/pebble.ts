import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/pebble.webp";

const pebble: Toon = {
    slug: "pebble",
    name: "Pebble",
    iconUrl: icon,
    rarity: "main",
    category: "none",
    stats: [2, 3, 5, 4, 3, 1],
    abilities: [
        {
            name: "Speak!",
            description: "This Toon can bark loudly, drastically decreasing Stealth to a value of -40 and alerting any Twisteds nearby to his location. Has a cooldown of 60.",
            type: "active",
            icon: "speak",
        },
        {
            name: "Fetch!",
            description: "This Toon can sniff out items, causing them to be highlighted when in the Toon's vicinity.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 145 },
        },
        {
            type: "encounterTwisteds",
            params: { count: 80 },
        },
        {
            type: "pickItems",
            params: { count: 200 },
        },
        {
            type: "reachFloor",
            params: { count: 20 },
        },
        {
            type: "surviveFloors",
            params: { count: 75 },
        },
        {
            type: "travel",
            params: { meters: 175000 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 3750 },
        },
        {
            type: "research",
            params: { count: 100, twisted: "twisted-pebble" },
        },
        {
            type: "mastery",
            params: { toon: "toodles" },
        },
    ],
};

export default pebble;
