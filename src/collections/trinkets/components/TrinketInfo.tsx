import { TRINKET_CATEGORY_DATA, type Trinket, type TrinketRequirement } from "../types/trinkets.types";

function renderRequirement(requirement: TrinketRequirement) {
    if (requirement.type === "research") {
        return `${requirement.params.count}% Research on ${requirement.params.twisted}`;
    }

    return `Dandy's Shop: ${requirement.params.price} Ichor`;
}

type TrinketInfoProps = {
    className?: string;
    item: Trinket
};

export default function TrinketInfo({ className, item }: TrinketInfoProps) {
    const categoryData = TRINKET_CATEGORY_DATA[item.category];

    return (
        <div className={`${className ?? ""} font-fredoka text-white text-stroke text-center flex flex-col items-center w-full`}>
            <div className="w-full shrink-0 aspect-square bg-black/40 p-2 rounded-lg overflow-hidden mb-1">
                <img
                    alt=""
                    width="100%"
                    height="100%"
                    loading="lazy"
                    src={item.iconUrl}
                    className="object-contain"
                />
            </div>
            
            <h1 className="text-[29px] my-1 leading-none">
                {item.name}
            </h1>
            <p className="leading-none mb-4">
                Category: <span style={{ color: categoryData.color }}>{categoryData.label}</span>
            </p>

            <p className="text-gray-300">{item.description}</p>

            <hr className="bg-black/40 border-0 w-full shrink-0 h-0.5 my-2" />

            <p className="text-xl tracking-wide mb-1">Requirement</p>
            <div className="flex gap-2 items-center bg-black/40 rounded-lg px-2 py-1">
                <p>{renderRequirement(item.requirement)}</p>
            </div>
        </div>
    );
}
