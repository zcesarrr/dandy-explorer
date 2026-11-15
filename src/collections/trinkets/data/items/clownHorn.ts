import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/clown-horn.webp";

const clownHorn: Trinket = {
    slug: "clown-horn",
    name: "Clown Horn",
    iconUrl: icon,
    description: "Increases Walk and Run speed by 10% on odd-numbered floors.",
    category: "moveSpeed",
    event: "none",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-looey" } },
};

export default clownHorn;
