import type { ToonDetailed } from "@dandy-explorer/shared";

const toons: ToonDetailed[] = [
    {
        id: 0,
        name: "Yatta",
        icon_url: "https://static.wikia.nocookie.net/dandys-world-robloxhorror/images/7/75/Yatta_Render.png",
        rarity: "normal",
        category: "none",
        stats: [
            { id: 0, toon_id: 0, index: 0, value: 3 },
            { id: 1, toon_id: 0, index: 1, value: 3 },
            { id: 2, toon_id: 0, index: 2, value: 4 },
            { id: 3, toon_id: 0, index: 3, value: 1 },
            { id: 4, toon_id: 0, index: 4, value: 2 },
            { id: 5, toon_id: 0, index: 5, value: 5 },
        ],
        abilities: [
            {
                id: 0,
                toon_id: 0,
                name: "Piñata Party",
                description: "This Toon drops 2 random candy items after completing a machine, and 4 random candy items when injured.",
                type: "passive",
            },
        ],
        quests: [
            {
                id: 0,
                toon_id: 0,
                content: "Finish 85 Machines!",
            },
            {
                id: 1,
                toon_id: 0,
                content: "Pick up 50 Research Capsules!",
            },
            {
                id: 2,
                toon_id: 0,
                content: "Pick up 120 Items!",
            },
            {
                id: 3,
                toon_id: 0,
                content: "Survive 20 Floors with Looey Render Looey in your run!",
            },
            {
                id: 4,
                toon_id: 0,
                content: "Travel 45000 Meters!",
            },
            {
                id: 5,
                toon_id: 0,
                content: "Use 120 Items!",
            },
        ],
        requirements: [
            {
                id: 0,
                toon_id: 0,
                type: "ichor",
                label: "2000 Ichor",
            },
            {
                id: 1,
                toon_id: 0,
                type: "toonsOwning",
                label: "Own 15 or more Toons",
            },
            {
                id: 2,
                toon_id: 0,
                type: "research",
                label: "50% Research on Twisted Yatta",
            },
        ],
    }
];

export default toons;
