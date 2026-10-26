import type { ToonRarity } from "../types/toons";
import { rarityBackgroundColor } from "../utils/styles";

type ToonButtonProps = {
    className?: string;
    onClick?: () => void;
    active?: boolean;
    name: string;
    iconUrl: string;
    rarity: ToonRarity,
};

export default function ToonButton({ className, onClick, active, name, iconUrl, rarity }: ToonButtonProps) {
    return (
        <button 
            className={`${className} active:outline-2 hover:outline-2 hover:shadow-none active:translate-y-0.5 outline-white/50 flex flex-col gap-1 bg-[linear-gradient(to_top,#111111,#444444)] border-2 border-black p-2 rounded-xl shadow-[0_4px_0px_0px_black]`}
            onClick={onClick}
            style={{
                background: `${active ? "linear-gradient(to top,#00ff0010,#55ff5550)" : ""} `,
                outline: `${active ? "3px solid #00cc00" : ""}`,
                cursor: `${active ? "" : "pointer"}`,
                boxShadow:`${active ? "none" : ""}`,
                translate: `${active ? "none" : ""}`,
            }}
        >
            <img
                src={iconUrl}
                className="rounded-lg"
                style={{
                    background: rarityBackgroundColor(rarity),
                }}
            />
            <p className="font-fredoka text-white text-stroke text-center leading-none text-lg">{name}</p>
        </button>
    );
}
