import type { ToonCategory, ToonRarity } from "../types/toons.types";

const blackOverlay = "linear-gradient(#00000050, #00000050)";
const mainRarityBackground =
    "linear-gradient(0deg, #8454d0, #5b8ece, #5fce60, #cfcd64, #d19259, #d35d61)";
const categoryBackground = {
    easter: "linear-gradient(0deg, #71e1f5, #fad9a5, #ffa6c9)",
    halloween: "linear-gradient(0deg, #f27d16 0%, #f27c87 50%, #9b55e0 100%)",
    holiday: "linear-gradient(0deg, #4eed69 0%, #f7e186 50%, #f26255 100%)",
} satisfies Record<Exclude<ToonCategory, "none">, string>;

export const TOON_BACKGROUND_COLOR = {
    normal: {
        none: blackOverlay,
        easter: `${blackOverlay}, ${categoryBackground.easter}`,
        halloween: `${blackOverlay}, ${categoryBackground.halloween}`,
        holiday: `${blackOverlay}, ${categoryBackground.holiday}`,
    },
    main: {
        none: `${blackOverlay}, ${mainRarityBackground}`,
        easter: `${blackOverlay}, ${mainRarityBackground} left / 50% 100% no-repeat, ${categoryBackground.easter} right / 50% 100% no-repeat`,
        halloween: `${blackOverlay}, ${mainRarityBackground} left / 50% 100% no-repeat, ${categoryBackground.halloween} right / 50% 100% no-repeat`,
        holiday: `${blackOverlay}, ${mainRarityBackground} left / 50% 100% no-repeat, ${categoryBackground.holiday} right / 50% 100% no-repeat`,
    },
} satisfies Record<ToonRarity, Record<ToonCategory, string>>;
