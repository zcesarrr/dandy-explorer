import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-connie-icon.webp";
import render from "../../../../assets/twisteds/twisted-connie-render.webp";

const twistedConnie: Twisted = {
    slug: "twisted-connie",
    name: "Twisted Connie",
    rarity: "uncommon",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "A more uncommon Twisted, Connie prefers to spend her time alone focused on possessing Ichor Machines. This activity fills her sense of purpose within Gardenview. When roaming she is harmless, though if disturbed while busy possessing a machine she becomes aggressive and will attack, remember she can't possess a machine forever.",
    trinketReward: "ghost-snakes-in-a-can",
};

export default twistedConnie;
