import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-yatta-icon.webp";
import render from "../../../../assets/twisteds/twisted-yatta-render.webp";

const twistedYatta: Twisted = {
    slug: "twisted-yatta",
    name: "Twisted Yatta",
    rarity: "common",
    event: "none",
    iconUrl: icon,
    render: { url: render, offsetX: "-5px" },
    description: "While this Twisted is more common than others, Yatta is dangerous when running on her tails. Overcome with Ichor, her tails provide her with a higher run speed compared to other common Twisteds.",
    trinketReward: "party-popper",
};

export default twistedYatta;
