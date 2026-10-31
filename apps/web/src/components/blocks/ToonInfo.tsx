import type { Stat } from "../../types/stats";
import type { ToonCategory, ToonRarity } from "../../types/toons";
import { toonBackgroundColor } from "../../utils/styles";
import StatCard from "../cards/StatCard";

type ToonInfoProps = {
    className?: string;
    name: string;
    iconUrl: string;
    stats: Stat[];
    rarity: ToonRarity,
    category: ToonCategory;
};

export default function ToonInfo({ className, name, iconUrl, stats, rarity, category }: ToonInfoProps) {
    return (
        <div className={`${className ?? ""}`}>
            <img
                src={iconUrl}
                alt={`${name} Icon`}
                className="w-[max(128px,30dvh)] mx-auto rounded-lg"
                style={{
                    background: toonBackgroundColor(rarity, category),
                }}
            />
            <p className="font-fredoka text-white text-3xl text-stroke text-center my-1">{name}</p>
            <ul className="flex flex-col gap-2">
                {stats.map((item, index) => (
                    <li key={index}>
                        <StatCard
                            name={item.name}
                            value={item.value}
                            icon={item.icon}
                            color={item.color}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
