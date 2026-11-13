import StatCard from "../../../components/cards/StatCard";
import ToonImage from "./ToonImage";
import type { Toon } from "../types/toons.types";
import { STATS_DATA } from "../../../constants/stats.constants";
import type { StatCardProps } from "../../../types/stats.types";

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
    return (
        <div className={`${className ?? ""}`}>
            <ToonImage
                item={item}
                className="w-[max(128px,30dvh)] mx-auto rounded-lg aspect-square"
            />
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
