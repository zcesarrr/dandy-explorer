import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-scraps-icon.webp";
import render from "../../../../assets/twisteds/twisted-scraps-render.webp";

const twistedScraps: Twisted = {
    slug: "twisted-scraps",
    name: "Twisted Scraps",
    rarity: "rare",
    event: "none",
    iconUrl: icon,
    render: { url: render, offsetX: "-20px" },
    description: "This Twisted is similar to her brother Goob in terms of abilities. She possesses a snake-like tail that she can outstretch and attack Toons from a great distance. Be sure to get out of sight when you see her!",
    trinketReward: "crayon-set",
};

export default twistedScraps;
