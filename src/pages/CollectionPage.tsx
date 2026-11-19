import { useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router";
import type { CollectionConfig, CollectionItem } from "../types/collection.types";
import { useCollectionListParams } from "../hooks/useCollectionListParams";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { filterItems } from "../utils/collectionFiltering.utils";
import { getTab, isTabKey } from "../utils/collectionTabs.utils";
import { APP_NAME } from "../constants/app.constants";
import MobileSelectorScreen from "../components/screens/MobileSelectorScreen";
import DesktopCollectionScreen from "../components/screens/DesktopCollectionScreen";
import MobileCollectionScreen from "../components/screens/MobileCollectionScreen";
import Footer from "../components/blocks/Footer";
import SectionNav from "../components/blocks/SectionNav";
import { getLastListLocation, saveLastLocation } from "../utils/lastLocation.utils";

function getTitle(itemName: string | undefined, tabName: string | undefined): string {
    if (!itemName) return APP_NAME;
    if (!tabName) return `${itemName} | ${APP_NAME}`;
    return `${itemName} - ${tabName} | ${APP_NAME}`;
}

type CollectionPageProps<T extends CollectionItem> = {
    config: CollectionConfig<T>;
};

export default function CollectionPage<T extends CollectionItem>({ config }: CollectionPageProps<T>) {
    const { search: queryString, pathname } = useLocation();
    const { slug, tabKey } = useParams();
    const { sortKey, sortDir, search } = useCollectionListParams(config.sort);
    const isDesktop = useIsDesktop();

    const { items, tabs, basePath } = config;
    const firstTab = tabs[0];

    const composeEndpoint = (itemSlug: string, tab: string | undefined = undefined): string => {
        return `${basePath}/${itemSlug}${tab ? `/${tab}` : ""}${queryString}`;
    };

    const itemsFiltered = filterItems(items, search, config.sort, sortKey, sortDir);
    const defaultItem = itemsFiltered[0] ?? filterItems(items, "", config.sort, sortKey, sortDir)[0];
    const selectedItem = defaultItem ? items.find(item => item.slug === (slug ?? defaultItem.slug)) : undefined;

    const getRedirect = (): string | null => {
        if (!defaultItem) return null;
        if (!selectedItem) return composeEndpoint(defaultItem.slug);

        if (isDesktop && (slug === undefined || (firstTab && tabKey === undefined))) {
            return composeEndpoint(selectedItem.slug, firstTab?.key);
        }

        if (tabKey !== undefined && !isTabKey(tabs, tabKey)) {
            return composeEndpoint(selectedItem.slug);
        }

        return null;
    };

    const redirectTo = getRedirect();

    const shouldSave = redirectTo === null && selectedItem !== undefined && (isDesktop || slug === undefined);
    const urlToSave = shouldSave ? `${pathname}${queryString}` : null;

    useEffect(() => {
        if (urlToSave) saveLastLocation(basePath, urlToSave);
    }, [basePath, urlToSave]);

    if (redirectTo) return <Navigate to={redirectTo} replace />;
    if (!selectedItem) return null;

    const showsSelector = !isDesktop && slug === undefined;
    const currentTab = !isDesktop && tabKey === undefined ? undefined : getTab(tabs, tabKey);
    const title = getTitle(showsSelector ? undefined : selectedItem.name, currentTab?.name);

    const page = () => {
        if (showsSelector) {
            return (
                <MobileSelectorScreen
                    config={config}
                    items={itemsFiltered}
                    getHrefItemButton={itemSlug => `${basePath}/${itemSlug}`}
                />
            );
        }

        if (isDesktop) {
            return (
                <DesktopCollectionScreen
                    config={config}
                    items={itemsFiltered}
                    selectedItem={selectedItem}
                    tabKey={tabKey}
                    getHrefItemButton={itemSlug => composeEndpoint(itemSlug, tabKey)}
                    getHrefTab={key => composeEndpoint(selectedItem.slug, key)}
                />
            );
        }

        return (
            <MobileCollectionScreen
                config={config}
                item={selectedItem}
                tabKey={tabKey}
                getHrefTab={key => composeEndpoint(selectedItem.slug, key)}
                getHrefBack={() => getLastListLocation(basePath) ?? basePath}
            />
        );
    };

    const showFooter = isDesktop || slug === undefined;
    const showNav = isDesktop || showsSelector;

    return (
        <div className="h-dvh flex flex-col scrollbar-thumb-black/80">
            <title>{title}</title>
            {showNav && <SectionNav />}
            <div key={config.id} className="flex-1 min-h-0 animate-fade-in">{page()}</div>
            {showFooter && <Footer />}
        </div>
    );
}
