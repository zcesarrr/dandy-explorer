import { SPECIAL_BACKGROUND_COLORS } from "../../../constants/styles.constants";
import type { Toon } from "../types/toons.types";

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
                background: SPECIAL_BACKGROUND_COLORS[item.rarity][item.category],
            }}
        />
    );
}
