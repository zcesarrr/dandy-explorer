import type { Toon } from "../../types/toons";
import icon from "../../assets/toons/brusha.webp";

const brusha: Toon = {
    slug: "brusha",
    name: "Brusha",
    iconUrl: icon,
    rarity: "normal",
    category: "none",
    stats: [3, 4, 3, 3, 2, 3],
    abilities: [
        {
            name: "Artistic Inspiration",
            description: "This Toon can paint her artwork on nearby machines, inspiring extracting Toons with 25% faster Extraction speed and a 15% higher Skill Check chance. Has a cooldown of 15.",
            type: "active",
        },
    ],
    quests: [
        {
            type: "useActiveAbility",
            params: { count: 100 },
        },
        {
            type: "finishMachines",
            params: { count: 65 },
        },
        {
            type: "surviveFloorsWith",
            params: { count: 5, toons: ["Tisha"] },
        },
        {
            type: "dandysShop",
            params: { count: 20 },
        },
        {
            type: "surviveFloors",
            params: { count: 25 },
        },
        {
            type: "travel",
            params: { meters: 40000 },
        },
    ],
    requirements: [
        {
            type: "ichor",
            params: { count: 1250 },
        },
        {
            type: "research",
            params: { count: 50, twisted: "Twisted Brusha" },
        },
    ],
};

export default brusha;
