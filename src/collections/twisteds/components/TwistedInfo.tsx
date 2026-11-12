import { TWISTED_RARITY_LABELS, type Twisted } from "../types/twisteds.types";

type TwistedInfoProps = {
    className?: string;
    item: Twisted
};

export default function TwistedInfo({ className, item }: TwistedInfoProps) {
    return (
        <div className={`${className ?? ""} font-fredoka text-white text-stroke text-center flex flex-col items-center w-full`}>
            <h1 className="text-[29px] my-1 leading-none">
                {item.name}
            </h1>
            <p className="text-lg leading-none">{TWISTED_RARITY_LABELS[item.rarity]}</p>
            <div className="w-full shrink-0 aspect-square bg-black/40 p-2 rounded-lg my-4 overflow-x-hidden">
                <img
                    width="100%"
                    height="100%"
                    loading="lazy"
                    src={item.render.url}
                    className="object-contain"
                    style={{
                        translate: `${item.render?.offsetX ?? "0px"} ${item.render?.offsetY ?? "0px"}`
                    }}
                />
            </div>
            <p>{item.description}</p>
            <div role="separator" className="bg-black/40 shrink-0 h-1 w-full rounded-full my-3" />
            <p className="text-xl tracking-wide">Research Reward</p>
        </div>
    );
}
