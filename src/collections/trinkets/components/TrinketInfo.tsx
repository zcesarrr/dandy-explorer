import type { Trinket } from "../types/trinkets.types";

type TrinketInfoProps = {
    className?: string;
    item: Trinket
};

export default function TrinketInfo({ className, item }: TrinketInfoProps) {
    return (
        <div className={`${className ?? ""} font-fredoka text-white text-stroke text-center flex flex-col items-center w-full`}>
            <h1 className="text-[29px] my-1 leading-none">
                {item.name}
            </h1>
            <div className="w-full shrink-0 aspect-square bg-black/40 p-2 rounded-lg my-4 overflow-x-hidden">
                <img
                    width="100%"
                    height="100%"
                    loading="lazy"
                    src={item.iconUrl}
                    className="object-contain"
                />
            </div>
            <p>{item.description}</p>
        </div>
    );
}
