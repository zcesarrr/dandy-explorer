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
            className={`${className} active:outline-2 hover:outline-2 outline-white/50 flex flex-col gap-1 bg-black/30 p-2 rounded-xl`}
            onClick={onClick}
            style={{
                background: `${active ? "#00ff0010" : ""} `,
                outline: `${active ? "3px solid #00cc00" : ""}`,
                cursor: `${active ? "" : "pointer"}`,
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
