import StatCard from "../cards/StatCard";
import ToonImage from "../ToonImage";
import { buildStats } from "../../utils/stats";
import type { Toon } from "../../types/toons";

type ToonInfoProps = {
    className?: string;
    toon: Toon
};

export default function ToonInfo({ className, toon }: ToonInfoProps) {
    return (
        <div className={`${className ?? ""}`}>
            <ToonImage
                toon={toon}
                className="w-[max(128px,30dvh)] mx-auto rounded-lg"
            />
            <p className="font-fredoka text-white text-3xl text-stroke text-center my-1">{toon.name}</p>
            <ul className="flex flex-col gap-2">
                {buildStats(toon.stats).map((item, index) => (
                    <li key={index}>
                        <StatCard
                            {...item}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
