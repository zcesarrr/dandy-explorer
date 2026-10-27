import type { ReactNode } from "react";

export type ShinyButtonProps = {
    className?: string;
    onClick?: () => void;
    active?: boolean;
};

type ComponentProps = ShinyButtonProps & {
    children: ReactNode;
};

export default function ShinyButton({ children, className, onClick, active }: ComponentProps) {
    return (
        <button 
            className={`${className} active:outline-2 hover:outline-2 hover:shadow-none active:translate-y-0.5 outline-white/50 flex flex-col gap-1 bg-[linear-gradient(to_top,#111111,#444444)] border-2 border-black rounded-xl shadow-[0_4px_0px_0px_black]`}
            onClick={onClick}
            style={{
                background: `${active ? "linear-gradient(to top,#00ff0010,#55ff5550)" : ""} `,
                outline: `${active ? "3px solid #00cc00" : ""}`,
                cursor: `${active ? "" : "pointer"}`,
                boxShadow:`${active ? "none" : ""}`,
                translate: `${active ? "none" : ""}`,
            }}
        >
            {children}
        </button>
    );
}
