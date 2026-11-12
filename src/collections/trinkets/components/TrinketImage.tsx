import { TOON_BACKGROUND_COLOR } from "../../../constants/styles.constants";
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
                background: TOON_BACKGROUND_COLOR[
                    item.requirement.type === "research" ? "main"  : "normal"
                ][item.event],
            }}
        />
    );
}
