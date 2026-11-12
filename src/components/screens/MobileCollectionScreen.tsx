import ICONS from "../../constants/icons.constants";
import type { CollectionConfig, CollectionItem } from "../../types/collection.types";
import type { IconId } from "../../types/icons.types";
import { getTab } from "../../utils/collectionTabs.utils";
import TabBar, { type TabBarItem } from "../blocks/TabBar";
import ShinyButton from "../customs/ShinyButton";

const INFO_KEY = "info";
const DEFAULT_INFO_TAB: { name: string, icon: IconId } = { name: "Info", icon: "person" };

type MobileCollectionScreenProps<T extends CollectionItem> = {
    config: CollectionConfig<T>;
    item: T;
    tabKey: string | undefined;
    getHrefTab: (key: string | undefined) => string;
    getHrefBack: () => string;
};

export default function MobileCollectionScreen<T extends CollectionItem>({
    config,
    item,
    tabKey,
    getHrefTab,
    getHrefBack 
}: MobileCollectionScreenProps<T>) {
    const { Info, ItemImage, tabs, labels, mobileInfoTab = DEFAULT_INFO_TAB } = config;

    const hasTabs = tabs.length > 0;
    const currentTab = tabKey ? getTab(tabs, tabKey) : undefined;
    const navItems: TabBarItem[] = [{ key: INFO_KEY, ...mobileInfoTab }, ...tabs];

    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center h-10 mx-2 mt-[max(0.5rem,env(safe-area-inset-top))] gap-2 mb-1">
                <div className="flex h-full items-center gap-1">
                    <ItemImage
                        className="h-full aspect-square rounded-lg"
                        item={item}
                    />
                    <p className="font-fredoka text-stroke text-white">{item.name}</p>
                </div>
                <ShinyButton 
                    className="flex h-full w-24 justify-center items-center" 
                    ariaLabel={`Back to ${labels.plural.toLowerCase()}`}
                    nav={{href: getHrefBack()}}
                >
                    <ICONS.leftArrow
                        className="w-full h-full"
                        color="white"
                    />
                </ShinyButton>
            </div>

            <main
                key={`${item.slug}-${tabKey ?? "info"}`}
                className={`flex-1 min-h-0 overflow-y-auto p-4 bg-black/40 m-2 rounded-lg ${hasTabs ? "m-2" : "mx-2 mt-2 mb-[max(0.5rem,env(safe-area-inset-bottom))]"}`}
            >
                {currentTab ? (
                    <div>
                        <h1 className="font-fredoka text-white text-stroke text-3xl text-center mb-4">{currentTab.name}</h1>
                        <currentTab.Component item={item} />
                    </div>
                ): (
                    <Info
                        item={item}
                    />
                )}
            </main>

            {hasTabs && (
                <nav 
                    className="shrink-0 p-2 mb-[max(0.5rem,env(safe-area-inset-bottom))]"
                    aria-label={`${labels.singular} sections`}
                >
                    <TabBar
                        items={navItems}
                        getHref={(key) => getHrefTab(key === INFO_KEY ? undefined : key)}
                        replaceOnClick
                    />
                </nav>
            )}
        </div>
    );
}
