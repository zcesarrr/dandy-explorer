import { Link } from "react-router";
import { twistedsConfig } from "../../twisteds/config";
import type { Twisted } from "../../twisteds/types/twisteds.types";
import { TRINKET_CATEGORY_DATA, type Trinket, type TrinketHolder } from "../types/trinkets.types";
import ICONS from "../../../constants/icons.constants";
import RequirementCard from "../../toons/components/RequirementCard";
import { renderRequirement } from "../../../utils/requirements.utils";
import TwistedImage from "../../twisteds/components/TwistedImage";

function renderHolder(holder: TrinketHolder) {
    if (holder.type === "research") {
        const twisted: Twisted | undefined = twistedsConfig.items.find(t => t.slug === holder.params.twisted);
        if (twisted) {
            return (
                <span className="flex justify-center items-center text-center mt-2 p-2 gap-2 bg-black/40 rounded-md">
                    <TwistedImage
                        className="w-8 h-8 aspect-square rounded-md"
                        item={twisted}
                    />
                    <p>
                        {holder.params.count}% Research on <Link 
                        className="hover:underline active:underline text-gray-500 leading-none" 
                        to={`/twisteds/${twisted?.slug}`}>
                            {twisted.name}
                        </Link>
                    </p>
                </span>
            );
        } else {
            return (
                <p>No twisted found. ({holder.params.twisted})</p>
            )
        }
    }

    return (
        <p>
            <span className="text-[#70d44b]">Dandy's Shop</span>: {holder.params.price} Ichor
        </p>
    );
}

type TrinketInfoProps = {
    className?: string;
    item: Trinket
};

export default function TrinketInfo({ className, item }: TrinketInfoProps) {
    const categoryData = TRINKET_CATEGORY_DATA[item.category];
    const CategoryIcon = ICONS[categoryData.Icon];

    return (
        <div className={`${className ?? ""} font-fredoka text-white text-stroke text-center flex flex-col items-center w-full`}>
            <div className="w-full max-w-[50dvh] shrink-0 aspect-square bg-black/40 p-2 rounded-lg overflow-hidden mb-1">
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
            <div className="flex gap-1 items-center mb-4">
                <p className="leading-none">
                    Category:{" "}
                    <span 
                        style={{ 
                            color: categoryData.color,
                            textShadow: item.category === "other" ? `
                                1px 1px 0 #ccc,
                                -1px -1px 0 #ccc,
                                1px -1px 0 #ccc,
                                -1px 1px 0 #ccc
                            ` : "",
                        }}
                    >
                        {categoryData.label}
                    </span>
                </p>
                <span className="w-5 h-5 bg-black/40 p-1 rounded-full">
                    <CategoryIcon className="w-full h-full" />
                </span>
            </div>

            <p className="text-gray-300">{item.description}</p>

            <hr className="bg-black/40 border-0 w-full shrink-0 h-0.5 my-2" />

            <span className="mb-2">
                <p className="text-xl tracking-wide leading-none">Availability</p>
                {renderHolder(item.holder)}
            </span>

            {item.holder.type === "shop" && item.holder.params.requirements?.length && (
                <>
                    <p className="text-lg">Requirements</p>
                    <ul className="w-full flex flex-col gap-1">
                        {item.holder.params.requirements?.map((req, index) => (
                            <li key={index}>
                                <RequirementCard
                                    type={req.type}
                                    label={renderRequirement(req)}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
