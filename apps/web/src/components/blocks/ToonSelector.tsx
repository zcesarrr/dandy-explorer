import { useEffect, useState } from "react";
import type { Toon } from "../../types/toons";
import Input from "../customs/Input";
import ToonButton from "../ToonButton";

function normalizeString(str: string): string {
    return str.toLowerCase().trim();
}

export type ToonSelectorProps = {
    className?: string;
    toons: Toon[];
    selected?: number;
    onSelect: (id: number) => void;
    toonButtonSize?: string;
};

export default function ToonSelector({ className, toons, selected, onSelect, toonButtonSize = undefined }: ToonSelectorProps) {
    const [inputSearch, setInputSearch] = useState<string>("");
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const timemout = setTimeout(() => {
            setSearch(normalizeString(inputSearch));
        }, 250);

        return () => clearTimeout(timemout);
    }, [inputSearch]);

    const filteredToons = search !== "" 
        ? toons.filter((toon) => normalizeString(toon.name).includes(search))
        : toons;

    return (
        <div className={`${className ?? ""} relative w-full`}>
            <Input
                type="search"
                placeholder="Search Toons..."
                icon="magnifier"
                className="h-10 mx-1.5"
                onValueChange={(value) => setInputSearch(value)}
            />

            {filteredToons.length === 0 ? (
                <div className="flex flex-col items-center mt-4 p-8 gap-4">
                    <p className="font-fredoka text-white text-2xl text-stroke text-center">
                        Sorry, but your Toon is in another show!
                    </p>
                    <img
                        src="/vee.webp"
                        className="h-64"
                        alt="Vee Render"
                    />
                </div>
            ) : (
                <ul 
                    className="absolute inset-0 top-12.5 overflow-y-auto grid content-start justify-center gap-2 p-1 scrollbar-thumb-black/80"
                    style={{
                        gridTemplateColumns: `repeat(auto-fit, ${toonButtonSize ?? "136px"})`
                    }}
                >
                    {filteredToons.map(item => (
                        <li key={item.id}>
                            <ToonButton
                                buttonProps={{
                                    onClick: () => {
                                        if (item.id == selected) return;
                                        onSelect(item.id);
                                    },
                                    active: selected == item.id,
                                }}
                                {...item}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
