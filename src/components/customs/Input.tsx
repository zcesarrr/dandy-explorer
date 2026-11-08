import type React from "react";
import ICONS from "../../constants/icons";
import type { IconId } from "../../types/icons";

type InputProps = {
    className?: string;
    icon?: IconId;
    placeholder?: string;
    type: React.HTMLInputTypeAttribute;
    value: string;
    onChange: (value: string) => void;
    ariaLabel?: string;
    maxLength?: number;
}

export default function Input({ className, icon, placeholder, type, value, onChange, ariaLabel, maxLength }: InputProps) {
    const Icon = icon ? ICONS[icon] : null;
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
                maxLength={maxLength}
                onChange={(event) => onChange(event.currentTarget.value)}
                aria-label={ariaLabel}
                className="w-full h-full rounded-xl bg-[linear-gradient(to_top,#111,#333)] text-white font-fredoka text-xl border-2 border-black shadow-[0_4px_0px_0px_black] focus:outline-none focus:border-white placeholder:text-white/20 placeholder:tracking-wide"
                style={{
                    paddingLeft: `${icon ? "40px" : "8px"}`,
                    paddingRight: `${isInputSearch ? "48px" : "0px"}`,
                }}
            />
            {(isInputSearch && value !== "") && (
                <button 
                    className="absolute flex justify-center items-center right-0 w-12 h-full p-1 hover:bg-black/30 active:bg-black/60 rounded-xl"
                    type="button"
                    aria-label="Clear search"
                    onClick={() => onChange("")}
                >
                    <ICONS.cross className="w-full h-full" color={"#aaa"} />
                </button>
            )}
        </div>
    );
}
