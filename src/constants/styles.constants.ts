import type { EventTheme, Rarity } from "../types/rarity.types";

const blackOverlay = "linear-gradient(#00000050, #00000050)";

function rarityColor(rarity: Rarity, deg: number): string | undefined {
    if (rarity === "main") {
        return `linear-gradient(${deg}deg, #8454d0, #5b8ece, #5fce60, #cfcd64, #d19259, #d35d61)`;
    }

    if (rarity === "lethal") {
        return `linear-gradient(${deg}deg,#c22828, #f68686)`;
    }

    return undefined;
}

function eventColor(event: EventTheme, deg: number): string | undefined {
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

export function specialBackgroundColor(rarity: Rarity, event: EventTheme): string {
    const rarityBackground = rarityColor(rarity, 0);

    if (event === "none") {
        return rarityBackground ? `${blackOverlay}, ${rarityBackground}` : blackOverlay;
    }

    const eventBackground = eventColor(event, 0);

    return rarityBackground
        ? `${blackOverlay}, ${rarityBackground} left / 50% 100% no-repeat, ${eventBackground} right / 50% 100% no-repeat`
        : `${blackOverlay}, ${eventBackground}`;
}

export const RARITY_COLORS: Record<Rarity, string> = {
    common: "#fff",
    uncommon: "#aba9aa",
    rare: "#020201",
    main: rarityColor("main", -90)!,
    lethal: rarityColor("lethal", -90)!,
};
