import StatCard from "../../../components/cards/StatCard";
import ToonImage from "./ToonImage";
import type { Toon } from "../types/toons.types";
import { STATS_DATA } from "../../../constants/stats.constants";
import type { StatCardProps } from "../../../types/stats.types";
import ICONS from "../../../constants/icons.constants";
import { EVENT_THEME_DATA } from "../../../constants/rarity.constants";

const STATS_BASE: Omit<StatCardProps, "value">[] = Object.values(STATS_DATA).map(item => {
    return {
        name: item.label,
        color: item.color,
        icon: item.icon,
    };
});

type ToonInfoProps = {
    className?: string;
    item: Toon
};

export default function ToonInfo({ className, item }: ToonInfoProps) {
    const eventData = item.category !== "none" ? EVENT_THEME_DATA[item.category] : undefined;
    const EventIcon = eventData ? ICONS[eventData.Icon] : undefined;

    const theme = `${eventData?.label} Theme`;

    return (
        <div className={`${className ?? ""}`}>
            <div className="relative max-w-[max(128px,30dvh)] w-full aspect-square mx-auto">
                <ToonImage
                    item={item}
                    className="w-full h-full object-contain rounded-lg"
                    loading="eager"
                />
                {EventIcon && (
                    <div 
                        className="absolute top-1 left-1 bg-black/60 rounded-full p-1.5" 
                        aria-label={theme}
                        title={theme}
                    >
                        <EventIcon className="w-8 h-8" color="white" />
                    </div>
                )}
            </div>
            <h1 
                className="font-fredoka text-white text-[29px] text-stroke text-center my-1"
            >
                {item.name}
            </h1>
            <ul className="flex flex-col gap-2">
                {STATS_BASE.map((stat, index) => (
                    <li key={index}>
                        <StatCard
                            {...stat}
                            value={item.stats[index] ?? 1}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
