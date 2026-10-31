import type { ToonCategory, ToonRarity } from "../types/toons";
import { toonBackgroundColor } from "../utils/styles";

type ToonImageProps = {
    className?: string;
    name: string;
    iconUrl: string;
    rarity: ToonRarity;
    category: ToonCategory;
};

export default function ToonImage({ className = "", name, iconUrl, rarity, category }: ToonImageProps) {
    return (
        <img
            src={iconUrl}
            alt={`${name} icon`}
            className={className}
            style={{
                background: toonBackgroundColor(rarity, category),
            }}
        />
    );
}
