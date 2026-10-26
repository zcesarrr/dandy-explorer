import type { Stat } from "../types/stats";
import StatCard from "./StatCard";

type ToonInfoProps = {
    className?: string;
    name: string;
    iconUrl: string;
    stats: Stat[];
};

export default function ToonInfo({ className, name, iconUrl, stats }: ToonInfoProps) {
    return (
        <div className={`${className}`}>
            <img
                src={iconUrl}
                alt="Eclipse Icon"
                className="w-[max(128px,30dvh)] mx-auto bg-black/60 rounded-lg"
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
