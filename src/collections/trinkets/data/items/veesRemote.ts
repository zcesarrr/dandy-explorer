import type { Trinket } from "../../types/trinkets.types";
import icon from "../../../../assets/trinkets/vees-remote.webp";

const veesRemote: Trinket = {
    slug: "vees-remote",
    name: "Vee's Remote",
    iconUrl: icon,
    description: "Instantly completes the first Machine you extract from on any Floor, but only if the number of Machines completed is below 50%. Limit of 1 activation per Floor.",
    category: "extSpeed",
    event: "none",
    rarity: "main",
    holder: { type: "research", params: { count: 100, twisted: "twisted-vee" } },
};

export default veesRemote;
