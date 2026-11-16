import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-eclipse-icon.webp";
import render from "../../../../assets/twisteds/twisted-eclipse-render.webp";

const twistedEclipse: Twisted = {
    slug: "twisted-eclipse",
    name: "Twisted Eclipse",
    rarity: "rare",
    event: "halloween",
    iconUrl: icon,
    render: { url: render},
    description: "This Rare Twisted's howl summons other unoccupied Twisteds within range, triggering a pack hunt in most instances. If you don't want to get caught, avoid her on floors with large amounts of Twisted's.",
    trinketReward: "moon-pack-heirloom",
};

export default twistedEclipse;
