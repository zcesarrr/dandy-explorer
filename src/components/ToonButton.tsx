import type { Toon } from "../types/toons.types";
import ShinyButton, { type ShinyButtonProps } from "./customs/ShinyButton";
import ToonImage from "./ToonImage";

type ToonButtonProps = {
    buttonProps: ShinyButtonProps
    toon: Toon;
};

export default function ToonButton({ buttonProps, toon }: ToonButtonProps) {
    const isLongName = toon.name.length > 10;

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
                data-long-name={isLongName ? "true" : undefined}
                className="font-fredoka text-white text-stroke text-center leading-none min-h-5 flex items-center justify-center text-[18px] data-[long-name=true]:text-[11px] min-[640px]:landscape:data-[long-name=true]:text-[15px]"
            >
                {toon.name}
            </p>
        </ShinyButton>
    );
}
