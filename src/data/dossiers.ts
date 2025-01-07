import {DOSSIER as NIX_DOSSIER} from "./nix";
import {DOSSIER as GEO_DOSSIER} from "./geo"
import {ProjectCardType} from "../types";

const dossiers =
    Object.fromEntries([
        [NIX_DOSSIER.pathName, NIX_DOSSIER],
        [GEO_DOSSIER.pathName, GEO_DOSSIER]
    ]);

const dossiersArray = Object.values(dossiers) as ProjectCardType[];

export {dossiers, dossiersArray};
