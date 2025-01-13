import {DOSSIER as NIX_DOSSIER} from "./nix";
import {DOSSIER as GEO_DOSSIER} from "./geo"
import {DOSSIER as GRAPHICS_DOSSIER} from "./graphicAndMultimedia";
import {ProjectCardType} from "../types";

const dossiers = {
    [NIX_DOSSIER.pathName]: NIX_DOSSIER,
    [GEO_DOSSIER.pathName]: GEO_DOSSIER,
    [GRAPHICS_DOSSIER.pathName]: GRAPHICS_DOSSIER
}

const dossiersArray = Object.values(dossiers) as ProjectCardType[];

export {dossiers, dossiersArray};
