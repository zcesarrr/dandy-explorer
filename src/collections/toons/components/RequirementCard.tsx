import ICONS from "../../../constants/icons.constants";
import { useHighlistLinkHref } from "../hooks/useHighlistLinkHref";
import type { RequirementType } from "../../../types/requirements.types";
import { renderContent } from "../../../utils/render.utils";
import { REQUIREMENT_ICON } from "../../../utils/requirements.utils";

type RequirementProps = {
    type: RequirementType;
    label: string;
};

export default function RequirementCard({ type, label }: RequirementProps) {
    const buildHref = useHighlistLinkHref();
    const Icon = ICONS[REQUIREMENT_ICON[type]];

    return (
        <div className="bg-black/40 rounded-lg p-2 grid grid-cols-[24px_1fr] items-center gap-2">
            <Icon color="white" className="w-full h-full" />
            <p className="font-fredoka text-stroke text-white leading-5">{renderContent(label, buildHref)}</p>
        </div>
    );
}
