import type { Ability } from "../types/abilities";
import AbilityCard from "./AbilityCard";

type AbilitiesBoxProps = {
    className?: string;
    abilities: Ability[];
};

export default function AbilitiesBox({ className, abilities }: AbilitiesBoxProps) {
    return (
        <div className={`${className}`}>
            <p className="font-fredoka text-white text-stroke text-3xl text-center mb-4">Abilities</p>
            <ul className="flex flex-col gap-4">
                {abilities.map((item, index) => (
                    <li key={index}>
                        <AbilityCard
                            {...item}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}