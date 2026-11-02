import { CloseIcon } from "@solar-icons/react/bold/close";
import AbilityCard from "../cards/AbilityCard";
import type { ToonTabProps } from "../../types/toonTabs";
import { useToonAbilities } from "../../hooks/useToons";

export default function AbilitiesTab({ toonId }: ToonTabProps) {
    const { data = [] } = useToonAbilities(toonId);

    return (
        <ul className="flex flex-col gap-4">
            {data.map((item, index) => (
                <li key={index}>
                    <AbilityCard
                        {...item}
                    />
                </li>
            ))}
            {data.length < 2 && (
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
