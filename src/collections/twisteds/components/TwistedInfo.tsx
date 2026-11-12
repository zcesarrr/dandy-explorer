import type { Twisted } from "../types/twisteds.types";
import TwistedImage from "./TwistedImage";

type TwistedInfoProps = {
    className?: string;
    item: Twisted
};

export default function TwistedInfo({ className, item }: TwistedInfoProps) {
    return (
        <div className={`${className ?? ""}`}>
            <TwistedImage
                item={item}
                className="w-[max(128px,30dvh)] mx-auto rounded-lg aspect-square"
            />
            <h1 
                className="font-fredoka text-white text-[29px] text-stroke text-center my-1"
            >
                {item.name}
            </h1>
        </div>
    );
}
