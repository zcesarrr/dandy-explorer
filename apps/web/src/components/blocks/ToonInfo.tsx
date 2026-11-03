import type { ToonDetail } from "@dandy-explorer/shared";
import StatCard from "../cards/StatCard";
import ToonImage from "../ToonImage";
import { buildStats } from "../../utils/stats";

type ToonInfoProps = {
    className?: string;
    toon: ToonDetail
};

export default function ToonInfo({ className, toon }: ToonInfoProps) {
    console.log(toon.stats);
    return (
        <div className={`${className ?? ""}`}>
            <ToonImage
                toon={toon}
                className="w-[max(128px,30dvh)] mx-auto rounded-lg"
            />
            <p className="font-fredoka text-white text-3xl text-stroke text-center my-1">{toon.name}</p>
            <ul className="flex flex-col gap-2">
                {buildStats(toon.stats.map(stat => stat.value)).map((item, index) => (
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
