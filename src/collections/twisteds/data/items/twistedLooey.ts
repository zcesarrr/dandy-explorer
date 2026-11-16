import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-looey-icon.webp";
import render from "../../../../assets/twisteds/twisted-looey-render.webp";

const twistedLooey: Twisted = {
    slug: "twisted-looey",
    name: "Twisted Looey",
    rarity: "common",
    event: "none",
    iconUrl: icon,
    render: { url: render},
    description: "While this Twisted is more common than others, Looey is still a dangerous foe. Overcome with Ichor his physical changes have provided him a higher point of view compared to other common Twisteds, able to see further and retain attention within chase for longer periods of time.",
    trinketReward: "clown-horn",
};

export default twistedLooey;
