import type { ToonTabProps } from "../../types/toonTabs.types";
import { renderRequirement } from "../../utils/requirements.utils";
import RequirementCard from "../cards/RequirementCard";

export default function RequirementsTab({ toon }: ToonTabProps) {
    return (
        <ul className="flex flex-col gap-2">
            {toon.requirements.map((item, index) => (
                <li key={index}>
                    <RequirementCard
                        type={item.type}
                        label={renderRequirement(item)}
                    />
                </li>
            ))}
        </ul>
    );
}
