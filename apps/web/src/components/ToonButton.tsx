import type { ToonRarity } from "../types/toons";
import { rarityBackgroundColor } from "../utils/styles";
import ShinyButton, { type ShinyButtonProps } from "./customs/ShinyButton";

type ToonButtonProps = {
    buttonProps: ShinyButtonProps
    name: string;
    iconUrl: string;
    rarity: ToonRarity,
};

export default function ToonButton({ buttonProps, name, iconUrl, rarity }: ToonButtonProps) {
    return (
        <ShinyButton 
            className="p-2"
            {...buttonProps}
        >
            <img
                src={iconUrl}
                className="rounded-lg"
                style={{
                    background: rarityBackgroundColor(rarity),
                }}
                alt={`${name} Icon`}
            />
            <p className="font-fredoka text-white text-stroke text-center leading-none text-lg">{name}</p>
        </ShinyButton>
    );
}
