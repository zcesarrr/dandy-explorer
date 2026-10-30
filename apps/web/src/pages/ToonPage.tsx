import toons from "../mocks/toons";
import { Navigate, useNavigate, useParams } from "react-router";
import { isToonTabKey } from "../utils/toonTabs";
import MobileToonScreen from "../components/screens/MobileToonScreen";
import { useIsDesktop } from "../hooks/useIsDesktop";
import MobileSelectorScreen from "../components/screens/MobileSelectorScreen";
import DesktopToonScreen from "../components/screens/DesktopToonScreen";

export default function ToonPage() {
    const { toonId, tab } = useParams();
    const navigate = useNavigate();
    const isDesktop = useIsDesktop();

    const toonData = toonId === undefined ?
        toons[0] :
        toons.find((toon) => toon.id === Number(toonId));
    
    if (toonId !== undefined && !toonData) return <Navigate to="/" replace />;
    if (!toonData) return null; // while i implement a better validation

    if (tab !== undefined && !isToonTabKey(tab)) {
        return <Navigate to={`/toon/${toonData.id}`} replace />;
    }

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
                onSelectTab={key => navigate(`/toon/${toonData.id}/${key}`)}
                toons={toons}
                toon={toonData}
                tab={tab}
            />
        );
    } else {
        return (
            <MobileToonScreen
                toon={toonData}
                tab={tab}
                onSelectTab={(key) => 
                    navigate(
                        key === "info" ? `/toon/${toonData.id}` : `/toon/${toonData.id}/${key}`,
                        { replace: true }
                    )
                }
            />
        );
    }
}
