import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-blot-icon.webp";
import render from "../../../../assets/twisteds/twisted-blot-render.webp";

const twistedBlot: Twisted = {
    slug: "twisted-blot",
    name: "Twisted Blot",
    rarity: "rare",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "This silent Twisted conserves its energy by staying in one place. When his arms vanish underground, colossal hands emerge elsewhere, striking any Toon who dares approach.",
    trinketReward: "mime-makeup",
};

export default twistedBlot;
