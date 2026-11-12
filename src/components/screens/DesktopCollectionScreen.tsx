import TabBar from "../blocks/TabBar";
import CollectionSelector from "../blocks/CollectionSelector";
import type { CollectionConfig, CollectionItem } from "../../types/collection.types";
import { getTab } from "../../utils/collectionTabs.utils";

type DesktopCollectionScreenProps<T extends CollectionItem> = {
    config: CollectionConfig<T>;
    items: readonly T[];
    selectedItem: T;
    tabKey: string | undefined;
    getHrefItemButton: (slug: string) => string;
    getHrefTab: (key: string) => string;
};

export default function DesktopCollectionScreen<T extends CollectionItem>({
    config,
    items,
    selectedItem,
    tabKey,
    getHrefItemButton,
    getHrefTab 
}: DesktopCollectionScreenProps<T>) {
    const { Info, tabs, labels } = config;
    const currentTab = getTab(tabs, tabKey);

    return (
        <div className="flex flex-col justify-center items-center h-full p-4">
            {/* CONTAINER */}
            <main 
                className="w-full max-w-7xl h-full grid grid-rows-1 bg-black/40 rounded-xl p-4 gap-3"
                style={{
                    gridTemplateColumns: `minmax(172px, 1fr) minmax(0, ${config.desktopInfoSize ?? 512}px)`,
                }}
            >
                <CollectionSelector
                    config={config}
                    items={items}
                    getHrefItemButton={getHrefItemButton}
                />

                {/* ITEM INFORMATION */}
                <div className={`min-h-0 grid ${currentTab ? "grid-cols-2" : "grid-cols-1"} grid-rows-1 gap-3`}>
                    <Info
                        className="bg-black/30 p-4 rounded-xl overflow-y-auto"
                        item={selectedItem}
                    />

                    {/* DETAILS SECTION */}
                    {currentTab && (
                        <section className="flex flex-col justify-between min-h-0" aria-label={`${labels.singular} details`}>
                            {/* PANEL */}
                            <div className="bg-black/30 p-4 rounded-xl flex flex-col min-h-0">
                                <h2 className="font-fredoka text-white text-stroke text-3xl text-center mb-4">
                                    {currentTab.name}
                                </h2>

                                {/* TAB CONTENT */}
                                <div className="flex-1 min-h-0 overflow-y-auto">
                                    <currentTab.Component item={selectedItem} />
                                </div>
                            </div>

                            {/* TABS */}
                            <nav aria-label="Detail sections" className="shrink-0 mt-4">
                                <TabBar
                                    items={tabs}
                                    getHref={getHrefTab}
                                />
                            </nav>
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
}