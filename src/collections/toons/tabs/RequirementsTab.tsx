import type { TabProps } from "../../../types/collection.types";
import type { Toon } from "../types/toons.types";
import { renderRequirement } from "../utils/requirements.utils";
import RequirementCard from "../components/RequirementCard";

export default function RequirementsTab({ item }: TabProps<Toon>) {
    return (
        <ul className="flex flex-col gap-2">
            {item.requirements.map((requirement, index) => (
                <li key={index}>
                    <RequirementCard
                        type={requirement.type}
                        label={renderRequirement(requirement)}
                    />
                </li>
            ))}
        </ul>
    );
}
