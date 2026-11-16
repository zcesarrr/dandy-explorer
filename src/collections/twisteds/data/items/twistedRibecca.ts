import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-ribecca-icon.webp";
import render from "../../../../assets/twisteds/twisted-ribecca-render.webp";

const twistedRibecca: Twisted = {
    slug: "twisted-ribecca",
    name: "Twisted Ribecca",
    rarity: "common",
    event: "halloween",
    iconUrl: icon,
    render: { url: render },
    description: "One of the most common Twisteds you'll encounter. Overcome by Ichor, this Twisted has the innate urge to chase others down. Thankfully, it appears that this Twisted doesn't have any abilities to aid her.",
    trinketReward: "bone-needle-and-thread",
};

export default twistedRibecca;
