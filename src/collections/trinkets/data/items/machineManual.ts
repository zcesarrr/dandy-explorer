import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/machine-manual.webp";

const machineManual: Trinket = {
    slug: "machine-manual",
    name: "Machine Manual",
    iconUrl: icon,
    description: "Increases your Extraction Speed by 5%.",
    category: "extSpeed",
    event: "none",
    rarity: "common",
    holder: { 
        type: "shop",
        params: {
            price: 350,
        },
    },
};

export default machineManual;
