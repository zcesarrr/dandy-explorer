import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-dyle-icon.webp";
import render from "../../../../assets/twisteds/twisted-dyle-render.webp";

const twistedDyle: Twisted = {
    slug: "twisted-dyle",
    name: "Twisted Dyle",
    rarity: "lethal",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "A character never seen within the show of Dandy's World. The one who operates and oversees Gardenview's transportation. He's seen the outside.",
    trinketReward: "train-whistle",
};

export default twistedDyle;
