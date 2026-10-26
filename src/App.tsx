import AbilitiesBox from "./components/AbilitiesBox";
import ToonButton from "./components/ToonButton";
import ToonInfo from "./components/ToonInfo";
import toons from "./mocks/toons";

export default function App() {
  const selectedToon = toons[0];

  return (
    <div className="flex flex-col justify-center items-center bg-[linear-gradient(to_top,#00000050,transparent),repeating-linear-gradient(135deg,#404040_0px,#404040_18px,#454545_18px,#454545_36px)] min-h-dvh p-4">
      <div className="w-full max-w-7xl grid grid-cols-[1fr_minmax(0,512px)] bg-black/40 rounded-xl p-4 gap-3">
        <div className="relative w-full">
          <ul className="absolute inset-0 overflow-y-auto flex content-start flex-wrap gap-2 justify-center">
            {Array.from({ length: 40 }, (_, index) => (
              <li key={index}>
                <ToonButton
                  className="w-34.5"
                  name={selectedToon.name}
                  iconUrl={selectedToon.iconUrl}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <ToonInfo
            className="bg-black/30 p-4 rounded-xl"
            name={selectedToon.name}
            iconUrl={selectedToon.iconUrl}
            stats={selectedToon.stats}
          />
          <AbilitiesBox
            className="bg-black/30 p-4 rounded-xl"
            abilities={selectedToon.abilities}
          />
        </div>
      </div>
    </div>
  );
}
