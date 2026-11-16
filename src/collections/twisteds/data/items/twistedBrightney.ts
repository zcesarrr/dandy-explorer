import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-brightney-icon.webp";
import render from "../../../../assets/twisteds/twisted-brightney-render.webp";

const twistedBrightney: Twisted = {
    slug: "twisted-brightney",
    name: "Twisted Brightney",
    rarity: "uncommon",
    event: "none",
    iconUrl: icon,
    render: { url: render},
    description: "A more uncommon Twisted, Brightney uses her knowledge and cunning to tamper with the lighting system, increasing the chance of a Blackout occuring on the Floor she resides in. Be sure to come prepared if this happens!",
    trinketReward: "spare-bulb",
};

export default twistedBrightney;
