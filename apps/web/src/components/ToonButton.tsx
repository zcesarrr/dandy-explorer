import type { ToonCategory, ToonRarity } from "../types/toons";
import ShinyButton, { type ShinyButtonProps } from "./customs/ShinyButton";
import ToonImage from "./ToonImage";

type ToonButtonProps = {
    buttonProps: ShinyButtonProps
    name: string;
    iconUrl: string;
    rarity: ToonRarity,
    category: ToonCategory
};

export default function ToonButton({ buttonProps, name, iconUrl, rarity, category }: ToonButtonProps) {
    return (
        <ShinyButton 
            className="p-2"
            {...buttonProps}
        >
            <ToonImage
                className="rounded-lg"
                iconUrl={iconUrl}
                name={name}
                rarity={rarity}
                category={category}
            />
            <p className="font-fredoka text-white text-stroke text-center leading-none text-lg">{name}</p>
        </ShinyButton>
    );
}
