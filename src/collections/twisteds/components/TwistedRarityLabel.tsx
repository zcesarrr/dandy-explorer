import GradientLabel from "../../../components/GradientLabel";
import type { Rarity } from "../../../types/rarity.types";
import { getRarityColor } from "../../../utils/styles.utils";

type TwistedRarityLabelProps = {
    className?: string;
    rarity: Rarity,
    label: string;
};

export default function TwistedRarityLabel({
    className,
    rarity,
    label
}: TwistedRarityLabelProps) {
    const hasRarityGradient = rarity === "main" || rarity === "lethal";
    const color = getRarityColor(rarity, -90);

    if (hasRarityGradient) return (
        <GradientLabel className={className ?? ""} gradientColor={color} label={label} />
    )

    return (
        <p
            className={`${className} text-stroke`}
            style={{
                textShadow: rarity === "rare" ? `
                    1px 1px 0 white,
                    -1px -1px 0 white,
                    1px -1px 0 white,
                    -1px 1px 0 white
                ` : "",
                color: color
            }}
        >
            {label}
        </p>
    );
}
