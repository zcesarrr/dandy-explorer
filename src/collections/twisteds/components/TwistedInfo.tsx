import { TWISTED_RARITY_LABELS, type Twisted, type TwistedRarity } from "../types/twisteds.types";
import type { Trinket } from "../../trinkets/types/trinkets.types";
import TRINKETS from "../../trinkets/data";
import { Link } from "react-router";

const RARITY_COLORS: Record<TwistedRarity, string> = {
    common: "#fff",
    uncommon: "#aba9aa",
    rare: "#020201",
    main: "linear-gradient(-90deg,rgba(132, 84, 208, 1) 0%, rgba(91, 142, 206, 1) 20%, rgba(95, 206, 96, 1) 40%, rgba(207, 205, 100, 1) 60%, rgba(209, 146, 89, 1) 80%, rgba(211, 93, 97, 1) 100%)",
    lethal: "linear-gradient(90deg,rgba(227, 78, 79, 1) 0%, rgba(187, 50, 50, 1) 100%)",
};

type TwistedInfoProps = {
    className?: string;
    item: Twisted
};

export default function TwistedInfo({ className, item }: TwistedInfoProps) {
    const hasRarityGradient = item.rarity === "main" || item.rarity === "lethal";
    const rarityColor = RARITY_COLORS[item.rarity];

    const trinket: Trinket | undefined = TRINKETS.find(trink => trink.slug === item.trinketReward);

    return (
        <div className={`${className ?? ""} font-fredoka text-white text-stroke text-center flex flex-col items-center w-full`}>
            <div className="w-full shrink-0 aspect-square bg-black/40 p-2 rounded-lg mb-1 overflow-x-hidden">
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

            <h1 className="text-[29px] my-1 leading-none">
                {item.name}
            </h1>
            <p 
                className="text-lg leading-none text-shadow-none mb-4"
                style={{
                    textShadow: item.rarity === "rare" ? `
                    1px 1px 0 white,
                    -1px -1px 0 white,
                        1px -1px 0 white,
                        -1px 1px 0 white
                        ` : "",
                    backgroundImage: hasRarityGradient ? rarityColor : "",
                    color: hasRarityGradient ? "transparent" : rarityColor,
                    backgroundClip: hasRarityGradient ? "text" : "",
                    WebkitBackgroundClip: hasRarityGradient ? "text" : "",
                    WebkitTextFillColor: hasRarityGradient ? "transparent" : "",
                    WebkitTextStroke: hasRarityGradient ? "0 transparent" : "",
                }}
            >
                {TWISTED_RARITY_LABELS[item.rarity]}
            </p>

            <p className="text-gray-300">{item.description}</p>

            <div role="separator" className="bg-black/40 shrink-0 h-px w-full rounded-full my-2" />

            {trinket && (
                <>
                    <p className="text-xl tracking-wide mb-1 text-yellow-300">100% Research Reward</p>
                    <Link 
                        to={`/trinkets/${trinket.slug}`}
                        className="flex gap-2 items-center bg-black/40 rounded-lg px-2 py-1 active:bg-black/90"
                    >
                        <img
                            src={trinket.iconUrl}
                            loading="lazy"
                            width={48}
                            height={48}
                            className="bg-black/40 rounded-full p-1"
                        />
                        <p>{trinket.name}</p>
                    </Link>
                </>
            )}
        </div>
    );
}
