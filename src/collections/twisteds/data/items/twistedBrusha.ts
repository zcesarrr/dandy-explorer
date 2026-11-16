import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-brusha-icon.webp";
import render from "../../../../assets/twisteds/twisted-brusha-render.webp";

const twistedBrusha: Twisted = {
    slug: "twisted-brusha",
    name: "Twisted Brusha",
    rarity: "common",
    event: "none",
    iconUrl: icon,
    render: { url: render},
    description: "This commonly seen Twisted has a sharp eye and an even sharper paintbrush. Overcome with Ichor, Twisted Brusha's artwork causes Toons to extract slower from affected machines.",
    trinketReward: "paint-bucket",
};

export default twistedBrusha;
