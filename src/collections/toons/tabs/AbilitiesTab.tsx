import { CloseIcon } from "@solar-icons/react/bold/close";
import AbilityCard from "../components/AbilityCard";
import type { TabProps } from "../../../types/collection.types";
import type { Toon } from "../types/toons.types";

export default function AbilitiesTab({ item }: TabProps<Toon>) {
    return (
        <ul className="flex flex-col gap-4">
            {item.abilities.map((ability, index) => (
                <li key={index}>
                    <AbilityCard
                        {...ability}
                    />
                </li>
            ))}
            {item.abilities.length < 2 && (
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
    );
}
