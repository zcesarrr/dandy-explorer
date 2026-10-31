import type { Toon } from "../../types/toons";
import Input from "../customs/Input";
import ToonButton from "../ToonButton";

export type ToonSelectorProps = {
    className?: string;
    toons: Toon[];
    selected?: number;
    onSelect: (id: number) => void;
    toonButtonSize?: string;
};

export default function ToonSelector({ className, toons, selected, onSelect, toonButtonSize = undefined }: ToonSelectorProps) {
    return (
        <div className={`${className ?? ""} relative w-full`}>
            <Input
                type="search"
                placeholder="Search Toons..."
                icon="magnifier"
                className="h-10 mx-1.5"
            />

            <ul 
                className="absolute inset-0 top-12.5 overflow-y-auto grid content-start justify-center gap-2 p-1 scrollbar-thumb-black/80"
                style={{
                    gridTemplateColumns: `repeat(auto-fit, ${toonButtonSize ?? "136px"})`
                }}
            >
                {toons.map(item => (
                    <li key={item.id}>
                        <ToonButton
                            buttonProps={{
                                onClick: () => {
                                    if (item.id == selected) return;
                                    onSelect(item.id);
                                },
                                active: selected == item.id,
                            }}
                            name={item.name}
                            iconUrl={item.iconUrl}
                            rarity={item.rarity}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
