import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-eggson-icon.webp";
import render from "../../../../assets/twisteds/twisted-eggson-render.webp";

const twistedEggson: Twisted = {
    slug: "twisted-eggson",
    name: "Twisted Eggson",
    rarity: "common",
    event: "easter",
    iconUrl: icon,
    render: { url: render },
    description: "One of the most common Twisteds you'll encounter. Overcome by Ichor, this Twisted has the innate urge to chase others down. Thankfully, it appears that this Twisted doesn't have any abilities to aid him.",
    trinketReward: "egg-radar",
};

export default twistedEggson;
