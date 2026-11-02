import type { Toon } from "@dandy-explorer/shared";
import ShinyButton, { type ShinyButtonProps } from "./customs/ShinyButton";
import ToonImage from "./ToonImage";

type ToonButtonProps = {
    buttonProps: ShinyButtonProps
    toon: Toon;
};

export default function ToonButton({ buttonProps, toon }: ToonButtonProps) {
    return (
        <ShinyButton 
            className="p-2"
            {...buttonProps}
        >
            <ToonImage
                className="rounded-lg"
                toon={toon}
            />
            <p className="font-fredoka text-white text-stroke text-center leading-none text-lg">{toon.name}</p>
        </ShinyButton>
    );
}
