import { useToonRequirements } from "../../hooks/useToons";
import type { ToonTabProps } from "../../types/toonTabs";
import RequirementCard from "../cards/RequirementCard";
import TabSpinner from "./TabSpinner";

export default function RequirementsTab({ toonId }: ToonTabProps) {
    const { data = [], isPending } = useToonRequirements(toonId);

    if (isPending) return <TabSpinner />

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
