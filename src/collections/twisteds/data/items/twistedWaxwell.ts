import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-waxwell-icon.webp";
import render from "../../../../assets/twisteds/twisted-waxwell-render.webp";

const twistedWaxwell: Twisted = {
    slug: "twisted-waxwell",
    name: "Twisted Waxwell",
    rarity: "rare",
    event: "none",
    iconUrl: icon,
    render: { url: render, offsetX: "10px" },
    description: "This timid Twisted avoids Toons rather than chases after them. His flame steadily builds over time, but stops when any Toon is nearby. At full flame, he leaves a trail behind that grants other Twisteds the Ignited buff, increasing their vision radius and reducing their hit cooldown. This buff does not stack.",
    trinketReward: "cherished-blanket",
};

export default twistedWaxwell;
