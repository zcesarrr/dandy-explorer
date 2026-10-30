import { TOON_TABS } from "../../constants/toonTabs";
import type { Toon } from "../../types/toons";
import { getToonTab } from "../../utils/toonTabs";
import TabBar, { type TabBarItem } from "../blocks/TabBar";
import ToonInfo from "../blocks/ToonInfo";

type MobileToonScreenProps = {
    toon: Toon;
    tab: string | undefined;
    onSelectTab: (key: string) => void;
};

export default function MobileToonScreen({ toon, tab, onSelectTab }: MobileToonScreenProps) {
    const items: TabBarItem[] = [
        {
            key: "info",
            name: "Info",
            icon: "person",
        },
        ...TOON_TABS,
    ];

    const currentTab = tab ? getToonTab(tab) : undefined;

    return (
        <div className="h-dvh flex flex-col">
            <div className="flex-1 min-h-0 overflow-y-auto p-4 bg-black/40 m-2 rounded-lg">
                {currentTab ? (
                    <div>
                        <p className="font-fredoka text-white text-stroke text-3xl text-center mb-4">{currentTab.name}</p>
                        <currentTab.Component toon={toon} />
                    </div>
                ): (
                    <ToonInfo
                        name={toon.name}
                        iconUrl={toon.iconUrl}
                        stats={toon.stats}
                        rarity={toon.rarity}
                    />
                )}
            </div>
            <div className="shrink-0 p-2">
                <TabBar items={items} activeKey={tab ?? "info"} onSelect={onSelectTab} />
            </div>
        </div>
    );
}
