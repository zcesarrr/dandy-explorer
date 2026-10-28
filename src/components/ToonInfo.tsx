import type { Stat } from "../types/stats";
import type { ToonRarity } from "../types/toons";
import { rarityBackgroundColor } from "../utils/styles";
import StatCard from "./StatCard";

type ToonInfoProps = {
    className?: string;
    name: string;
    iconUrl: string;
    stats: Stat[];
    rarity: ToonRarity,
};

export default function ToonInfo({ className, name, iconUrl, stats, rarity }: ToonInfoProps) {
    return (
        <div className={`${className}`}>
            <img
                src={iconUrl}
                alt={`${name} Icon`}
                className="w-[max(128px,30dvh)] mx-auto rounded-lg"
                style={{
                    background: rarityBackgroundColor(rarity),
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
