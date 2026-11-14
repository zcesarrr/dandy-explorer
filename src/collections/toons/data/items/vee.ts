import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/vee.webp";

const vee: Toon = {
    slug: "vee",
    name: "Vee",
    iconUrl: icon,
    rarity: "main",
    category: "none",
    stats: [2, 4, 2, 3, 2, 5],
    abilities: [
        {
            name: "Mic Check",
            description: "This Toon can highlight all Twisteds and Machines on the Floor for 5 seconds. Has a Cooldown of 50.",
            type: "active",
            icon: "micCheck",
        },
        {
            name: "Camera Hijack",
            description: "This Toon will have the 2 nearest uncompleted Machines highlighted for them.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 150 },
        },
        {
            type: "finishMachines",
            params: { count: 150 },
        },
        {
            type: "pickItems",
            params: { count: 100 },
        },
        {
            type: "blackouts",
            params: { count: 12 },
        },
        {
            type: "encounterTwisteds",
            params: { count: 75 },
        },
        {
            type: "travel",
            params: { meters: 150000 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 4500 },
        },
        {
            type: "research",
            params: { count: 100, twisted: "twisted-vee" },
        },
        {
            type: "mastery",
            params: { toon: "brigthney" },
        },
    ],
};

export default vee;
