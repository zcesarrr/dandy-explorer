import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/peppermint-icing.webp";

const peppermintIcing: Trinket = {
    slug: "peppermint-icing",
    name: "Peppermint Icing",
    iconUrl: icon,
    description: "Grants 30 stamina after using any active ability..",
    category: "stamina",
    event: "holiday",
    rarity: "uncommon",
    holder: { type: "research", params: { count: 100, twisted: "twisted-ginger" } },
};

export default peppermintIcing;
