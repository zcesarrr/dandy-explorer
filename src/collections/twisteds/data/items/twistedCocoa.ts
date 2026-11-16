import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-cocoa-icon.webp";
import render from "../../../../assets/twisteds/twisted-cocoa-render.webp";

const twistedCocoa: Twisted = {
    slug: "twisted-cocoa",
    name: "Twisted Cocoa",
    rarity: "rare",
    event: "easter",
    iconUrl: icon,
    render: { url: render},
    description: "Don't underestimate this Twisted. While often patrolling at a slower pace she will quickly speed up by hopping towards her target, often over objects. Thankfully, her attention can drop almost as quickly.",
    trinketReward: "glazed-fondant-bag",
};

export default twistedCocoa;
