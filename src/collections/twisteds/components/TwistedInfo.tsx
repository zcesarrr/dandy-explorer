import { type Twisted } from "../types/twisteds.types";
import type { Trinket } from "../../trinkets/types/trinkets.types";
import TRINKETS from "../../trinkets/data";
import { Link } from "react-router";
import TwistedRarityLabel from "./TwistedRarityLabel";
import { EVENT_THEME_DATA, RARITY_LABELS } from "../../../constants/rarity.constants";
import GradientLabel from "../../../components/GradientLabel";
import { getEventColor } from "../../../utils/styles.utils";

type TwistedInfoProps = {
    className?: string;
    item: Twisted
};

export default function TwistedInfo({ className, item }: TwistedInfoProps) {
    const trinket: Trinket | undefined = TRINKETS.find(trink => trink.slug === item.trinketReward);

    return (
        <div className={`${className ?? ""} font-fredoka text-white text-stroke text-center flex flex-col items-center w-full`}>
            <div className="w-full max-w-[50dvh] shrink-0 aspect-square bg-black/40 p-2 rounded-lg mb-1 overflow-x-hidden">
                <img
                    alt=""
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
            
            {item.event !== "none" && (
                <GradientLabel
                    className="text-lg leading-none"
                    gradientColor={getEventColor("easter", 90) ?? "white"} 
                    label={EVENT_THEME_DATA[item.event].label}
                />
            )}
            <TwistedRarityLabel
                className="text-lg mb-4 leading-none"
                rarity={item.rarity}
                label={RARITY_LABELS[item.rarity]}
            />

            <p className="text-gray-300">{item.description}</p>

            <hr className="bg-black/40 border-0 w-full shrink-0 h-0.5 my-2" />

            {trinket && (
                <>
                    <p className="text-xl tracking-wide mb-1 text-yellow-300">100% Research Reward</p>
                    <Link 
                        to={`/trinkets/${trinket.slug}`}
                        className="group flex gap-2 items-center bg-black/40 rounded-lg px-2 py-1 active:bg-white/10"
                    >
                        <img
                            alt=""
                            src={trinket.iconUrl}
                            loading="lazy"
                            width={48}
                            height={48}
                            className="bg-black/40 rounded-full p-1"
                        />
                        <p className="group-hover:underline">{trinket.name}</p>
                    </Link>
                </>
            )}
        </div>
    );
}
