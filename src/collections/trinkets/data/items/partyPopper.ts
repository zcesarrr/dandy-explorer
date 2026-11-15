import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/party-popper.webp";

const partyPopper: Trinket = {
    slug: "party-popper",
    name: "Party Popper",
    iconUrl: icon,
    description: "When starting to work on a Machine, Twisteds in the initial nearby radius are highlighted for 5 seconds.",
    category: "other",
    event: "none",
    rarity: "common",
    holder: { type: "research", params: { count: 100, twisted: "twisted-yatta" } },
};

export default partyPopper;
