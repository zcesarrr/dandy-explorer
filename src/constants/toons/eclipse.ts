import type { Toon } from "../../types/toons.types";
import icon from "../../assets/toons/eclipse.webp";

const eclipse: Toon = {
    slug: "eclipse",
    name: "Eclipse",
    iconUrl: icon,
    rarity: "normal",
    category: "halloween",
    stats: [3, 3, 4, 3, 2, 3],
    abilities: [
        {
            name: "Total Eclipse",
            description: "This Toon transforms into a werewolf in blackouts, giving off a glow, gaining 2 Stamina Stars, a 20% Movement Speed boost, and briefly highlighting all Twisteds on the floor.",
            type: "passive",
        },
    ],
    quests: [
        {
            type: "blackouts",
            params: { count: 15 },
        },
        {
            type: "surviveFloors",
            params: { count: 50 },
        },
        {
            type: "travel",
            params: { meters: 100000 },
        },
        {
            type: "encounterTwisteds",
            params: { count: 75 },
        },
        {
            type: "custom",
            params: { text: "Survive 3 Floors with 7 other Players in your round!" },
        },
        {
            type: "useItems",
            params: { count: 80 },
        },
    ],
    requirements: [
        {
            type: "pumpkin",
            params: { count: 1500 },
        },
        {
            type: "toonsOwning",
            params: { count: 5 },
        },
    ],
};

export default eclipse;
