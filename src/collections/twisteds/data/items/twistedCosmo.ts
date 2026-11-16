import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-cosmo-icon.webp";
import render from "../../../../assets/twisteds/twisted-cosmo-render.webp";

const twistedCosmo: Twisted = {
    slug: "twisted-cosmo",
    name: "Twisted Cosmo",
    rarity: "common",
    event: "none",
    iconUrl: icon,
    render: { url: render},
    description: "One of the most common Twisteds you'll encounter. Being overcome by Ichor and separated from his best friend has driven this Twisted to chase Toons down. It appears this Twisted lacks any noteworthy abilities, however.",
    trinketReward: "sweet-charm",
};

export default twistedCosmo;
