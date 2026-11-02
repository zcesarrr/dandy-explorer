export type ToonRarity = "normal" | "main";
export type ToonCategory = "none" | "halloween" | "holiday" | "easter";

export type Toon = {
    id: number;
    name: string;
    icon_url: string;
    rarity: ToonRarity;
    category: ToonCategory;
};
