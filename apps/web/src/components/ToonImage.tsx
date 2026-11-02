import type { Toon } from "@dandy-explorer/shared";
import { toonBackgroundColor } from "../utils/styles";

type ToonImageProps = {
    className?: string;
    toon: Toon;
};

export default function ToonImage({ className = "", toon }: ToonImageProps) {
    return (
        <img
            src={toon.icon_url}
            alt={`${toon.name} icon`}
            className={className}
            style={{
                background: toonBackgroundColor(toon.rarity, toon.category),
            }}
        />
    );
}
