import type React from "react";
import ICONS from "../constants/icons";
import type { IconId } from "../types/icons";

type InputProps = {
    className?: string;
    icon?: IconId;
    placeholder?: string;
    type: React.HTMLInputTypeAttribute;
}

export default function Input({ className, icon, placeholder, type }: InputProps) {
    const Icon = icon ? ICONS[icon].node : null;

    return (
        <div className={`${className} relative flex`}>
            {Icon &&
                <Icon
                    color="#777"
                    className="absolute h-full aspect-square p-1.5"
                />
            }
            <input
                type={type}
                placeholder={placeholder}
                className="w-full h-full rounded-xl bg-[linear-gradient(to_top,#111111aa,#44444490)] text-white font-fredoka text-xl border-2 border-black shadow-[0_4px_0px_0px_black] focus:outline-none focus:border-white placeholder:text-white/20 placeholder:tracking-wide"
                style={{
                    paddingLeft: `${icon ? "40px" : "8px"}`,
                }}
            />
        </div>
    );
}
