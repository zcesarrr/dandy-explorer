import type { Rarity } from "../../../types/rarity.types";

export type Twisted = {
    slug: string;
    name: string;
    rarity: Rarity;
    iconUrl: string;
    render: {
        url: string;
        offsetX?: string;
        offsetY?: string;
    };
    description: string;
    trinketReward: string;
};
