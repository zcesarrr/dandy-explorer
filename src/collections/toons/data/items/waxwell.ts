import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/waxwell.webp";

const waxwell: Toon = {
    slug: "waxwell",
    name: "Waxwell",
    iconUrl: icon,
    rarity: "common",
    category: "none",
    stats: [3, 5, 5, 1, 2, 2],
    abilities: [
        {
            name: "Ignite",
            description: "This Toon ignites his flame, removing his Tired II debuff for 10 seconds. While ignited, he leaves a flame trail while moving. Toons who touch the trail gain the Ignited buff, causing their ability cooldowns to recover twice as fast for 5 seconds. Does not affect any Waxwell, and cannot stack. Has a cooldown of 60.",
            type: "active",
            icon: "ignite",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 80 },
        },
        {
            type: "blackouts",
            params: { count: 8 },
        },
        {
            type: "custom",
            params: { text: "Complete 60 Duo Machines with another Player!" },
        },
        {
            type: "custom",
            params: { text: "Complete Floor 10 with the Cherished Blanket equipped!" },
        },
        {
            type: "travel",
            params: { meters: 111000 },
        },
        {
            type: "useInstructions",
            params: { count: 30 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 3500 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "Twisted Waxwell" },
        },
        {
            type: "quests",
            params: { count: 3, toon: "Goob" },
        },
    ],
};

export default waxwell;
