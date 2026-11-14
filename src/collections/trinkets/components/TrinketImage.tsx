import ICONS from "../../../constants/icons.constants";
import { getSpecialBackgroundColor } from "../../../utils/styles.utils";
import { TRINKET_CATEGORY_DATA, type Trinket } from "../types/trinkets.types";

type TrinketImageProps = {
    className?: string;
    item: Trinket;
};

// This component it's not working as intended on first instance.
// But since I coded like shit and everything is working, I can leave it.
// If I'm having problems later, I will fix it and this silly comment will be removed.
export default function TrinketImage({ className = "", item }: TrinketImageProps) {
    const CategoryIcon = ICONS[TRINKET_CATEGORY_DATA[item.category].Icon];

    return (
        <div className={`${className ?? ""} relative overflow-hidden`}>
            <img
                className="p-1"
                src={item.iconUrl}
                alt=""
                loading="lazy"
                style={{
                    background: getSpecialBackgroundColor(item.rarity, item.event),
                }}
            />
            <span className="absolute left-1 top-1 w-6 h-6 bg-black/40 p-1 rounded-full">
                <CategoryIcon className="w-full h-full" />
            </span>
        </div>
    );
}
