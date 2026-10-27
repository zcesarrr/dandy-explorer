// Believe me, I wrote those comments myself, not an AI. I just wanted to keep this code organized because React messes up the readability

import { useState, type ReactNode } from "react";
import ToonButton from "./components/ToonButton";
import ToonInfo from "./components/ToonInfo";
import toons from "./mocks/toons";
import ShinyButton from "./components/ShinyButton";
import ICONS from "./constants/icons";
import type { IconId } from "./types/icons";
import AbilityCard from "./components/AbilityCard";
import { CloseIcon } from "@solar-icons/react/bold/close";
import QuestCard from "./components/QuestCard";
import IconLabelCard from "./components/IconLabelCard";

export default function App() {
  const [selectedToonIndex, setSelectedToonIndex] = useState(0);
  const [activeDetailsTabIndex, setActiveDetailsTabIndex] = useState(0);

  const toonData = toons[selectedToonIndex];

  //TODO: Make the Mastery Quests UI heheh
  const detailsTabs: { name: string, icon: IconId, content?: ReactNode }[] = [
    {
      name: "Abilities",
      icon: "handStars",
      content: (
        <ul className="flex flex-col gap-4">
          {toonData.abilities.map((item, index) => (
            <li key={index}>
              <AbilityCard
                {...item}
              />
            </li>
          ))}
          {toonData.abilities.length < 2 && (
            <li>
              <div className="bg-black/40 rounded-lg p-2 h-16 flex justify-center items-center">
                <CloseIcon
                  color="#000000aa"
                  className="w-full h-full"
                />
              </div>
            </li>
          )}
        </ul>
      ),
    },
    {
      name: "Mastery Quests",
      icon: "medal",
      content: (
        <ul className="flex flex-col gap-2">
          {toonData.quests?.map((item, index) => (
            <li key={index}>
              <QuestCard description={item} />
            </li>
          ))}
        </ul>
      ),
    },
    {
      name: "Requirements",
      icon: "key",
      content: (
        <ul className="flex flex-col gap-2">
          <li>
            <IconLabelCard icon="waterdrop" label="1500 Ichor" />
          </li>
          <li>
            <IconLabelCard icon="question" label="Encounter Twisted Dandy" />
          </li>
          <li>
            <IconLabelCard icon="magnifier" label="100% Research on Twisted Vee" />
          </li>
          <li>
            <IconLabelCard icon="medal" label="Complete all Mastery Quests on Brightney" />
          </li>
          <li>
            <IconLabelCard icon="person" label="Own 15 or more Toons" />
          </li>
          <li>
            <IconLabelCard icon="diploma" label="Own 3+ Titles" />
          </li>
        </ul>
      ),
    },
  ];

  const currentDetailsTab = detailsTabs[activeDetailsTabIndex];

  return (
    <div className="flex flex-col justify-center items-center bg-[linear-gradient(to_top,#00000050,transparent),repeating-linear-gradient(135deg,#404040_0px,#404040_18px,#454545_18px,#454545_36px)] min-h-dvh p-4">
      {/* CONTAINER */}
      <div className="w-full max-w-7xl grid grid-cols-[1fr_minmax(0,512px)] bg-black/40 rounded-xl p-4 gap-3">
        {/* TOON SELECTOR */}
        <div className="relative w-full">
          <ul className="absolute inset-0 overflow-y-auto grid grid-cols-[repeat(auto-fit,136px)] content-start justify-center gap-2 p-1 scrollbar-thumb-black/80">
            {toons.map((item, index) => (
              <li key={index}>
                <ToonButton
                  buttonProps={{
                    onClick: () => {
                      if (index == selectedToonIndex) return;
                      setSelectedToonIndex(index)
                    },
                    active: selectedToonIndex == index,
                  }}
                  name={item.name}
                  iconUrl={item.iconUrl}
                  rarity={item.rarity}
                />
              </li>
            ))}
          </ul>
        </div>

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
              {currentDetailsTab.content}
            </div>

            {/* TABS */}
            <ul className="grid grid-cols-3 grid-rows-1 gap-2 h-12">
              {detailsTabs.map((item, index) => {
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
