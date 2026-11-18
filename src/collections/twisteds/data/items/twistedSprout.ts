import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-sprout-icon.webp";
import render from "../../../../assets/twisteds/twisted-sprout-render.webp";

const twistedSprout: Twisted = {
    slug: "twisted-sprout",
    name: "Twisted Sprout",
    rarity: "main",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "One of the Main Characters of Dandy's World. This Twisted makes up for his slower speed by summoning deadly tendrils from the ground that strike at nearby Toons. Do not let this lonely Twisted trap you with him!",
    trinketReward: "savory-charm",
};

export default twistedSprout;
