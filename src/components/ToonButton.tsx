import { useIsDesktop } from "../hooks/useIsDesktop";
import type { Toon } from "../types/toons";
import ShinyButton, { type ShinyButtonProps } from "./customs/ShinyButton";
import ToonImage from "./ToonImage";

type ToonButtonProps = {
    buttonProps: ShinyButtonProps
    toon: Toon;
};

export default function ToonButton({ buttonProps, toon }: ToonButtonProps) {
    const isDesktop = useIsDesktop();
    const size = 18 - (toon.name.length > 10 ? isDesktop ? 3 : 7 : 0);

    return (
        <ShinyButton 
            className="p-2"
            {...buttonProps}
        >
            <ToonImage
                className="rounded-lg w-full aspect-square"
                toon={toon}
            />
            <p 
                className="font-fredoka text-white text-stroke text-center leading-none min-h-5 flex items-center justify-center"
                style={{
                    fontSize: `${size}px`,
                }}
            >
                {toon.name}
            </p>
        </ShinyButton>
    );
}
