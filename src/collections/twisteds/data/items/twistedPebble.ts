import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-pebble-icon.webp";
import render from "../../../../assets/twisteds/twisted-pebble-render.webp";

const twistedPebble: Twisted = {
    slug: "twisted-pebble",
    name: "Twisted Pebble",
    rarity: "main",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "One of the Main Characters of Dandy's World. This ferocious Twisted will stop at nothing to defend his owner and protect his territory. Highly dangerous due to his immense speed and powerful eyesight.",
    trinketReward: "bone",
};

export default twistedPebble;
