import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/dandy.webp";

const dandy: Toon = {
    slug: "dandy",
    name: "Dandy",
    iconUrl: icon,
    rarity: "lethal",
    category: "none",
    stats: [3, 5, 5, 5, 5, 5],
    abilities: [
        {
            name: "Dandy's World",
            description: "The star of the show.",
            type: "passive",
        },
    ],
    requirements: [
        {
            type: "custom",
            params: { text: "Playable with Dandy Mask on Halloween's Haunted Gala event" },
        },
        {
            type: "custom",
            params: { text: "Only playable to developers"},
        },
    ],
};

export default dandy;
