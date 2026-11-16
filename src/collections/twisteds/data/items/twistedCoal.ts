import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-coal-icon.webp";
import render from "../../../../assets/twisteds/twisted-coal-render.webp";

const twistedCoal: Twisted = {
    slug: "twisted-coal",
    name: "Twisted Coal",
    rarity: "rare",
    event: "holiday",
    iconUrl: icon,
    render: { url: render, offsetY: "25px" },
    description: "This Twisted is not difficult to deal with in most scenarios, though within the event of a blackout she will be a dangerous encounter that may lead to one's early demise. With heightened speed, it's best to steer clear of her in the dark.",
    trinketReward: "coal",
};

export default twistedCoal;
