import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/blushy-bat.webp";

const blushyBat: Trinket = {
    slug: "blushy-bat",
    name: "Blushy Bat",
    iconUrl: icon,
    description: "Causes Twisteds who attacked you to receive an extra 3 second cooldown before being able to hit you again.",
    category: "other",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            requirements: [
                {
                    "type": "custom",
                    params: { text: "Joining the BlushCrunch Studio group on Roblox" },
                },
            ],
        },
    },
};

export default blushyBat;
