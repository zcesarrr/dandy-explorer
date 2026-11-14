import type { EventTheme, Rarity } from "../types/rarity.types";

const blackOverlay = "linear-gradient(#00000050, #00000050)";

export function getRarityColor(rarity: Rarity, deg: number): string {
    if (rarity === "uncommon") return "#aba9aa";
    if (rarity === "rare") return "#020201";

    if (rarity === "main") {
        return `linear-gradient(${deg}deg, #8454d0, #5b8ece, #5fce60, #cfcd64, #d19259, #d35d61)`;
    }

    if (rarity === "lethal") {
        return `linear-gradient(${deg}deg,#c22828, #f68686)`;
    }

    return "#fff";
}

export function getEventColor(event: EventTheme, deg: number): string | undefined {
    if (event === "easter") {
        return `linear-gradient(${deg}deg, #71e1f5, #fad9a5, #ffa6c9)`;
    }

    if (event === "halloween") {
        return `linear-gradient(${deg}deg, #f27d16, #f27c87, #9b55e0)`;
    }

    if (event === "holiday") {
        return `linear-gradient(${deg}deg, #4eed69, #f7e186, #f26255)`;
    }

    return undefined;
}

export function getSpecialBackgroundColor(rarity: Rarity, event: EventTheme): string {
    const rarityBackground = getRarityColor(rarity, 0);
    const isSpecialRarity = ["main", "lethal"].includes(rarity);

    if (event === "none") {
        return isSpecialRarity ? `${blackOverlay}, ${rarityBackground}` : blackOverlay;
    }

    const eventBackground = getEventColor(event, 0);

    return isSpecialRarity
        ? `${blackOverlay}, ${rarityBackground} left / 50% 100% no-repeat, ${eventBackground} right / 50% 100% no-repeat`
        : `${blackOverlay}, ${eventBackground}`;
}
