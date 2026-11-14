import createImageIcon from "./createImageIcon";
import skillCheck from "../../assets/stats/skill-check-icon.webp";
import moveSpeed from "../../assets/stats/movement-speed-icon.webp";
import stamina from "../../assets/stats/stamina-icon.webp";
import stealth from "../../assets/stats/stealth-icon.webp";
import extraction from "../../assets/stats/extraction-speed-icon.webp";
import other from "../../assets/stats/other-icon.webp";

export const SkillCheckIcon = createImageIcon(skillCheck, "Minimalist light bulb");
export const MovementSpeedIcon = createImageIcon(moveSpeed, "Minimalist shoe boots");
export const StaminaIcon = createImageIcon(stamina, "Minimalist bolt");
export const StealthIcon = createImageIcon(stealth, "Minimalist single eye");
export const ExtractionSpeedIcon = createImageIcon(extraction, "Minimalist ichor drop");
export const OtherIcon = createImageIcon(other, "Triple dots");
