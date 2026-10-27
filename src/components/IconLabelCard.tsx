import ICONS from "../constants/icons";
import type { IconId } from "../types/icons";

type IconLabelCardProps = {
    icon: IconId,
    label: string;
};

export default function IconLabelCard({ icon, label }: IconLabelCardProps) {
    const Icon = ICONS[icon].node;

    return (
        <div className="bg-black/40 rounded-lg p-2 grid grid-cols-[24px_1fr] items-center gap-2">
            <Icon color="white" className="w-full h-full" />
            <p className="font-fredoka text-white text-stroke leading-5">{label}</p>
        </div>
    );
}
