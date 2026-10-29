// Believe me, I wrote those comments myself, not an AI. I just wanted to keep this code organized because React messes up the readability

import { useState } from "react";
import ToonInfo from "./components/ToonInfo";
import toons from "./mocks/toons";
import ShinyButton from "./components/ShinyButton";
import ICONS from "./constants/icons";
import ToonSelector from "./components/ToonSelector";
import { TOON_TABS } from "./constants/toonTabs";

export default function App() {
  const [selectedToonIndex, setSelectedToonIndex] = useState(0);
  const [activeDetailsTabIndex, setActiveDetailsTabIndex] = useState(0);

  const toonData = toons[selectedToonIndex];

  const currentDetailsTab = TOON_TABS[activeDetailsTabIndex];

  return (
    <div className="flex flex-col justify-center items-center bg-[linear-gradient(to_top,#00000050,transparent),repeating-linear-gradient(135deg,#404040_0px,#404040_18px,#454545_18px,#454545_36px)] min-h-dvh p-4">
      {/* CONTAINER */}
      <div className="w-full max-w-7xl sm:grid grid-cols-[minmax(172px,1fr)_minmax(0,512px)] bg-black/40 rounded-xl p-4 gap-3 max-sm:h-[calc(100dvh-32px)]">
        <ToonSelector
          toons={toons}
          selected={selectedToonIndex}
          onSelect={setSelectedToonIndex}
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
              <p className="font-fredoka text-white text-stroke text-3xl text-center mb-4">{currentDetailsTab.name}</p>

              {/* TAB CONTENT */}
              <currentDetailsTab.Component toon={toonData} />
            </div>

            {/* TABS */}
            <ul className="grid grid-cols-3 grid-rows-1 gap-2 h-12">
              {TOON_TABS.map((item, index) => {
                const Icon = ICONS[item.icon].node;

                return (
                  <li key={index}>
                    <ShinyButton 
                      className="w-full h-full p-1" 
                      active={activeDetailsTabIndex == index}
                      onClick={() => {
                        if (activeDetailsTabIndex == index) return;
                        setActiveDetailsTabIndex(index);
                      }}
                    >
                      {<Icon className="w-full h-full" color="white" />}
                    </ShinyButton>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
