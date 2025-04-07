import {DOSSIER as NIX_DOSSIER} from "./nix";
import {DOSSIER as GEO_DOSSIER} from "./geo"
import {DOSSIER as GRAPHICS2D_DOSSIER} from "./2Dgraphics";
import {DOSSIER as GRAPHICS3D_DOSSIER} from "./3Dgraphics";
import {DOSSIER as VIDEO_DOSSIER} from "./video";
import {DOSSIER as GAMES_DOSSIER} from "./games";
import {DOSSIER as AUDIO_DOSSIER} from "./audio";
import {DOSSIER as OFFICE_DOSSIER} from "./office";
import {DOSSIER as COMPRESSION_DOSSIER} from "./compression";
import {DOSSIER as SELF_HOSTED_DOSSIER} from "./self-hosted";
import {DOSSIER as PCB_DOSSIER} from "./pcb";
import {DOSSIER as VULKAN_DOSSIER} from "./vulkan";
import {DOSSIER as ROS_DOSSIER} from "./ros";
import {DOSSIER as OPEN_DATA_DOSSIER} from "./open-data";

import {ProjectCardType} from "../types";
import {DossierType} from "../types/DossierType";

const dossiers = {
    [NIX_DOSSIER.pathName]: NIX_DOSSIER,
    [GEO_DOSSIER.pathName]: GEO_DOSSIER,
    [GRAPHICS2D_DOSSIER.pathName]: GRAPHICS2D_DOSSIER,
    [GRAPHICS3D_DOSSIER.pathName]: GRAPHICS3D_DOSSIER,
    [VIDEO_DOSSIER.pathName]: VIDEO_DOSSIER,
    [GAMES_DOSSIER.pathName]: GAMES_DOSSIER,
    [AUDIO_DOSSIER.pathName]: AUDIO_DOSSIER,
    [OFFICE_DOSSIER.pathName]: OFFICE_DOSSIER,
    [COMPRESSION_DOSSIER.pathName]: COMPRESSION_DOSSIER,
    [SELF_HOSTED_DOSSIER.pathName]: SELF_HOSTED_DOSSIER,
    [PCB_DOSSIER.pathName]: PCB_DOSSIER,
    [VULKAN_DOSSIER.pathName]: VULKAN_DOSSIER,
    [ROS_DOSSIER.pathName]: ROS_DOSSIER,
    [OPEN_DATA_DOSSIER.pathName]: OPEN_DATA_DOSSIER
} as {[pathName: string]: DossierType}

const dossiersArray = Object.values(dossiers) as ProjectCardType[];

export {dossiers, dossiersArray};
