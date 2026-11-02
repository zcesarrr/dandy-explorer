import type { AbilityType } from "@dandy-explorer/shared";

const strings = {
    passive: "Passive",
    active: "Active",
} as const satisfies Record<AbilityType, string>;

type AbilityCardProps = {
    name: string;
    type: AbilityType;
    description: string;
};

export default function AbilityCard({ name, type, description }: AbilityCardProps) {
    return (
        <div className="font-fredoka text-stroke text-center bg-black/40 rounded-lg p-2">
            <p className="text-white text-2xl leading-none">{name}</p>
            <p className="text-gray-400 italic text-xl">{strings[type]}</p>
            <p className="text-white mt-2 leading-5">{description}</p>
        </div>
    );
}