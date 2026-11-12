import type { Toon } from "../types/toons.types";
import { TOON_BACKGROUND_COLOR } from "../constants/styles.constants";

type ToonImageProps = {
    className?: string;
    item: Toon;
};

export default function ToonImage({ className = "", item }: ToonImageProps) {
    return (
        <img
            src={item.iconUrl}
            alt=""
            className={className}
            loading="lazy"
            style={{
                background: TOON_BACKGROUND_COLOR[item.rarity][item.category],
            }}
        />
    );
}
