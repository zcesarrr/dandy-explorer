import { RARITY_COLORS } from "../../../constants/styles.constants";
import type { Rarity } from "../../../types/rarity.types";

type TwistedRarityLabelProps = {
    className?: string;
    "data-long-name"?: string | undefined;
    rarity: Rarity,
    label: string;
};

export default function TwistedRarityLabel({
    className,
    "data-long-name": dataLongName = undefined,
    rarity,
    label
}: TwistedRarityLabelProps) {
    const hasRarityGradient = rarity === "main" || rarity === "lethal";
    const rarityColor = RARITY_COLORS[rarity];

    return (
        <p 
            data-long-name={dataLongName}
            className={`${className ?? ""} leading-none text-shadow-none`}
            style={{
                textShadow: rarity === "rare" ? `
                1px 1px 0 white,
                -1px -1px 0 white,
                    1px -1px 0 white,
                    -1px 1px 0 white
                    ` : "",
                backgroundImage: hasRarityGradient ? rarityColor : "",
                color: hasRarityGradient ? "transparent" : rarityColor,
                backgroundClip: hasRarityGradient ? "text" : "",
                WebkitBackgroundClip: hasRarityGradient ? "text" : "",
                WebkitTextFillColor: hasRarityGradient ? "transparent" : "",
                WebkitTextStroke: hasRarityGradient ? "0 transparent" : "",
            }}
        >
            {label}
        </p>
    );
}
