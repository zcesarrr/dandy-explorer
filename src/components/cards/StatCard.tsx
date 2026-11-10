import ICONS from "../../constants/icons.constants";
import type { StatCardProps } from "../../types/stats.types";

export default function StatCard({ name, value, icon, color }: StatCardProps) {
    const isHeartIcon = icon == "heart";
    const length = isHeartIcon && value < 3 ? value + 1 : value;

    const shouldBeHeartBroken = (index: number) => {
        return isHeartIcon && value < 3 && index == 0;
    };

    const getIcon = (index: number) => {
        return shouldBeHeartBroken(index) ? ICONS.heartBroken : ICONS[icon];
    };

    return (
        <div 
            className="p-[clamp(0.25rem,0.7dvh,0.375rem)] h-[clamp(2.8rem,7dvh,4rem)] gap-[clamp(0.2rem,0.5dvh,0.375rem)] flex flex-col rounded-md"
            style={{
                background: `linear-gradient(to top,#00000060,transparent), ${color}`
            }}
        >
            <p className="font-fredoka text-white text-stroke text-center leading-none text-[clamp(0.8rem,1.9dvh,1rem)]">{name}</p>
            <ul className="p-[clamp(0.15rem,0.4dvh,0.2rem)] flex justify-center gap-4 bg-black/50 rounded-sm min-h-0">
                {Array.from({ length: length !== -1 ? length : 1 }, (_, index) => {
                    const selectedIcon = getIcon(index);
                    const Icon = selectedIcon;

                    return (
                        <li key={index} className="h-full">
                            <Icon 
                                className="h-full"
                                color={!shouldBeHeartBroken(index) ? "white" : ""}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
