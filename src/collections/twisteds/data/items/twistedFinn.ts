import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-finn-icon.webp";
import render from "../../../../assets/twisteds/twisted-finn-render.webp";

const twistedFinn: Twisted = {
    slug: "twisted-finn",
    name: "Twisted Finn",
    rarity: "uncommon",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "This Twisted is filled to the brim with Ichor and uncontrolled vigor. Finn makes up for his lack of mobility by pouring ichor around the map. Watch out for his Twisted sidekick Barnaby!",
    trinketReward: "fishing-rod",
};

export default twistedFinn;
