import type { Icon } from "@solar-icons/react/lib/types";
import type { IconId } from "../types/icons";
import { HeartIcon } from "@solar-icons/react/bold/heart";
import { HeartCrackIcon } from "@solar-icons/react/bold/heart-crack";
import { StarIcon } from "@solar-icons/react/bold/star";
import { MedalRibbonStarIcon } from "@solar-icons/react/bold/medal-ribbon-star";
import { KeyIcon } from "@solar-icons/react/bold/key";
import { HandStarsIcon } from "@solar-icons/react/bold/hand-stars";

const ICONS = {
    heart: {
        node: HeartIcon,
        alt: "Heart Icon",
    },
    heartBroken: {
        node: HeartCrackIcon,
        alt: "Heart Broken Icon",
    },
    star: {
        node: StarIcon,
        alt: "Star Icon",
    },
    medal: {
        node: MedalRibbonStarIcon,
        alt: "Medal Icon",
    },
    key: {
        node: KeyIcon,
        alt: "Key Icon",
    },
    handStars: {
        node: HandStarsIcon,
        alt: "Hand Stars Icon",
    },
    
} satisfies Record<IconId, { node: Icon, alt: string }>;

export default ICONS;
