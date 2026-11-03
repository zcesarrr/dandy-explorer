import { useEffect, useState } from "react";
import Input from "../customs/Input";
import ToonButton from "../ToonButton";
import type { Toon } from "../../types/toons";

function normalizeString(str: string): string {
    return str.toLowerCase().trim();
}

export type ToonSelectorProps = {
    className?: string;
    toons: Toon[];
    selectedSlug?: string;
    onSelect: (slug: string) => void;
    toonButtonSize?: string;
};

export default function ToonSelector({ className, toons, selectedSlug, onSelect, toonButtonSize = undefined }: ToonSelectorProps) {
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
    
    const resultsCount = filteredToons.length;

    return (
        <div className={`${className ?? ""} relative w-full`}>
            <Input
                type="search"
                placeholder="Search Toons..."
                icon="magnifier"
                className="h-10 mx-1.5"
                onValueChange={(value) => setInputSearch(value)}
            />

            {resultsCount === 0 ? (
                <div className="flex flex-col items-center p-8 gap-4">
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
                <div>
                    {search !== "" && (
                        <p className="mt-1 mx-2 font-fredoka text-[#aaa]">Results: {resultsCount} toon{resultsCount > 1 ? "s" : ""}</p>
                    )}
                    <ul 
                        className="absolute inset-0 overflow-y-auto grid content-start justify-center gap-2 p-1 scrollbar-thumb-black/80"
                        style={{
                            top: `${search !== "" ? "70px" : "50px"}`,
                            gridTemplateColumns: `repeat(auto-fit, ${toonButtonSize ?? "136px"})`,
                        }}
                    >
                        {filteredToons.map(item => (
                            <li key={item.slug}>
                                <ToonButton
                                    buttonProps={{
                                        onClick: () => {
                                            if (item.slug == selectedSlug) return;
                                            onSelect(item.slug);
                                        },
                                        active: selectedSlug == item.slug,
                                    }}
                                    toon={item}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
