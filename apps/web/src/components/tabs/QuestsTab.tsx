import { useToonQuests } from "../../hooks/useToons";
import type { ToonTabProps } from "../../types/toonTabs";
import QuestCard from "../cards/QuestCard";

export default function QuestsTab({ toonId }: ToonTabProps) {
    const { data = [] } = useToonQuests(toonId);
    
    return (
        <ul className="flex flex-col gap-2">
            {data.map((item, index) => (
                <li key={index}>
                    <QuestCard content={item.content} />
                </li>
            ))}
        </ul>
    );
}
