import { getSpecialBackgroundColor } from "../../../utils/styles.utils";
import type { Toon } from "../types/toons.types";

type ToonImageProps = {
    className?: string;
    item: Toon;
    loading?: "lazy" | "eager";
};

export default function ToonImage({ className = "", item, loading = "lazy" }: ToonImageProps) {
    return (
        <img
            src={item.iconUrl}
            alt=""
            className={className}
            loading={loading}
            style={{
                background: getSpecialBackgroundColor(item.rarity, item.category),
            }}
        />
    );
}
