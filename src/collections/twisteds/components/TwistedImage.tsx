import { getSpecialBackgroundColor } from "../../../utils/styles.utils";
import type { Twisted } from "../types/twisteds.types";

type TwistedImageProps = {
    className?: string;
    item: Twisted;
};

export default function TwistedImage({ className = "", item }: TwistedImageProps) {
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
