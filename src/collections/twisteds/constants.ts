import type { TwistedRarity } from "./types/twisteds.types";

export const TWISTED_RARITY_COLORS: Record<TwistedRarity, string> = {
    common: "#fff",
    uncommon: "#aba9aa",
    rare: "#020201",
    main: "linear-gradient(-90deg,rgba(132, 84, 208, 1) 0%, rgba(91, 142, 206, 1) 20%, rgba(95, 206, 96, 1) 40%, rgba(207, 205, 100, 1) 60%, rgba(209, 146, 89, 1) 80%, rgba(211, 93, 97, 1) 100%)",
    lethal: "linear-gradient(90deg,rgba(227, 78, 79, 1) 0%, rgba(187, 50, 50, 1) 100%)",
};
