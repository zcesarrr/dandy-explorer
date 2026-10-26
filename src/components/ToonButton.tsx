type ToonButtonProps = {
    className?: string;
    onClick?: () => void;
    active?: boolean;
    name: string;
    iconUrl: string;
};

export default function ToonButton({ className, onClick, active, name, iconUrl }: ToonButtonProps) {
    return (
        <button 
            className={`${className} hover:cursor-pointer flex flex-col gap-1 bg-black/30 p-2 rounded-xl`}
            onClick={onClick}
            style={{
                background: `${active ? "#00ff0010" : ""} `,
                outline: `${active ? "3px solid #00cc00" : ""}`,
            }}
        >
            <img
                src={iconUrl}
                className="rounded-lg bg-black/60"
            />
            <p className="font-fredoka text-white text-stroke text-center leading-none text-lg">{name}</p>
        </button>
    );
}
