import heartIcon from "../assets/icons/heart.svg";
import heartBrokenIcon from "../assets/icons/heart-broken.svg";
import starIcon from "../assets/icons/star.svg";

const ICONS = {
    heart: {
        path: heartIcon,
        alt: "Heart Icon",
    },
    heartBroken: {
        path: heartBrokenIcon,
        alt: "Heart Broken Icon",
    },
    star: {
        path: starIcon,
        alt: "Star Icon",
    },
} satisfies Record<string, { path: string, alt: string }>;

export default ICONS;
