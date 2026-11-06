import type { Toon } from "../types/toons";
import { TOON_BACKGROUND_COLOR } from "../constants/styles";

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
                background: TOON_BACKGROUND_COLOR[toon.rarity][toon.category],
            }}
        />
    );
}
