import type { Trinket } from "../types/trinkets.types";
import alarm from "./items/alarm";
import blueBandana from "./items/blueBandana";
import blushyBat from "./items/blushyBat";
import bone from "./items/bone";
import boneNeedle from "./items/boneNeedle";
import brick from "./items/brick";
import cardboardArmor from "./items/cardboardArmor";
import cherisedBlanket from "./items/cherishedBlanket";
import clownHorn from "./items/clownHorn";
import coal from "./items/coal";
import coinPurse from "./items/coinPurse";
import cooler from "./items/cooler";
import crayonSet from "./items/crayonSet";
import dandyPlush from "./items/dandyPlush";
import diary from "./items/diary";
import dogPlush from "./items/dogPlush";
import eggRadar from "./items/eggRadar";
import fancyPurse from "./items/fancyPurse";
import featherDuster from "./items/featherDuster";
import festiveLights from "./items/festiveLights";
import fishingRod from "./items/fishingRod";
import friendshipBracelet from "./items/friendshipBracelet";
import ghostSnakes from "./items/ghostSnakes";
import glazedBag from "./items/glazedBag";
import luckyCoin from "./items/luckyCoin";
import machineManual from "./items/machineManual";
import magnifyingGlass from "./items/magnifyingGlass";
import megaphone from "./items/megaphone";
import memoryLocket from "./items/memoryLocket";
import mimeMakeup from "./items/mimeMakeup";
import moonPack from "./items/moonPack";
import paintBucket from "./items/paintBucket";
import participationAward from "./items/participationAward";
import partyPopper from "./items/partyPopper";
import peppermintIcing from "./items/peppermintIcing";
import pinkBow from "./items/pinkBow";
import popPack from "./items/popPack";
import pullToy from "./items/pullToy";
import researchMap from "./items/researchMap";
import ribbonSpool from "./items/ribbonSpool";
import savoryCharm from "./items/savoryCharm";
import scrapbook from "./items/scrapbook";
import soulSword from "./items/soulSword";
import spareBulb from "./items/spareBulb";
import speedometer from "./items/speedometer";
import speedyShoes from "./items/speedyShoes";
import starPillow from "./items/starPillow";
import stressBall from "./items/stressBall";
import sweetCharm from "./items/sweetCharm";
import thermos from "./items/thermos";
import thinkingCap from "./items/thinkingCap";
import toyKit from "./items/toyKit";
import trainWhistle from "./items/trainWhistle";
import vanityMirror from "./items/vanityMirror";
import veesRemote from "./items/veesRemote";
import whisperingFlower from "./items/whisperingFlower";
import wrench from "./items/wrench";

const TRINKETS: Trinket[] = [
    starPillow,
    dandyPlush,
    whisperingFlower,
    wrench,
    pullToy,
    thinkingCap,
    diary,
    paintBucket,
    clownHorn,
    brick,
    featherDuster,
    partyPopper,
    spareBulb,
    ghostSnakes,
    sweetCharm,
    eggRadar,
    boneNeedle,
    festiveLights,
    scrapbook,
    peppermintIcing,
    soulSword,
    glazedBag,
    coal,
    moonPack,
    toyKit,
    memoryLocket,
    coinPurse,
    researchMap,
    machineManual,
    speedyShoes,
    speedometer,
    alarm,
    thermos,
    popPack,
    megaphone,
    cooler,
    cardboardArmor,
    crayonSet,
    trainWhistle,
    blueBandana,
    pinkBow,
    fishingRod,
    ribbonSpool,
    magnifyingGlass,
    fancyPurse,
    dogPlush,
    mimeMakeup,
    luckyCoin,
    blushyBat,
    vanityMirror,
    friendshipBracelet,
    stressBall,
    cherisedBlanket,
    bone,
    participationAward,
    savoryCharm,
    veesRemote,
] as const satisfies Trinket[];

export default TRINKETS;
