import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-teagan-icon.webp";
import render from "../../../../assets/twisteds/twisted-teagan-render.webp";

const twistedTeagan: Twisted = {
    slug: "twisted-teagan",
    name: "Twisted Teagan",
    rarity: "uncommon",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "A more uncommon Twisted, Teagan has let her greed take over. This Twisted will steal a considerable amount of a Toon's Tapes when she attacks them. Be sure to spend your Tapes while you have them!",
    trinketReward: "fancy-purse",
};

export default twistedTeagan;
