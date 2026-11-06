import type { Toon } from "../../types/toons";
import icon from "../../assets/toons/astro.webp";

const astro: Toon = {
    slug: "astro",
    name: "Astro",
    iconUrl: icon,
    rarity: "main",
    category: "none",
    stats: [2, 2, 3, 2, 5, 4],
    abilities: [
        {
            name: "Nap Time",
            description: "Hold to release a pulse that fully restores Stamina to nearby Toons and increases their Stamina regeneration to 50% for 10s. Restores the User's Stamina 20% for each Toon reached. Collect Star Pillows to grow its range, carrying up to 10. Nap Time spends up to 5 pillows when used. Has a cooldown of 55.",
            type: "active",
        },
        {
            name: "Well Rested",
            description: "This Toon regenerates Stamina 50% faster, and can see Toons below 50% Stamina around the map. And can tell when those Toons are being chased by a Twisted.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 100 },
        },
        {
            type: "dandysShop",
            params: { count: 25 },
        },
        {
            type: "travel",
            params: { meters: 150000 },
        },
        {
            type: "blackouts",
            params: { count: 12 },
        },
        {
            type: "pickItems",
            params: { count: 125 },
        },
        {
            type: "useItems",
            params: { count: 125 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 5000 },
        },
        {
            type: "research",
            params: { count: 100, twisted: "Twisted Astro" },
        },
        {
            type: "encounter",
            params: { twisted: "Twisted Dandy" },
        },
    ],
};

export default astro;
