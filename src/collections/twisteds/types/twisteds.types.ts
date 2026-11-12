export const TWISTED_RARITY_LABELS = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    main: "Main Character",
    lethal: "Lethal",
};

export type TwistedRarity = keyof typeof TWISTED_RARITY_LABELS;

export type Twisted = {
    slug: string;
    name: string;
    rarity: TwistedRarity;
    iconUrl: string;
    render: {
        url: string;
        offsetX?: string;
        offsetY?: string;
    };
    description: string;
    trinketReward: string;
};
