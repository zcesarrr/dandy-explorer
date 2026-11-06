import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import { isToonTabKey } from "../utils/toonTabs";
import MobileToonScreen from "../components/screens/MobileToonScreen";
import { useIsDesktop } from "../hooks/useIsDesktop";
import MobileSelectorScreen from "../components/screens/MobileSelectorScreen";
import DesktopToonScreen from "../components/screens/DesktopToonScreen";
import Footer from "../components/blocks/Footer";
import TOONS from "../constants/toons";
import type { ToonTabKey } from "../constants/toonTabs";
import { useToonListParams } from "../hooks/useToonListParams";
import { filterToons } from "../utils/toonsFiltering";

export default function ToonPage() {
    const { search: queryString } = useLocation();
    const { toonSlug, tabKey } = useParams();
    const { sortKey, sortDir, search } = useToonListParams();
    const navigate = useNavigate();
    const isDesktop = useIsDesktop();

    const composeEndpoint = (
        toonSlug: string,
        tabKey: ToonTabKey | undefined = undefined
    ): string => {
        return `/toon/${toonSlug}${tabKey ? `/${tabKey}` : ""}${queryString}`
    }

    const toonsFiltered = filterToons(TOONS, search, sortKey, sortDir);
    const defaultToon = toonsFiltered[0] ?? filterToons(TOONS, "", sortKey, sortDir)[0]!;
    const selectedToonData = TOONS.find(toon => toon.slug === (toonSlug ?? defaultToon.slug));

    if (!selectedToonData) {
        return <Navigate to={composeEndpoint(defaultToon.slug)} replace />;
    }

    if (tabKey !== undefined && !isToonTabKey(tabKey)) {
        return <Navigate to={composeEndpoint(selectedToonData.slug)} replace />;
    }

    const page = () => {
        if (!isDesktop && toonSlug === undefined) {
            return (
                <MobileSelectorScreen
                    onSelect={slug => navigate(composeEndpoint(slug))}
                    toons={toonsFiltered}
                />
            );
        }

        if (isDesktop) {
            return (
                <DesktopToonScreen
                    onSelectToon={slug => navigate(composeEndpoint(slug, tabKey))}
                    onSelectTab={key => navigate(composeEndpoint(selectedToonData.slug, key))}
                    toons={toonsFiltered}
                    selectedToon={selectedToonData}
                    tabKey={tabKey}
                />
            );
        }

        return (
            <MobileToonScreen
                toon={selectedToonData}
                tabKey={tabKey}
                onSelectTab={(key) => 
                    navigate(
                        key === "info" ? composeEndpoint(selectedToonData.slug) : composeEndpoint(selectedToonData.slug, key as ToonTabKey),
                        { replace: true }
                    )
                }
                onBackClick={() => {
                    navigate(`/${queryString}`, { replace: true });
                }}
            />
        );
    }

    const showFooter = isDesktop || toonSlug === undefined;

    return (
        <div className="h-dvh flex flex-col">
            <div className="flex-1 min-h-0">{page()}</div>
            {showFooter && <Footer />}
        </div>
    );
}
