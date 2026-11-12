import { Navigate, useLocation, useParams } from "react-router";
import { getToonTab, isToonTabKey } from "../utils/toonTabs.utils";
import { useIsDesktop } from "../hooks/useIsDesktop";
import MobileSelectorScreen from "../components/screens/MobileSelectorScreen";
import Footer from "../components/blocks/Footer";
import TOONS from "../constants/toons.constants";
import { filterItems } from "../utils/collectionFiltering.utils";
import { TOON_SORT } from "../collections/toons/sort";
import { APP_NAME } from "../constants/app.constants";
import { useCollectionListParams } from "../hooks/useCollectionListParams";
import { toonsConfig } from "../collections/toons/config";
import DesktopCollectionScreen from "../components/screens/DesktopCollectionScreen";
import MobileCollectionScreen from "../components/screens/MobileCollectionScreen";

function getTitle(
    toonName: string | undefined,
    tabKey: string | undefined, 
    isDesktop: boolean
): string {
    if (!toonName) return APP_NAME;

    if (!isDesktop && tabKey === undefined) {
        return `${toonName} | ${APP_NAME}`;
    }

    const tab = getToonTab(tabKey);
    return `${toonName} - ${tab.name} | ${APP_NAME}`;
}

export default function ToonPage() {
    const { search: queryString } = useLocation();
    const { toonSlug, tabKey } = useParams();
    const { sortKey, sortDir, search } = useCollectionListParams(toonsConfig.sort);
    const isDesktop = useIsDesktop();

    const composeEndpoint = (
        toonSlug: string,
        tabKey: string | undefined = undefined
    ): string => {
        return `/toon/${toonSlug}${tabKey ? `/${tabKey}` : ""}${queryString}`
    }

    const toonsFiltered = filterItems(TOONS, search, TOON_SORT, sortKey, sortDir);
    const defaultToon = toonsFiltered[0] ?? filterItems(TOONS, "", TOON_SORT, sortKey, sortDir)[0]!;
    const selectedToonData = TOONS.find(toon => toon.slug === (toonSlug ?? defaultToon.slug));

    if (!selectedToonData) {
        return <Navigate to={composeEndpoint(defaultToon.slug)} replace />;
    }

    if (isDesktop && tabKey === undefined) {
        return <Navigate to={composeEndpoint(selectedToonData.slug, "abilities")} replace />;
    }

    if (tabKey !== undefined && !isToonTabKey(tabKey)) {
        return <Navigate to={composeEndpoint(selectedToonData.slug)} replace />;
    }

    const title = getTitle(
        toonSlug === undefined && !isDesktop ? undefined : selectedToonData.name,
        tabKey,
        isDesktop
    );

    const page = () => {
        if (!isDesktop && toonSlug === undefined) {
            return (
                <MobileSelectorScreen
                    config={toonsConfig}
                    items={toonsFiltered}
                    getHrefItemButton={slug => `/toon/${slug}`}
                />
            );
        }

        if (isDesktop) {
            return (
                <DesktopCollectionScreen
                    config={toonsConfig}
                    items={toonsFiltered}
                    selectedItem={selectedToonData}
                    tabKey={tabKey}
                    getHrefItemButton={slug => composeEndpoint(slug, tabKey)}
                    getHrefTab={key => composeEndpoint(selectedToonData.slug, key)}
                />
            );
        }

        return (
            <MobileCollectionScreen
                config={toonsConfig}
                item={selectedToonData}
                tabKey={tabKey}
                getHrefTab={(key) => key === "info" 
                    ? composeEndpoint(selectedToonData.slug)
                    : composeEndpoint(selectedToonData.slug, key)
                }
                getHrefBack={() => sessionStorage.getItem("from") || "/"}
            />
        );
    }

    const showFooter = isDesktop || toonSlug === undefined;

    return (
        <div className="h-dvh flex flex-col scrollbar-thumb-black/80">
            <title>{title}</title>
            <div className="flex-1 min-h-0">{page()}</div>
            {showFooter && <Footer />}
        </div>
    );
}
