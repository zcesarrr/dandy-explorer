import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-glisten-icon.webp";
import render from "../../../../assets/twisteds/twisted-glisten-render.webp";

const twistedGlisten: Twisted = {
    slug: "twisted-glisten",
    name: "Twisted Glisten",
    rarity: "rare",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "This Twisted has had his sturdy ego completely shattered, and is on the verge of being overcome by Ichor. His fear and loneliness should be treated by being by his side. It is not advised to leave him to succumb to his affliction.",
    trinketReward: "vanity-mirror",
};

export default twistedGlisten;
