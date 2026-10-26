import ICONS from "../constants/icons";
import type { Stat } from "../types/stats";

export default function StatCard({ name, value, icon, color }: Stat) {
    const { path: iconPath, alt: iconAlt } = ICONS[icon];

    return (
        <div 
            className="p-1.5 flex flex-col h-16 gap-1.5 rounded-md"
            style={{
                background: `linear-gradient(to top,#00000060,transparent), ${color}`
            }}
        >
            <p className="font-fredoka text-white text-stroke text-center leading-none">{name}</p>
            <ul className="flex justify-center gap-4 p-1 bg-black/50 rounded-sm min-h-0">
                {Array.from({ length: value }, (_, index) => (
                    <li key={index} className="h-full">
                        <img
                            src={iconPath}
                            alt={iconAlt}
                            className="h-full"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
