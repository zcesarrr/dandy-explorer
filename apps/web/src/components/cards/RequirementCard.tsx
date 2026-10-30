import ICONS from "../../constants/icons";
import type { IconId } from "../../types/icons";
import type { Requirement, RequirementType } from "../../types/requirements";

const iconByType = {
    ichor: "waterdrop",
    pumpkin: "pumpkin",
    easter: "easterEgg",
    ornament: "ornament",
    encounter: "question",
    research: "magnifier",
    mastery: "medal",
    toonsOwning: "person",
    titlesOwning: "diploma",
} satisfies Record<RequirementType, IconId> ;

export default function RequirementCard({ type, label }: Requirement) {
    const Icon = ICONS[iconByType[type]].node;

    return (
        <div className="bg-black/40 rounded-lg p-2 grid grid-cols-[24px_1fr] items-center gap-2">
            <Icon color="white" className="w-full h-full" />
            <p className="font-fredoka text-stroke text-white text-stroke leading-5">{label}</p>
        </div>
    );
}
