import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-goob-icon.webp";
import render from "../../../../assets/twisteds/twisted-goob-render.webp";

const twistedGoob: Twisted = {
    slug: "twisted-goob",
    name: "Twisted Goob",
    rarity: "rare",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "Underestimating this Twisted's capabilities will be fatal. This Twisted is quite dangerous, due to his ability to outstretch his arms and snatch up Toons. If you spot this Twisted, get out of sight as soon as possible!",
    trinketReward: "friendship-bracelet",
};

export default twistedGoob;
