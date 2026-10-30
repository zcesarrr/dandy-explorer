import type { ToonTabProps } from "../../types/toonTabs";
import QuestCard from "../cards/QuestCard";

export default function QuestsTab({ toon }: ToonTabProps) {
    return (
        <ul className="flex flex-col gap-2">
            {toon.quests?.map((item, index) => (
                <li key={index}>
                    <QuestCard description={item} />
                </li>
            ))}
        </ul>
    );
}
