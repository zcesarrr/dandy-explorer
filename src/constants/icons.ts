import type { IconEntry } from "../types/icons";
import { HeartIcon } from "@solar-icons/react/bold/heart";
import { HeartCrackIcon } from "@solar-icons/react/bold/heart-crack";
import { StarIcon } from "@solar-icons/react/bold/star";
import { MedalRibbonStarIcon } from "@solar-icons/react/bold/medal-ribbon-star";
import { KeyIcon } from "@solar-icons/react/bold/key";
import { HandStarsIcon } from "@solar-icons/react/bold/hand-stars";
import { WaterdropIcon } from "@solar-icons/react/bold/waterdrop";
import { UserRoundedIcon } from "@solar-icons/react/bold/user-rounded";
import { QuestionCircleIcon } from "@solar-icons/react/bold/question-circle";
import { DiplomaIcon } from "@solar-icons/react/bold/diploma";
import {  AltArrowLeftIcon } from "@solar-icons/react/bold/alt-arrow-left";
import {  CloseIcon } from "@solar-icons/react/bold/close";
import { LoaderIcon } from "@solar-icons/react/bold/loader";
import PumpkinIcon from "../components/icons/PumpkinIcon";
import EasterEggIcon from "../components/icons/EasterEggIcon";
import OrnamentIcon from "../components/icons/OrnamentIcon";
import MagnifierIcon from "../components/icons/MagnifierIcon";

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
    waterdrop: {
        node: WaterdropIcon,
        alt: "Waterdrop Icon",
    },
    person: {
        node: UserRoundedIcon,
        alt: "Person Icon",
    },
    magnifier: {
        node: MagnifierIcon,
        alt: "Magnifier Icon",
    },
    question: {
        node: QuestionCircleIcon,
        alt: "Question Mark Icon",
    },
    diploma: {
        node: DiplomaIcon,
        alt: "Diploma Icon",
    },
    pumpkin: {
        node: PumpkinIcon,
        alt: "Pumpkin Icon",
    },
    easterEgg: {
        node: EasterEggIcon,
        alt: "Easter Egg Icon",
    },
    ornament: {
        node: OrnamentIcon,
        alt: "Ornament Icon",
    },
    leftArrow: {
        node: AltArrowLeftIcon,
        alt: "Left Arrow Icon",
    },
    cross: {
        node: CloseIcon,
        alt: "Cross Icon",
    },
    loader: {
        node: LoaderIcon,
        alt: "Loader Icon",
    },
    
} as const satisfies Record<string, IconEntry>;

export default ICONS;
