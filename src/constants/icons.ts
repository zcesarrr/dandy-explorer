import type { IconComponent } from "../types/icons";
import { HeartIcon } from "@solar-icons/react/bold/heart";
import { StarIcon } from "@solar-icons/react/bold/star";
import { HeartCrackIcon } from "@solar-icons/react/bold/heart-crack";
import { MedalRibbonStarIcon } from "@solar-icons/react/bold/medal-ribbon-star";
import { KeyIcon } from "@solar-icons/react/bold/key";
import { HandStarsIcon } from "@solar-icons/react/bold/hand-stars";
import { WaterdropIcon } from "@solar-icons/react/bold/waterdrop";
import { UserRoundedIcon } from "@solar-icons/react/bold/user-rounded";
import { QuestionCircleIcon } from "@solar-icons/react/bold/question-circle";
import { DiplomaIcon } from "@solar-icons/react/bold/diploma";
import {  AltArrowLeftIcon } from "@solar-icons/react/bold/alt-arrow-left";
import {  CloseIcon } from "@solar-icons/react/bold/close";
import { FilterIcon } from "@solar-icons/react/bold/filter";
import { SortFromBottomToTopIcon } from "@solar-icons/react/bold/sort-from-bottom-to-top";
import PumpkinIcon from "../components/icons/PumpkinIcon";
import EasterEggIcon from "../components/icons/EasterEggIcon";
import OrnamentIcon from "../components/icons/OrnamentIcon";
import MagnifierIcon from "../components/icons/MagnifierIcon";
import CandyIcon from "../components/icons/CandyIcon";

const ICONS = {
    heart: HeartIcon,
    heartBroken: HeartCrackIcon,
    star: StarIcon,
    medal: MedalRibbonStarIcon,
    key: KeyIcon,
    handStars: HandStarsIcon,
    waterdrop: WaterdropIcon,
    person: UserRoundedIcon,
    magnifier: MagnifierIcon,
    question: QuestionCircleIcon,
    diploma: DiplomaIcon,
    pumpkin: PumpkinIcon,
    easterEgg: EasterEggIcon,
    ornament: OrnamentIcon,
    leftArrow: AltArrowLeftIcon,
    cross: CloseIcon,
    filter: FilterIcon,
    sort: SortFromBottomToTopIcon,
    candy: CandyIcon,
} as const satisfies Record<string, IconComponent>;

export default ICONS;
