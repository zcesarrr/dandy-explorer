import type { Icon } from "@solar-icons/react/lib/types";
import { HeartIcon } from "@solar-icons/react/bold/heart";
import { HeartCrackIcon } from "@solar-icons/react/bold/heart-crack";
import { StarIcon } from "@solar-icons/react/bold/star";
import type { IconId } from "../types/icons";

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
} satisfies Record<IconId, { node: Icon, alt: string }>;

export default ICONS;
