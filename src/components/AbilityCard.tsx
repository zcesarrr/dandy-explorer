import type { Ability } from "../types/abilities";
import { abilityTypeString } from "../utils/abilities";

export default function AbilityCard({ name, type, description }: Ability) {
    return (
        <div className="font-fredoka text-stroke text-center bg-black/40 rounded-lg p-2">
            <p className="text-white text-2xl leading-none">{name}</p>
            <p className="text-gray-400 italic text-xl">{abilityTypeString(type)}</p>
            <p className="text-white mt-2 leading-5">{description}</p>
        </div>
    );
}