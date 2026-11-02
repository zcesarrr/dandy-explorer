import type { ToonTabProps } from "../../types/toonTabs";
import QuestCard from "../cards/QuestCard";

export default function QuestsTab({ toonId }: ToonTabProps) {
    return (
        <ul className="flex flex-col gap-2">
            {items.map((item, index) => (
                <li key={index}>
                    <QuestCard content={item.content} />
                </li>
            ))}
        </ul>
    );
}
