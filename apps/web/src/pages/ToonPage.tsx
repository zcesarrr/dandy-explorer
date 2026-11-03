import { Navigate, useNavigate, useParams } from "react-router";
import { isToonTabKey } from "../utils/toonTabs";
import MobileToonScreen from "../components/screens/MobileToonScreen";
import { useIsDesktop } from "../hooks/useIsDesktop";
import MobileSelectorScreen from "../components/screens/MobileSelectorScreen";
import DesktopToonScreen from "../components/screens/DesktopToonScreen";
import DisclaimerFooter from "../components/blocks/DisclaimerFooter";
import { useToon, useToons } from "../hooks/useToons";

const waitContainer = "font-fredoka text-white text-stroke text-2xl tracking-wider text-center flex flex-col gap-4 h-dvh justify-center items-center";
export default function ToonPage() {
    const { toonId, tab } = useParams();

    const { data: toons, isLoading: isToonsPending } = useToons();
    const id = toonId ? Number(toonId) : toons?.[0]?.id;
    const { data: selectedToon, isPending: isSelectedToonPending, isError: isSelectedToonError } = useToon(id);

    const navigate = useNavigate();
    const isDesktop = useIsDesktop();

    if (isSelectedToonPending || isToonsPending) {
        return (
            <div className={waitContainer}>
                <img
                    src={"/dandy.webp"}
                    alt="Dandy Render"
                    className="w-32"
                />
                <p>Loading content...</p>
            </div>
        );
    };

    if (isSelectedToonError || (!isSelectedToonPending && (!selectedToon || !toons))) {
        return (
            <div className={waitContainer}>
                <p>Sorry, but an error has occurred.</p>
                <p>Try again later!</p>
            </div>
        );
    }

    if (!selectedToon || !toons) return null;

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
