import heartIcon from "../assets/icons/heart.svg";
import starIcon from "../assets/icons/star.svg";

const ICONS = {
    heart: {
        path: heartIcon,
        alt: "Heart Icon",
    },
    star: {
        path: starIcon,
        alt: "Star Icon",
    },
} satisfies Record<string, { path: string, alt: string }>;

export default ICONS;
