import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/memory-locket.webp";

const memoryLocket: Trinket = {
    slug: "memory-locket",
    name: "Memory Locket",
    iconUrl: icon,
    description: "If user is not at full health, highlights all healing items currently on the Floor to the user until the user is healed.",
    category: "other",
    event: "halloween",
    rarity: "main",
    holder: { type: "research", params: { count: 100, twisted: "twisted-gourdy" } },
};

export default memoryLocket;
