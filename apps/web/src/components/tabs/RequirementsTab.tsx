import { useToonRequirements } from "../../hooks/useToons";
import type { ToonTabProps } from "../../types/toonTabs";
import RequirementCard from "../cards/RequirementCard";

export default function RequirementsTab({ toonId }: ToonTabProps) {
    const { data = [] } = useToonRequirements(toonId);

    return (
        <ul className="flex flex-col gap-2">
            {data.map((item, index) => (
                <li key={index}>
                    <RequirementCard {...item} />
                </li>
            ))}
        </ul>
    );
}
