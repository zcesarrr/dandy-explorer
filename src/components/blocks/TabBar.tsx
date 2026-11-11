import ICONS from "../../constants/icons.constants";
import type { IconId } from "../../types/icons.types";
import ShinyButton from "../customs/ShinyButton";

export type TabBarItem = { key: string, icon: IconId, name: string };

type TabBarProps = {
    className?: string;
    items: readonly TabBarItem[];
    getHref: (key: string) => string;
    replaceOnClick?: boolean;
}

export default function TabBar({ className, items, getHref, replaceOnClick = false }: TabBarProps) {
    return (
        <ul className={`${className ?? ""} grid grid-flow-col auto-cols-fr grid-rows-1 gap-2 h-12`}>
            {items.map(item => {
                const Icon = ICONS[item.icon];

                return (
                    <li key={item.key}>
                        <ShinyButton
                            className="w-full h-full p-1"
                            nav={{ href: getHref(item.key), replace: replaceOnClick }}
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
