import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-squirm-icon.webp";
import render from "../../../../assets/twisteds/twisted-squirm-render.webp";

const twistedSquirm: Twisted = {
    slug: "twisted-squirm",
    name: "Twisted Squirm",
    rarity: "rare",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "This ravenous Twisted hangs from the ceiling looking for books to eat. Look up, or you might just end up in this Twisted's grip. if caught, your best chance is to struggle free before it's too late.",
    trinketReward: "stress-ball",
};

export default twistedSquirm;
