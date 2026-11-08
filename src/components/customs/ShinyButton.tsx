import type { CSSProperties, ReactNode } from "react";
import { NavLink } from "react-router";

export type ShinyButtonProps = {
    className?: string;
    onClick?: () => void;
    active?: boolean;
    href?: string;
    ariaLabel?: string;
    ariaExpanded?: boolean;
    ariaControls?: string;
};

type ComponentProps = ShinyButtonProps & {
    children: ReactNode;
};

const baseClasses =
    "active:outline-2 hover:outline-2 hover:shadow-none active:translate-y-0.5 outline-white/50 flex flex-col gap-1 bg-[linear-gradient(to_top,#111111,#444444)] border-2 border-black rounded-xl shadow-[0_4px_0px_0px_black] focus-visible:outline-2 focus-visible:outline-[#fff]";

function getStyle(active?: boolean): CSSProperties {
    return {
        background: active ? "linear-gradient(to top,#00ff0010,#55ff5550)" : undefined,
        outline: active ? "3px solid #00cc00" : undefined,
        boxShadow: active ? "none" : undefined,
        translate: active ? "none" : undefined,
        pointerEvents: active ? "none" : "auto",
    };
}

export default function ShinyButton({ children, className, onClick, active, ariaLabel, href, ariaExpanded, ariaControls }: ComponentProps) {
    const classes = `${className ?? ""} ${baseClasses}`;

    if (href) {
        return (
            <NavLink
                to={href}
                className={classes}
                onClick={onClick}
                aria-label={ariaLabel}
                aria-expanded={ariaExpanded}
                aria-controls={ariaControls}
                style={({ isActive }) => getStyle(active ?? isActive)}
                end
            >
                {children}
            </NavLink>
        );
    }

    return (
        <button
            type="button"
            className={classes}
            onClick={onClick}
            aria-label={ariaLabel}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            style={getStyle(active)}
        >
            {children}
        </button>
    );
}
