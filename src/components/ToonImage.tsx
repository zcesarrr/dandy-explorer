import type { Toon } from "../types/toons.types";
import { TOON_BACKGROUND_COLOR } from "../constants/styles.constants";

type ToonImageProps = {
    className?: string;
    toon: Toon;
};

export default function ToonImage({ className = "", toon }: ToonImageProps) {
    return (
        <img
            src={toon.iconUrl}
            alt=""
            className={className}
            loading="lazy"
            style={{
                background: TOON_BACKGROUND_COLOR[toon.rarity][toon.category],
            }}
        />
    );
}
