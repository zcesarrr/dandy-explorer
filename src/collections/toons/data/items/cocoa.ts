import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/cocoa.webp";

const cocoa: Toon = {
    slug: "cocoa",
    name: "Cocoa",
    iconUrl: icon,
    rarity: "common",
    category: "easter",
    stats: [3, 3, 4, 2, 4, 2],
    abilities: [
        {
            name: "Bonbon",
            description: "This Toon places a Bonbon candy item that can be picked up and used by anyone. When used, the Bonbon boosts extraction speed (+50%) and movement speed (+25%) for 10 seconds. Has a cooldown of 40.",
            type: "active",
            icon: "bonbon",
        },
    ],
    quests: [
        {
            type: "finishMachines",
            params: { count: 65 },
        },
        {
            type: "pickItems",
            params: { count: 135 },
        },
        {
            type: "surviveFloorsWith",
            params: { count: 20, toons: ["yatta"] },
        },
        {
            type: "travel",
            params: { meters: 90000 },
        },
        {
            type: "useItems",
            params: { count: 120 },
        },
        {
            type: "custom",
            params: { text: "Use 35 BonBons!" },
        },
    ],
    requirements: [
        {
            type: "easter",
            params: { count: 1500 },
        },
        {
            type: "researchAny",
            params: { researchCount: 100, twistedsCount: 5 },
        },
    ],
};

export default cocoa;
