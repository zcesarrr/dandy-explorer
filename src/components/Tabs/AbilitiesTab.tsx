import { CloseIcon } from "@solar-icons/react/bold/close";
import AbilityCard from "../AbilityCard";
import type { ToonTabProps } from "../../types/toonTabs";

export default function AbilitiesTab({ toon }: ToonTabProps) {
    return (
        <ul className="flex flex-col gap-4">
            {toon.abilities.map((item, index) => (
                <li key={index}>
                    <AbilityCard
                        {...item}
                    />
                </li>
            ))}
            {toon.abilities.length < 2 && (
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
