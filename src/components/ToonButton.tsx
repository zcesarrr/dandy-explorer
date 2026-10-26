type ToonButtonProps = {
    className?: string;
    name: string;
    iconUrl: string;
};

export default function ToonButton({ className, name, iconUrl }: ToonButtonProps) {
    return (
        <button className={`${className} hover:cursor-pointer flex flex-col gap-1 bg-black/30 p-2 rounded-xl`}>
            <img
                src={iconUrl}
                className="rounded-lg bg-black/60"
            />
            <p className="font-fredoka text-white text-stroke text-center leading-none text-lg">{name}</p>
        </button>
    );
}
