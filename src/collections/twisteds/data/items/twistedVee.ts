import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-vee-icon.webp";
import render from "../../../../assets/twisteds/twisted-vee-render.webp";

const twistedVee: Twisted = {
    slug: "twisted-vee",
    name: "Twisted Vee",
    rarity: "main",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "One of the Main Characters of Dandy's World. This Twisted has eyes everywhere, messing up Machines would not be advised. She will also attempt to distract Toons with worthless ads and pop-ups while she goes for the kill.",
    trinketReward: "vees-remote",
};

export default twistedVee;
