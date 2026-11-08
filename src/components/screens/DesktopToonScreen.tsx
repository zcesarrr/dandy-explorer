import { TOON_TABS, type ToonTabKey } from "../../constants/toonTabs";
import type { Toon } from "../../types/toons";
import { getToonTab } from "../../utils/toonTabs";
import TabBar from "../blocks/TabBar";
import ToonInfo from "../blocks/ToonInfo";
import ToonSelector from "../blocks/ToonSelector";

type DesktopToonScreenProps = {
    toons: Toon[];
    selectedToon: Toon;
    tabKey: ToonTabKey | undefined;
    getHrefToonButton: (slug: string) => string;
    getHrefTab: (key: ToonTabKey) => string;
};

export default function DesktopToonScreen({ toons, selectedToon, tabKey, getHrefToonButton, getHrefTab }: DesktopToonScreenProps) {
    const currentTab = getToonTab(tabKey);

    return (
        <div className="flex flex-col justify-center items-center h-full p-4">
            {/* CONTAINER */}
            <main className="w-full max-w-7xl max-h-full grid grid-cols-[minmax(172px,1fr)_minmax(0,512px)] grid-rows-1 bg-black/40 rounded-xl p-4 gap-3">
                <ToonSelector
                    toons={toons}
                    getHrefToonButton={getHrefToonButton}
                />

                {/* TOON INFORMATION */}
                <div className="min-h-0 grid grid-cols-2 grid-rows-1 gap-3">
                    <ToonInfo
                        className="bg-black/30 p-4 rounded-xl"
                        toon={selectedToon}
                    />

                    {/* DETAILS SECTION */}
                    <section className="flex flex-col justify-between min-h-0" aria-label="Toon details">
                        {/* PANEL */}
                        <div className="bg-black/30 p-4 rounded-xl flex flex-col min-h-0">
                            <h2 className="font-fredoka text-white text-stroke text-3xl text-center mb-4">
                                {currentTab.name}
                            </h2>

                            {/* TAB CONTENT */}
                            <div className="flex-1 min-h-0 overflow-y-auto">
                                <currentTab.Component toon={selectedToon} />
                            </div>
                        </div>

                        {/* TABS */}
                        <nav aria-label="Detail sections" className="shrink-0 mt-4">
                            <TabBar
                                items={TOON_TABS}
                                getHref={(key) => getHrefTab(key as ToonTabKey)}
                            />
                        </nav>
                    </section>
                </div>
            </main>
        </div>
    );
}