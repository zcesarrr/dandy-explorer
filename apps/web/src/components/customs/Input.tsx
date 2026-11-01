import type React from "react";
import ICONS from "../../constants/icons";
import type { IconId } from "../../types/icons";
import { useEffect, useState } from "react";

type InputProps = {
    className?: string;
    icon?: IconId;
    placeholder?: string;
    type: React.HTMLInputTypeAttribute;
    onValueChange?: (value: string) => void;
}

export default function Input({ className, icon, placeholder, type, onValueChange }: InputProps) {
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        if (!onValueChange) return;
        onValueChange(value);
    }, [value, onValueChange]);

    const Icon = icon ? ICONS[icon].node : null;
    const isInputSearch = type === "search";

    return (
        <div className={`${className ?? ""} relative flex`}>
            {Icon &&
                <Icon
                    color="#777"
                    className="absolute h-full aspect-square p-1.5"
                />
            }
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                className="w-full h-full rounded-xl bg-[linear-gradient(to_top,#111111aa,#33333390)] text-white font-fredoka text-xl border-2 border-black shadow-[0_4px_0px_0px_black] focus:outline-none focus:border-white placeholder:text-white/20 placeholder:tracking-wide"
                style={{
                    paddingLeft: `${icon ? "40px" : "8px"}`,
                    paddingRight: `${isInputSearch ? "48px" : "0px"}`,
                }}
            />
            {(isInputSearch && value !== "") && (
                <button 
                    className="absolute flex justify-center items-center right-0 w-12 h-full p-1 hover:bg-black/30 active:bg-black/60 rounded-xl"
                    onClick={() => setValue("")}
                >
                    <ICONS.cross.node className="w-full h-full" color={"#aaa"} />
                </button>
            )}
        </div>
    );
}
