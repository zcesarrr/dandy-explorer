import type { ToonCategory, ToonRarity } from "@dandy-explorer/shared";

const blackOverlay = "linear-gradient(#00000050,#00000050)";

export function rarityColor(rarity: ToonRarity, side: "left" | "right" = "left", length: string = "100%") {
    if (rarity === "normal") return "#00000080";

    return `
        linear-gradient(0deg,
            rgba(132, 84, 208, 1),
            rgba(91, 142, 206, 1),
            rgba(95, 206, 96, 1),
            rgba(207, 205, 100, 1),
            rgba(209, 146, 89, 1),
            rgba(211, 93, 97, 1)
        ) ${side} / ${length} 100% no-repeat
    `;
}

const categoryColors = {
    none: "",
    easter: "linear-gradient(0deg,rgba(113, 225, 245, 1), rgba(250, 217, 165, 1), rgba(255, 166, 201, 1))",
    halloween: "linear-gradient(0deg,rgba(242, 125, 22, 1) 0%, rgba(242, 124, 135, 1) 50%, rgba(155, 85, 224, 1) 100%)",
    holiday: "linear-gradient(0deg,rgba(78, 237, 105, 1) 0%, rgba(247, 225, 134, 1) 50%, rgba(242, 98, 85, 1) 100%)",
} satisfies Record<ToonCategory, string>;

export function categoryColor(category: ToonCategory, side: "left" | "right" = "left", length: string = "100%") {
    return `${categoryColors[category]} ${side} / ${length} 100% no-repeat`;
}

export function toonBackgroundColor(rarity: ToonRarity, category: ToonCategory) {
    if (rarity === "normal") {
        return `${blackOverlay}, ${categoryColor(category)}`;
    }

    if (category === "none") {
        return `${blackOverlay}, ${rarityColor(rarity)}`;
    }

    return `
        ${blackOverlay},
        ${rarityColor("main", "left", "50%")},
        ${categoryColor(category, "right", "50%")}
    `;
}
