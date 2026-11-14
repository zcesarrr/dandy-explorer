import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/flutter.webp";

const flutter: Toon = {
    slug: "flutter",
    name: "Flutter",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 2, 4, 4, 3, 2],
    abilities: [
        {
            name: "Floaty Dash",
            description: "This Toon can dash forward, drastically increasing her Movement Speed for 0.75 seconds. Has a cooldown of 45 seconds.",
            type: "active",
            icon: "floatyDash",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 100 },
        },
        {
            type: "reachFloor",
            params: { count: 12 },
        },
        {
            type: "travel",
            params: { meters: 90000 },
        },
        {
            type: "pickItems",
            params: { count: 60 },
        },
        {
            type: "surviveFloors",
            params: { count: 45 },
        },
        {
            type: "useItems",
            params: { count: 60 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 1300 },
        },
        {
            type: "research",
            params: { count: 100, twisted: "twisted-flutter" },
        },
    ],
};

export default flutter;
