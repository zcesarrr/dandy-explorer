import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-astro-icon.webp";
import render from "../../../../assets/twisteds/twisted-astro-render.webp";

const twistedAstro: Twisted = {
    slug: "twisted-astro",
    name: "Twisted Astro",
    rarity: "main",
    iconUrl: icon,
    render: { url: render, offsetX: "16px" },
    description: "One of the Main Characters of Dandy's World. Overwhelmed by guilt and despair, his grief pulls others into his nightmare. His chase tires Toons and failed Skill Checks cause him to drain Machines. After a chase he rests and enters a nightmare, where a growing ring exhausts Toons, brings hallucinations, and drains machines. Stop his nightmare by locating his Star Pillows!",
    trinketReward: "star-pillow",
};

export default twistedAstro;
