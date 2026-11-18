import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-toodles-icon.webp";
import render from "../../../../assets/twisteds/twisted-toodles-render.webp";

const twistedToodles: Twisted = {
    slug: "twisted-toodles",
    name: "Twisted Toodles",
    rarity: "uncommon",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "Do not let this Twisted's size fool you. Toodles is a volatile Twisted that chases Toons with her high speed. Thankfully, this Twisted's attention span is rather low, so if you can get out of sight you should be safe from her.",
    trinketReward: "dog-plush",
};

export default twistedToodles;
