import type { ToonTabProps } from "../../types/toonTabs";
import RequirementCard from "../cards/RequirementCard";

export default function RequirementsTab({ toonId }: ToonTabProps) {
    return (
        <ul className="flex flex-col gap-2">
            {items.map((item, index) => (
                <li key={index}>
                    <RequirementCard {...item} />
                </li>
            ))}
        </ul>
    );
}
