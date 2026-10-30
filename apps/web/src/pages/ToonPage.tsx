// Believe me, I wrote those comments myself, not an AI. I just wanted to keep this code organized because React messes up the readability

import ToonInfo from "../components/blocks/ToonInfo";
import toons from "../mocks/toons";
import ToonSelector from "../components/blocks/ToonSelector";
import { TOON_TABS } from "../constants/toonTabs";
import { Navigate, useNavigate, useParams } from "react-router";
import { getToonTab, isToonTabKey } from "../utils/toonTabs";
import TabBar from "../components/blocks/TabBar";
import MobileToonScreen from "../components/screens/MobileToonScreen";

export default function ToonPage() {
    const { toonId, tab } = useParams();
    const navigate = useNavigate();

    const toonData = toonId === undefined ?
        toons[0] :
        toons.find((toon) => toon.id === Number(toonId));
    
    if (toonId !== undefined && !toonData) return <Navigate to="/" replace />;
    if (!toonData) return null; // while i implement a better validation

    if (tab !== undefined && !isToonTabKey(tab)) {
        return <Navigate to={`/toon/${toonData.id}`} replace />;
    }
    const currentTab = getToonTab(tab);

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

    return (
        <div className="flex flex-col justify-center items-center min-h-dvh p-4">
            {/* CONTAINER */}
            <div className="w-full max-w-7xl sm:grid grid-cols-[minmax(172px,1fr)_minmax(0,512px)] bg-black/40 rounded-xl p-4 gap-3 max-sm:h-[calc(100dvh-32px)]">
                <ToonSelector
                    toons={toons}
                    selected={toonData.id}
                    onSelect={(id) => navigate(`/toon/${id}/${currentTab.key}`)}
                />

                {/* TOON INFORMATION */}
                <div className="grid grid-cols-2 gap-3">
                    <ToonInfo
                        className="bg-black/30 p-4 rounded-xl"
                        name={toonData.name}
                        iconUrl={toonData.iconUrl}
                        stats={toonData.stats}
                        rarity={toonData.rarity}
                    />

                    {/* DETAILS SECTION */}
                    <div className="flex flex-col justify-between">
                        {/* PANEL */}
                        <div className="bg-black/30 p-4 rounded-xl">
                            <p className="font-fredoka text-white text-stroke text-3xl text-center mb-4">
                                {currentTab.name}
                            </p>

                            {/* TAB CONTENT */}
                            <currentTab.Component toon={toonData} />
                        </div>

                        {/* TABS */}
                        <TabBar
                            items={TOON_TABS}
                            activeKey={currentTab.key}
                            onSelect={(key) => {
                                if (key == currentTab.key) return;
                                navigate(`/toon/${toonData.id}/${key}`);
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
