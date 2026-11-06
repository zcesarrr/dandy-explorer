import { TOON_TABS, type ToonTabKey } from "../../constants/toonTabs";
import type { Toon } from "../../types/toons";
import { getToonTab } from "../../utils/toonTabs";
import TabBar from "../blocks/TabBar";
import ToonInfo from "../blocks/ToonInfo";
import ToonSelector from "../blocks/ToonSelector";

type DesktopToonScreenProps = {
    toons: Toon[];
    selectonToon: Toon;
    tabKey: ToonTabKey | undefined;
    onSelectToon: (slug: string) => void;
    onSelectTab: (key: ToonTabKey) => void;
};

export default function DesktopToonScreen({ toons, selectonToon, tabKey, onSelectToon, onSelectTab }: DesktopToonScreenProps) {
    const currentTab = getToonTab(tabKey);

    return (
        <div className="flex flex-col justify-center items-center h-full p-4">
            {/* CONTAINER */}
            <main className="w-full max-w-7xl grid grid-cols-[minmax(172px,1fr)_minmax(0,512px)] bg-black/40 rounded-xl p-4 gap-3">
                <ToonSelector
                    toons={toons}
                    selectedSlug={selectonToon.slug}
                    onSelect={onSelectToon}
                />

                {/* TOON INFORMATION */}
                <div className="grid grid-cols-2 gap-3">
                    <ToonInfo
                        className="bg-black/30 p-4 rounded-xl"
                        toon={selectonToon}
                    />

                    {/* DETAILS SECTION */}
                    <section className="flex flex-col justify-between" aria-label="Toon details">
                        {/* PANEL */}
                        <div className="bg-black/30 p-4 rounded-xl">
                            <p className="font-fredoka text-white text-stroke text-3xl text-center mb-4">
                                {currentTab.name}
                            </p>

                            {/* TAB CONTENT */}
                            <currentTab.Component toon={selectonToon} />
                        </div>

                        {/* TABS */}
                        <nav aria-label="Detail sections">
                            <TabBar
                                items={TOON_TABS}
                                activeKey={currentTab.key}
                                onSelect={onSelectTab}
                            />
                        </nav>
                    </section>
                </div>
            </main>
        </div>
    );
}