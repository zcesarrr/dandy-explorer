import { useNavigate } from "react-router";
import ICONS from "../../constants/icons";
import { TOON_TABS, type ToonTabKey } from "../../constants/toonTabs";
import type { Toon } from "../../types/toons";
import { getToonTab } from "../../utils/toonTabs";
import TabBar, { type TabBarItem } from "../blocks/TabBar";
import ToonInfo from "../blocks/ToonInfo";
import ShinyButton from "../customs/ShinyButton";

type MobileToonScreenProps = {
    toon: Toon;
    tab: ToonTabKey | undefined;
    onSelectTab: (key: string) => void;
};

export default function MobileToonScreen({ toon, tab, onSelectTab }: MobileToonScreenProps) {
    const navigate = useNavigate();

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
            <ShinyButton 
                className="flex justify-center items-center mx-2 mt-[max(0.5rem,env(safe-area-inset-top))] h-10" 
                ariaLabel="Back to toons"
            >
                <ICONS.leftArrow.node
                    className="w-full h-full"
                    color="white"
                    onClick={() => {
                        navigate("/", { replace: true });
                    }}
                />
            </ShinyButton>
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
            <div className="shrink-0 p-2 mb-[max(0.5rem,env(safe-area-inset-bottom))]">
                <TabBar items={items} activeKey={tab ?? "info"} onSelect={onSelectTab} />
            </div>
        </div>
    );
}
