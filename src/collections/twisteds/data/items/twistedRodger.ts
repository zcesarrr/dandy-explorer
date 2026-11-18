import type { Twisted } from "../../types/twisteds.types";
import icon from "../../../../assets/twisteds/twisted-rodger-icon.webp";
import render from "../../../../assets/twisteds/twisted-rodger-render.webp";

const twistedRodger: Twisted = {
    slug: "twisted-rodger",
    name: "Twisted Rodger",
    rarity: "uncommon",
    event: "none",
    iconUrl: icon,
    render: { url: render },
    description: "This deceptive Twisted lures unsuspecting Toons with the promise of knowledge. When the opportunity strikes, this Twisted rises from the ground and attacks any Toon who ventures too close. Be sure to have a keen and careful eye!",
    trinketReward: "magnifying-glass",
};

export default twistedRodger;
