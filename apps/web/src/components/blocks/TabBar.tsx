import ICONS from "../../constants/icons";
import type { IconId } from "../../types/icons";
import ShinyButton from "../customs/ShinyButton";

type TabBarItem = { key: string, icon: IconId, name: string };
type TabBarProps = {
    className?: string;
    items: readonly TabBarItem[];
    activeKey: string;
    onSelect: (key: string) => void;
}

export default function TabBar({ className, items, activeKey, onSelect }: TabBarProps) {
    return (
        <ul className={`${className} grid grid-flow-col auto-cols-fr grid-rows-1 gap-2 h-12`}>
            {items.map(item => {
                const Icon = ICONS[item.icon].node;

                return (
                    <li key={item.key}>
                        <ShinyButton
                            className="w-full h-full p-1"
                            active={item.key == activeKey}
                            onClick={() => onSelect(item.key)}
                            ariaLabel={item.name}
                        >
                            <Icon className="w-full h-full" color="white" />
                        </ShinyButton>
                    </li>
                );
            })}
        </ul>
    );
}
