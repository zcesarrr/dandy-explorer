import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-gourdy-icon.webp";
import render from "../../../../assets/twisteds/twisted-gourdy-render.webp";

const twistedGourdy: Twisted = {
    slug: "twisted-gourdy",
    name: "Twisted Gourdy",
    rarity: "main",
    event: "halloween",
    iconUrl: icon,
    render: { url: render },
    description: "One of the Holiday Main Characters of Dandy's World. Unstable and on the verge of being overcome by Ichor. If Toons fail to appease him, he reacts in blinded distress, reaching an uncontrollable state where his heightened speed and awareness make an escape nearly impossible.",
    trinketReward: "memory-locket",
};

export default twistedGourdy;
