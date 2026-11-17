import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-poppy-icon.webp";
import render from "../../../../assets/twisteds/twisted-poppy-render.webp";

const twistedPoppy: Twisted = {
    slug: "twisted-poppy",
    name: "Twisted Poppy",
    rarity: "common",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "One of the most common Twisteds you'll encounter. Overcome by Ichor, this Twisted has the innate urge to chase others down. Thankfully, it appears that this Twisted doesn't have any abilities to aid her.",
    trinketReward: "pink-bow",
};

export default twistedPoppy;
