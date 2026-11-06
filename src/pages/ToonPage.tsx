import { Navigate, useNavigate, useParams } from "react-router";
import { isToonTabKey } from "../utils/toonTabs";
import MobileToonScreen from "../components/screens/MobileToonScreen";
import { useIsDesktop } from "../hooks/useIsDesktop";
import MobileSelectorScreen from "../components/screens/MobileSelectorScreen";
import DesktopToonScreen from "../components/screens/DesktopToonScreen";
import Footer from "../components/blocks/Footer";
import TOONS from "../constants/toons";
import type { ToonTabKey } from "../constants/toonTabs";
import { DEFAULT_SORT_DIR, DEFAULT_SORT_KEY, sortToons } from "../utils/sortToons";

const DEFAULT_TOON_SLUG = sortToons(TOONS, DEFAULT_SORT_KEY, DEFAULT_SORT_DIR)[0]!.slug;

function composeEndpoint(
    toonSlug: string,
    tabKey: ToonTabKey | undefined = undefined
): string {
    return `/toon/${toonSlug}${tabKey ? `/${tabKey}` : ""}`
}

export default function ToonPage() {
    const { toonSlug, tabKey } = useParams();
    const navigate = useNavigate();
    const isDesktop = useIsDesktop();
    
    const selectedToonData = TOONS.find(toon => toon.slug === (toonSlug ?? DEFAULT_TOON_SLUG));

    if (!selectedToonData) {
        return <Navigate to={composeEndpoint(DEFAULT_TOON_SLUG)} replace />;
    }

    if (tabKey !== undefined && !isToonTabKey(tabKey)) {
        return <Navigate to={composeEndpoint(selectedToonData.slug)} replace />;
    }

    const page = () => {
        if (!isDesktop && toonSlug === undefined) {
            return (
                <MobileSelectorScreen
                    onSelect={slug => navigate(composeEndpoint(slug))}
                    toons={TOONS}
                />
            );
        }

        if (isDesktop) {
            return (
                <DesktopToonScreen
                    onSelectToon={slug => navigate(composeEndpoint(slug, tabKey))}
                    onSelectTab={key => navigate(composeEndpoint(selectedToonData.slug, key))}
                    toons={TOONS}
                    selectonToon={selectedToonData}
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
                    navigate("/", { replace: true });
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
