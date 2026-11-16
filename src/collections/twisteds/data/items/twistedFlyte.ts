import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-flyte-icon.webp";
import render from "../../../../assets/twisteds/twisted-flyte-render.webp";

const twistedFlyte: Twisted = {
    slug: "twisted-flyte",
    name: "Twisted Flyte",
    rarity: "uncommon",
    event: "easter",
    iconUrl: icon,
    render: { url: render, offsetX: "-5px" },
    description: "This Twisted is as dangerous as it is agile, similar to Twisted Flutter. This Twisted uses wings to quickly patrol a floor, never stopping to rest, though he is unable to match the exact speeds of Twisted Flutter.",
    trinketReward: "scrapbook",
};

export default twistedFlyte;
