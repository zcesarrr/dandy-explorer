import { getSpecialBackgroundColor } from "../../../utils/styles.utils";
import type { Trinket } from "../types/trinkets.types";

type TrinketImageProps = {
    className?: string;
    item: Trinket;
};

export default function TrinketImage({ className = "", item }: TrinketImageProps) {
    return (
        <img
            src={item.iconUrl}
            alt=""
            className={className}
            loading="lazy"
            style={{
                background: getSpecialBackgroundColor(item.rarity, item.event),
            }}
        />
    );
}
