import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-bassie-icon.webp";
import render from "../../../../assets/twisteds/twisted-bassie-render.webp";

const twistedBassie: Twisted = {
    slug: "twisted-bassie",
    name: "Twisted Bassie",
    rarity: "main",
    event: "easter",
    iconUrl: icon,
    render: { url: render},
    description: "One of the Holiday Main Characters of Dandy's World. The fear of never living up to other's expectations has caused her to act out in desperation. When occupying a floor, this Twisted grows Ichor-drenched flowers that slow those too close to them, allowing Twisteds a better chance to catch their target. Watch out for her thorns.",
    trinketReward: "whispering-flower",
};

export default twistedBassie;
