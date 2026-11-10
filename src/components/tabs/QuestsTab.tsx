import type { ToonTabProps } from "../../types/toonTabs.types";
import { renderQuest } from "../../utils/quests.utils";
import QuestCard from "../cards/QuestCard";

export default function QuestsTab({ toon }: ToonTabProps) {
    return (
        <ul className="flex flex-col gap-2">
            {toon.quests.map((item, index) => (
                <li key={index}>
                    <QuestCard content={renderQuest(item)} />
                </li>
            ))}
        </ul>
    );
}
