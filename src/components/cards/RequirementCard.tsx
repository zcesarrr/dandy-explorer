import ICONS from "../../constants/icons.constants";
import type { IconId } from "../../types/icons.types";
import type { RequirementType } from "../../types/requirements.types";

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
    pickItems: "candy",
    experienceBlackouts: "lightbulbBolt",
    finishMachines: "gear",
} satisfies Record<RequirementType, IconId> ;

type RequirementProps = {
    type: RequirementType;
    label: string;
};

export default function RequirementCard({ type, label }: RequirementProps) {
    const Icon = ICONS[iconByType[type]];

    return (
        <div className="bg-black/40 rounded-lg p-2 grid grid-cols-[24px_1fr] items-center gap-2">
            <Icon color="white" className="w-full h-full" />
            <p className="font-fredoka text-stroke text-white leading-5">{label}</p>
        </div>
    );
}
