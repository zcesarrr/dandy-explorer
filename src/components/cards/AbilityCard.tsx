import ICONS from "../../constants/icons.constants";
import type { Ability, AbilityType } from "../../types/abilities.types";

const strings = {
    passive: "Passive",
    active: "Active",
} as const satisfies Record<AbilityType, string>;

export default function AbilityCard({ name, type, description, icon }: Ability) {
    const Icon = icon ? ICONS[icon] : null;

    return (
        <div className="font-fredoka text-stroke text-center bg-black/40 rounded-lg p-2">
            <p className="text-white text-2xl leading-none">{name}</p>
            <div className="flex justify-center items-center gap-1.5 mr-0.5">
                {Icon && <Icon className="left-0 top-0 w-4.5 h-4.5" />}
                <p className="text-gray-400 italic text-xl">{strings[type]}</p>
            </div>
            <p className="text-white mt-2 leading-5">{description}</p>
        </div>
    );
}