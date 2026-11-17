import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-boxten-icon.webp";
import render from "../../../../assets/twisteds/twisted-boxten-render.webp";

const twistedBoxten: Twisted = {
    slug: "twisted-boxten",
    name: "Twisted Boxten",
    rarity: "common",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "One of the most common Twisteds you'll encounter. Overcome by Ichor, this Twisted has the innate urge to chase others down. Thankfully, it appears that this Twisted doesn't have any abilities to aid him.",
    trinketReward: "blue-bandana",
};

export default twistedBoxten;
