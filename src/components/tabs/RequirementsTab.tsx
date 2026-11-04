import type { ToonTabProps } from "../../types/toonTabs";
import { renderRequirement } from "../../utils/requirements";
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
