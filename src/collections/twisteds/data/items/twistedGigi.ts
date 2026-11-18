import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-gigi-icon.webp";
import render from "../../../../assets/twisteds/twisted-gigi-render.webp";

const twistedGigi: Twisted = {
    slug: "twisted-gigi",
    name: "Twisted Gigi",
    rarity: "rare",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "f you have your hands full with items, this Twisted is your worst nightmare. Gigi has the ability to reach out and snatch items from afar. Everything she gathers is hoarded inside her gachapon stash. Search the stash to win your belongings back!",
    trinketReward: "lucky-coin",
};

export default twistedGigi;
