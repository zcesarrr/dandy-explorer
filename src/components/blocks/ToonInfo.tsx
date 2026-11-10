import StatCard from "../cards/StatCard";
import ToonImage from "../ToonImage";
import type { Toon } from "../../types/toons.types";

const STATS_BASE = [
    {
        name: "Health",
        color: "#ce5c5d",
        icon: "heart",
    },
    {
        name: "Skill Check",
        color: "#d09158",
        icon: "star",
    },
    {
        name: "Movement Speed",
        color: "#cdce5d",
        icon: "star",
    },
    {
        name: "Stamina",
        color: "#5acd59",
        icon: "star",
    },
    {
        name: "Stealth",
        color: "#5b8ecf",
        icon: "star",
    },
    {
        name: "Extraction Speed",
        color: "#854ecf",
        icon: "star",
    },
] as const;

type ToonInfoProps = {
    className?: string;
    toon: Toon
};

export default function ToonInfo({ className, toon }: ToonInfoProps) {
    return (
        <div className={`${className ?? ""}`}>
            <ToonImage
                toon={toon}
                className="w-[max(128px,30dvh)] mx-auto rounded-lg aspect-square"
            />
            <h1 
                className="font-fredoka text-white text-[29px] text-stroke text-center my-1"
            >
                {toon.name}
            </h1>
            <ul className="flex flex-col gap-2">
                {STATS_BASE.map((stat, index) => (
                    <li key={index}>
                        <StatCard
                            {...stat}
                            value={toon.stats[index] ?? 1}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
