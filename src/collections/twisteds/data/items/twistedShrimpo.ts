import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-shrimpo-icon.webp";
import render from "../../../../assets/twisteds/twisted-shrimpo-render.webp";

const twistedShrimpo: Twisted = {
    slug: "twisted-shrimpo",
    name: "Twisted Shrimpo",
    rarity: "common",
    event: "none",
    iconUrl: icon,
    render: { url: render},
    description: "While this Twisted is more common than others, Shrimpo is not to be messed with. Overcome by Ichor, this Twisted's bullying has become deadly. He may be slower than the average Twisted, but he has trained eyesight for Toons to bully. Don't get caught!",
    trinketReward: "brick",
};

export default twistedShrimpo;
