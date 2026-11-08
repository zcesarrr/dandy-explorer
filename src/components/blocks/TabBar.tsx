import ICONS from "../../constants/icons";
import type { MobileTabKey } from "../../constants/toonTabs";
import type { IconId } from "../../types/icons";
import ShinyButton from "../customs/ShinyButton";

export type TabBarItem = { key: MobileTabKey, icon: IconId, name: string };

type TabBarProps = {
    className?: string;
    items: readonly TabBarItem[];
    getHref: (key: MobileTabKey) => string;
}

export default function TabBar({ className, items, getHref }: TabBarProps) {
    return (
        <ul className={`${className ?? ""} grid grid-flow-col auto-cols-fr grid-rows-1 gap-2 h-12`}>
            {items.map(item => {
                const Icon = ICONS[item.icon];

                return (
                    <li key={item.key}>
                        <ShinyButton
                            className="w-full h-full p-1"
                            href={getHref(item.key)}
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
