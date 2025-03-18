import {DOSSIER as NIX_DOSSIER} from "./nix";
import {DOSSIER as GEO_DOSSIER} from "./geo"
import {DOSSIER as GRAPHICS_DOSSIER} from "./graphicAndMultimedia";
import {DOSSIER as OFFICE_DOSSIER} from "./office";
import {DOSSIER as COMPRESSION_DOSSIER} from "./compression";
import {DOSSIER as SELF_HOSTED_DOSSIER} from "./self-hosted";
import {DOSSIER as PCB_DOSSIER} from "./pcb";
import {DOSSIER as VULKAN_DOSSIER} from "./vulkan";
import {DOSSIER as ROS_DOSSIER} from "./ros"

import {ProjectCardType} from "../types";
import {DossierType} from "../types/DossierType";

const dossiers = {
    [NIX_DOSSIER.pathName]: NIX_DOSSIER,
    [GEO_DOSSIER.pathName]: GEO_DOSSIER,
    [GRAPHICS_DOSSIER.pathName]: GRAPHICS_DOSSIER,
    [OFFICE_DOSSIER.pathName]: OFFICE_DOSSIER,
    [COMPRESSION_DOSSIER.pathName]: COMPRESSION_DOSSIER,
    [SELF_HOSTED_DOSSIER.pathName]: SELF_HOSTED_DOSSIER,
    [PCB_DOSSIER.pathName]: PCB_DOSSIER,
    [VULKAN_DOSSIER.pathName]: VULKAN_DOSSIER,
    [ROS_DOSSIER.pathName]: ROS_DOSSIER
} as {[pathName: string]: DossierType}

const dossiersArray = Object.values(dossiers) as ProjectCardType[];

export {dossiers, dossiersArray};
