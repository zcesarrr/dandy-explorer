import type { ToonTabProps } from "../../types/toonTabs";
import RequirementCard from "../cards/RequirementCard";

export default function RequirementsTab({ toon }: ToonTabProps) {
    return (
        <ul className="flex flex-col gap-2">
            {toon.requirements?.map((item, index) => (
                <li key={index}>
                    <RequirementCard {...item} />
                </li>
            ))}
        </ul>
    );
}
