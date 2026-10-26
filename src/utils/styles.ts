import type { ToonRarity } from "../types/toons";

export function rarityBackgroundColor(rarity: ToonRarity) {
    if (rarity == "normal") return "#00000080";

    return "linear-gradient(#00000050,#00000050), linear-gradient(0deg,rgba(132, 84, 208, 1) 0%, rgba(91, 142, 206, 1) 20%, rgba(95, 206, 96, 1) 40%, rgba(207, 205, 100, 1) 60%, rgba(209, 146, 89, 1) 80%, rgba(211, 93, 97, 1) 100%)";
}
