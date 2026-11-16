import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-rudie-icon.webp";
import render from "../../../../assets/twisteds/twisted-rudie-render.webp";

const twistedRudie: Twisted = {
    slug: "twisted-rudie",
    name: "Twisted Rudie",
    rarity: "common",
    event: "holiday",
    iconUrl: icon,
    render: { url: render, offsetX: "-16px" },
    description: "One of the most common Twisteds you'll encounter. Overcome by Ichor, this Twisted has the innate urge to chase others down. Thankfully, it appears that this Twisted doesn't have any abilities to aid him.",
    trinketReward: "festive-lights",
};

export default twistedRudie;
