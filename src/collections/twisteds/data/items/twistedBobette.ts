import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-bobette-icon.webp";
import render from "../../../../assets/twisteds/twisted-bobette-render.webp";

const twistedBobette: Twisted = {
    slug: "twisted-bobette",
    name: "Twisted Bobette",
    rarity: "main",
    event: "holiday",
    iconUrl: icon,
    render: { url: render },
    description: "One of the Holiday Main Characters of Dandy's World. Created to craft toys for everyone has left her envious. If not preoccupied she will break into full sprint at the sound of picking up an item in hopes of catching whoever she finds greedy. Be mindful, her speeds are hard to escape.",
    trinketReward: "toy-kit",
};

export default twistedBobette;
