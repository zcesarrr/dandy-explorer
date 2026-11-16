import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-soulvester-icon.webp";
import render from "../../../../assets/twisteds/twisted-soulvester-render.webp";

const twistedSoulvester: Twisted = {
    slug: "twisted-soulvester",
    name: "Twisted Soulvester",
    rarity: "uncommon",
    event: "halloween",
    iconUrl: icon,
    render: { url: render, offsetX: "10px" },
    description: "A more uncommon Twisted, Soulvester is driven by his desire to guard. Often, this Twisted is seen standing guard by machines. He is slower than most Twisteds, but his higher interest time makes him more difficult to lose.",
    trinketReward: "soul-sword",
};

export default twistedSoulvester;
