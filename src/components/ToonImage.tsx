import type { Toon } from "../types/toons";
import { toonBackgroundColor } from "../utils/styles";

type ToonImageProps = {
    className?: string;
    toon: Toon;
};

export default function ToonImage({ className = "", toon }: ToonImageProps) {
    return (
        <img
            src={toon.iconUrl}
            alt={`${toon.name} icon`}
            className={className}
            style={{
                background: toonBackgroundColor(toon.rarity, toon.category),
            }}
        />
    );
}
