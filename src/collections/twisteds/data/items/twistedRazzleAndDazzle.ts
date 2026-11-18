import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-razzle-and-dazzle-icon.webp";
import render from "../../../../assets/twisteds/twisted-razzle-and-dazzle-render.webp";

const twistedRazzleAndDazzle: Twisted = {
    slug: "twisted-razzle-and-dazzle",
    name: "Twisted Razzle & Dazzle",
    rarity: "uncommon",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "Be sure to tread lightly around this Twisted, or you will regret it. This Twisted will wake up and attack Toons that sprint past. If left undisturbed, they will fall back asleep. Walk slow and cautiously around them.",
    trinketReward: "ribbon-spool",
};

export default twistedRazzleAndDazzle;
