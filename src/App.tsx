import { useState } from "react";
import AbilitiesBox from "./components/AbilitiesBox";
import ToonButton from "./components/ToonButton";
import ToonInfo from "./components/ToonInfo";
import toons from "./mocks/toons";
import ShinyButton from "./components/ShinyButton";
import ICONS from "./constants/icons";
import type { IconId } from "./types/icons";

const detailsTabs = [
  "star", "heart", "heartBroken",
] satisfies IconId[];

export default function App() {
  const [selectedToonId, setSelectedToonId] = useState(0);
  const [activeDetailsTabIndex, setActiveDetailsTabIndex] = useState(0);

  const toonData = toons[selectedToonId];

  return (
    <div className="flex flex-col justify-center items-center bg-[linear-gradient(to_top,#00000050,transparent),repeating-linear-gradient(135deg,#404040_0px,#404040_18px,#454545_18px,#454545_36px)] min-h-dvh p-4">
      <div className="w-full max-w-7xl grid grid-cols-[1fr_minmax(0,512px)] bg-black/40 rounded-xl p-4 gap-3">
        <div className="relative w-full">
          <ul className="absolute inset-0 overflow-y-auto grid grid-cols-[repeat(auto-fit,136px)] content-start justify-center gap-2 p-1">
            {toons.map(item => (
              <li key={item.id}>
                <ToonButton
                  buttonProps={{
                    onClick: () => {
                      if (item.id == selectedToonId) return;
                      setSelectedToonId(item.id)
                    },
                    active: selectedToonId == item.id,
                  }}
                  name={item.name}
                  iconUrl={item.iconUrl}
                  rarity={item.rarity}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <ToonInfo
            className="bg-black/30 p-4 rounded-xl"
            name={toonData.name}
            iconUrl={toonData.iconUrl}
            stats={toonData.stats}
            rarity={toonData.rarity}
          />
          <div className="flex flex-col justify-between">
            <AbilitiesBox
              className="bg-black/30 p-4 rounded-xl"
              abilities={toonData.abilities}
            />
            <ul className="grid grid-cols-3 grid-rows-1 gap-2 h-12">
              {detailsTabs.map((item, index) => {
                const Icon = ICONS[item].node;

                return (
                  <li key={index}>
                    <ShinyButton 
                      className="w-full h-full" 
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
