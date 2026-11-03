import { Navigate, useNavigate, useParams } from "react-router";
import { isToonTabKey } from "../utils/toonTabs";
import MobileToonScreen from "../components/screens/MobileToonScreen";
import { useIsDesktop } from "../hooks/useIsDesktop";
import MobileSelectorScreen from "../components/screens/MobileSelectorScreen";
import DesktopToonScreen from "../components/screens/DesktopToonScreen";
import DisclaimerFooter from "../components/blocks/DisclaimerFooter";
import TOONS from "../constants/toons";

export default function ToonPage() {
    const { toonSlug, tabKey } = useParams();
    const navigate = useNavigate();
    const isDesktop = useIsDesktop();
    
    const selectedToonData = TOONS.find(toon => toon.slug === (toonSlug ?? TOONS[0].slug));

    if (!selectedToonData) {
        return <Navigate to={`/toon/${TOONS[0].slug}`} replace />;
    }

    if (tabKey !== undefined && !isToonTabKey(tabKey)) {
        return <Navigate to={`/toon/${selectedToonData.slug}`} replace />;
    }

    const page = () => {
        if (!isDesktop && toonSlug === undefined) {
            return (
                <MobileSelectorScreen
                    onSelect={id => navigate(`/toon/${id}`)}
                    toons={TOONS}
                />
            );
        }

        if (isDesktop) {
            return (
                <DesktopToonScreen
                    onSelectToon={id => navigate(tabKey ? `/toon/${id}/${tabKey}` : `/toon/${id}`)}
                    onSelectTab={key => navigate(`/toon/${selectedToonData.slug}/${key}`)}
                    toons={TOONS}
                    selectedToonSlug={selectedToonData.slug}
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
                        key === "info" ? `/toon/${selectedToonData.slug}` : `/toon/${selectedToonData.slug}/${key}`,
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
            {showFooter && <DisclaimerFooter />}
        </div>
    );
}
