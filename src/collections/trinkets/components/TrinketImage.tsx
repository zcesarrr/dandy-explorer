import { SPECIAL_BACKGROUND_COLORS } from "../../../constants/styles.constants";
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
                background: SPECIAL_BACKGROUND_COLORS[
                    item.requirement.type === "research" ? "main"  : "common"
                ][item.event],
            }}
        />
    );
}
