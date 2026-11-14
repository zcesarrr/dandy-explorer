import { getSpecialBackgroundColor } from "../../../utils/styles.utils";
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
                background: getSpecialBackgroundColor(item.rarity, item.category),
            }}
        />
    );
}
