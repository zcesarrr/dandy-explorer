import type { ToonDetail } from "@dandy-explorer/shared";
import ICONS from "../../constants/icons";
import { TOON_TABS, type ToonTabKey } from "../../constants/toonTabs";
import { getToonTab } from "../../utils/toonTabs";
import TabBar, { type TabBarItem } from "../blocks/TabBar";
import ToonInfo from "../blocks/ToonInfo";
import ShinyButton from "../customs/ShinyButton";
import ToonImage from "../ToonImage";

const items: TabBarItem[] = [
    {
        key: "info",
        name: "Info",
        icon: "person",
    },
    ...TOON_TABS,
];

type MobileToonScreenProps = {
    toon: ToonDetail;
    tab: ToonTabKey | undefined;
    onSelectTab: (key: string) => void;
    onBackClick: () => void;
};

export default function MobileToonScreen({ toon, tab, onSelectTab, onBackClick }: MobileToonScreenProps) {
    const currentTab = tab ? getToonTab(tab) : undefined;

    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center h-10 mx-2 mt-[max(0.5rem,env(safe-area-inset-top))] gap-2 mb-1">
                <div className="flex h-full items-center gap-1">
                    <ToonImage
                        className="h-full aspect-square rounded-lg"
                        toon={toon}
                    />
                    <p className="font-fredoka text-stroke text-white">{toon.name}</p>
                </div>
                <ShinyButton 
                    className="flex h-full w-24 justify-center items-center" 
                    ariaLabel="Back to toons"
                    onClick={onBackClick}
                >
                    <ICONS.leftArrow.node
                        className="w-full h-full"
                        color="white"
                    />
                </ShinyButton>
            </div>

            <main key={`${toon.id}-${tab ?? "info"}`} className="flex-1 min-h-0 overflow-y-auto p-4 bg-black/40 m-2 rounded-lg">
                {currentTab ? (
                    <div>
                        <p className="font-fredoka text-white text-stroke text-3xl text-center mb-4">{currentTab.name}</p>
                        <currentTab.Component toonId={toon.id} />
                    </div>
                ): (
                    <ToonInfo
                        toon={toon}
                    />
                )}
            </main>

            <nav 
                className="shrink-0 p-2 mb-[max(0.5rem,env(safe-area-inset-bottom))]"
                aria-label="Toon sections"
            >
                <TabBar items={items} activeKey={tab ?? "info"} onSelect={onSelectTab} />
            </nav>
        </div>
    );
}
