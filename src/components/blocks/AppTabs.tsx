import { APP_TABS } from "../../constants/appTabs";
import ICONS from "../../constants/icons";
import type { IconId } from "../../types/icons";
import ShinyButton from "../customs/ShinyButton";

type AppTabsProps = {
    className?: string;
};

export default function AppTabs({ className }: AppTabsProps) {
    const Icon = (id: IconId) => {
        const CurrentIcon = ICONS[id];
        return <CurrentIcon color="white" />
    }

    return (
        <nav 
            aria-label="App sections"
            className={`${className} text-stroke text-center font-fredoka text-white text-lg grid grid-cols-3 grid-rows-1 gap-2 list-none mx-2 mb-2.5`}
        >
            {APP_TABS.map(item => (
                <li key={item.key}>
                    <ShinyButton
                        nav={{ href: `/${item.href ?? item.key}` }}
                        className="flex flex-row justify-center items-center w-full h-full gap-2"
                    >
                        {Icon(item.icon)}
                        {item.name}
                    </ShinyButton>
                </li>
            ))}
        </nav>
    );
}
