import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-dandy-icon.webp";
import render from "../../../../assets/twisteds/twisted-dandy-render.webp";

const twistedDandy: Twisted = {
    slug: "twisted-dandy",
    name: "Twisted Dandy",
    rarity: "lethal",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "The star of the show. The one who runs the Ichor operation. It's all his fault.",
    trinketReward: "dandy-plush",
};

export default twistedDandy;
