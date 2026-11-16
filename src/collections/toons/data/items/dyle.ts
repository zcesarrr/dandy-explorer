import type { Toon } from "../../types/toons.types";
import icon from "../../../../assets/toons/dyle.webp";

const dyle: Toon = {
    slug: "dyle",
    name: "Dyle",
    iconUrl: icon,
    rarity: "lethal",
    category: "none",
    stats: [3, 5, 5, 5, 5, 5],
    abilities: [
        {
            name: "Dyle's World",
            description: "The star of the show.",
            type: "passive",
        },
    ],
    requirements: [
        {
            type: "custom",
            params: { text: "Only playable to developers"},
        },
    ],
};

export default dyle;
