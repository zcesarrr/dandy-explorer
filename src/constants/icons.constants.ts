import type { IconComponent } from "../types/icons.types";
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
import { LightbulbBoltIcon } from "@solar-icons/react/bold/lightbulb-bolt";
import { SettingsIcon } from "@solar-icons/react/bold/settings";
import { StarCircleIcon } from "@solar-icons/react/bold/star-circle";
import PumpkinIcon from "../components/icons/customs/PumpkinIcon";
import EasterEggIcon from "../components/icons/customs/EasterEggIcon";
import OrnamentIcon from "../components/icons/customs/OrnamentIcon";
import MagnifierIcon from "../components/icons/customs/MagnifierIcon";
import CandyIcon from "../components/icons/customs/CandyIcon";
import { ArtisticInspirationIcon, BakedSweetsIcon, BakedWithCareIcon, BlotJrIcon, CraftyGrappleIcon, DistressedDelicacyIcon, HauntingEscapeIcon, MicCheckIcon, NapTimeIcon, NightLightIcon, PreciousPackagingIcon, SurpriseIcon, TidyUpIcon, TrickOrTreatIcon, SpringfulSharingIcon, FloatyDashIcon, IgniteIcon, InspirationIcon, SharingIsCaringIcon, SpeakIcon, HugIcon, ReflectionIcon, TeaTimeIcon, BeginnersLuckIcon, ScoutIcon, BonbonIcon, GustIcon, AntlerChargeIcon, SoulShieldIcon } from "../components/icons/abilitiesIcons";
import { ExtractionSpeedIcon, MovementSpeedIcon, OtherIcon, SkillCheckIcon, StaminaIcon, StealthIcon } from "../components/icons/statsIcons";
import { ClipboardIcon } from "@solar-icons/react/bold/clipboard";
import { MoonIcon } from "@solar-icons/react/bold/moon";
import { ShopMinimalisticIcon } from "@solar-icons/react/bold/shop-minimalistic";
import { WrenchIcon } from "@solar-icons/react/bold/wrench";

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
    lightbulbBolt: LightbulbBoltIcon,
    gear: SettingsIcon,
    napTime: NapTimeIcon,
    springfulSharing: SpringfulSharingIcon,
    craftyGrapple: CraftyGrappleIcon,
    preciousPackaging: PreciousPackagingIcon,
    trickOrTreat: TrickOrTreatIcon,
    bakedSweets: BakedSweetsIcon,
    micCheck: MicCheckIcon,
    blotJr: BlotJrIcon,
    nightLight: NightLightIcon,
    artisticInspiration: ArtisticInspirationIcon,
    hauntingEscape: HauntingEscapeIcon,
    surprise: SurpriseIcon,
    bakedWithCare: BakedWithCareIcon,
    distressedDelicacy: DistressedDelicacyIcon,
    tidyUp: TidyUpIcon,
    sharingIsCaring: SharingIsCaringIcon,
    floatyDash: FloatyDashIcon,
    speak: SpeakIcon,
    inspiration: InspirationIcon,
    ignite: IgniteIcon,
    starCircle: StarCircleIcon,
    skillCheck: SkillCheckIcon,
    movementSpeed: MovementSpeedIcon,
    stamina: StaminaIcon,
    stealth: StealthIcon,
    extractionSpeed: ExtractionSpeedIcon,
    other: OtherIcon,
    hug: HugIcon,
    clipboard: ClipboardIcon,
    moon: MoonIcon,
    reflection: ReflectionIcon,
    teaTime: TeaTimeIcon,
    shop: ShopMinimalisticIcon,
    beginnersLuck: BeginnersLuckIcon,
    scout: ScoutIcon,
    bonbon: BonbonIcon,
    gust: GustIcon,
    antlerCharge: AntlerChargeIcon,
    soulShield: SoulShieldIcon,
    wrench: WrenchIcon,
} as const satisfies Record<string, IconComponent>;

export default ICONS;
