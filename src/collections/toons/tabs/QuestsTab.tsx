import type { TabProps } from "../../../types/collection.types";
import type { Toon } from "../types/toons.types";
import { renderQuest } from "../utils/quests.utils";
import QuestCard from "../components/QuestCard";

export default function QuestsTab({ item }: TabProps<Toon>) {
    if (!item.quests) return (
        <p className="text-center text-stroke font-fredoka text-gray-300">
            No quests for this Toon.
        </p>
    );

    return (
        <ul className="flex flex-col gap-2">
            {item.quests.map((quest, index) => (
                <li key={index}>
                    <QuestCard content={renderQuest(quest)} />
                </li>
            ))}
        </ul>
    );
}
