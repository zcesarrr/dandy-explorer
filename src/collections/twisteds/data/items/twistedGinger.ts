import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-ginger-icon.webp";
import render from "../../../../assets/twisteds/twisted-ginger-render.webp";

const twistedGinger: Twisted = {
    slug: "twisted-ginger",
    name: "Twisted Ginger",
    rarity: "uncommon",
    event: "holiday",
    iconUrl: icon,
    render: { url: render },
    description: "This Twisted may be slow, but don't let your guard down too quickly! She is relentless in tracking her targets down with a notable persistence. Make sure you stay of sight long enough to lose her interest!",
    trinketReward: "peppermint-icing",
};

export default twistedGinger;
