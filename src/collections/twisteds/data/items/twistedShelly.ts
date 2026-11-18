import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-shelly-icon.webp";
import render from "../../../../assets/twisteds/twisted-shelly-render.webp";

const twistedShelly: Twisted = {
    slug: "twisted-shelly",
    name: "Twisted Shelly",
    rarity: "main",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "One of the Main Characters of Dandy's World. The blatant ignorance of her existence by everyone around her has enraged her. Her presence makes every Toon extract slower, and she uses her form to her advantage in terms of speed.",
    trinketReward: "participation-award",
};

export default twistedShelly;
