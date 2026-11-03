import type { Toon } from "../types/toons";

const TOONS = [
    {
        slug: "yatta",
        name: "Yatta",
        iconUrl: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/7/75/Yatta_Render.png",
        rarity: "normal",
        category: "none",
        stats: [3, 3, 4, 1, 2, 5],
        abilities: [
            {
                name: "Piñata Party",
                description: "This Toon drops 2 random candy items after completing a machine, and 4 random candy items when injured.",
                type: "passive",
            },
        ],
        quests: [
            "Finish 85 Machines!",
            "Pick up 50 Research Capsules!",
            "Pick up 120 Items!",
            "Survive 20 Floors with Looey Render Looey in your run!",
            "Travel 45000 Meters!",
            "Use 120 Items!",
        ],
        requirements: [
            {
                type: "ichor",
                label: "2000 Ichor",
            },
            {
                type: "toonsOwning",
                label: "Own 15 or more Toons",
            },
            {
                type: "research",
                label: "50% Research on Twisted Yatta",
            },
        ],
    },
] satisfies Toon[];

export default TOONS;
