import { Navigate, useNavigate, useParams } from "react-router";
import { isToonTabKey } from "../utils/toonTabs";
import MobileToonScreen from "../components/screens/MobileToonScreen";
import { useIsDesktop } from "../hooks/useIsDesktop";
import MobileSelectorScreen from "../components/screens/MobileSelectorScreen";
import DesktopToonScreen from "../components/screens/DesktopToonScreen";
import DisclaimerFooter from "../components/blocks/DisclaimerFooter";
import { useToon, useToons } from "../hooks/useToons";

export default function ToonPage() {
    const { toonId, tab } = useParams();
    const { data: toons } = useToons();
    const id = toonId ? Number(toonId) : toons?.[0]?.id;
    const { data: selectedToon, isLoading, isError } = useToon(id);

    const navigate = useNavigate();
    const isDesktop = useIsDesktop();
    
    if (isError) return <Navigate to="/" replace />
    if (!toons || isLoading || !selectedToon) return null;

    if (tab !== undefined && !isToonTabKey(tab)) {
        return <Navigate to={`/toon/${selectedToon.id}`} replace />;
    }

    const page = () => {
        if (!isDesktop && toonId === undefined) {
            return (
                <MobileSelectorScreen
                    onSelect={id => navigate(`/toon/${id}`)}
                    toons={toons}
                />
            );
        }

        if (isDesktop) {
            return (
                <DesktopToonScreen
                    onSelectToon={id => navigate(tab ? `/toon/${id}/${tab}` : `/toon/${id}`)}
                    onSelectTab={key => navigate(`/toon/${selectedToon.id}/${key}`)}
                    toons={toons}
                    selectedToon={selectedToon}
                    tab={tab}
                />
            );
        }

        return (
            <MobileToonScreen
                toon={selectedToon}
                tab={tab}
                onSelectTab={(key) => 
                    navigate(
                        key === "info" ? `/toon/${selectedToon.id}` : `/toon/${selectedToon.id}/${key}`,
                        { replace: true }
                    )
                }
                onBackClick={() => {
                    navigate("/", { replace: true });
                }}
            />
        );
    }

    const showFooter = isDesktop || toonId === undefined;

    return (
        <div className="h-dvh flex flex-col">
            <div className="flex-1 min-h-0">{page()}</div>
            {showFooter && <DisclaimerFooter />}
        </div>
    );
}
