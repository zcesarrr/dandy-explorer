import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-tisha-icon.webp";
import render from "../../../../assets/twisteds/twisted-tisha-render.webp";

const twistedTisha: Twisted = {
    slug: "twisted-tisha",
    name: "Twisted Tisha",
    rarity: "common",
    event: "none",
    iconUrl: icon,
    render: { url: render},
    description: "This commonly seen Twisted is most often spotted moving from place to place spending a considerably long time cleaning the floor. No matter how hard she tries to clean ichor puddles, the mess only seems to grow. Interrupting her work would not be wise!",
    trinketReward: "feather-duster",
};

export default twistedTisha;
