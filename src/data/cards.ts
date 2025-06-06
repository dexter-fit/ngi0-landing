import {ProjectCardType} from "../types";
import {dossiers, dossiersArray} from "./dossiers";

const compare = (a: ProjectCardType, b: ProjectCardType) => {
    const headerA = a.header.toUpperCase();
    const headerB = b.header.toUpperCase();

    if (headerA < headerB) {
        return -1;
    }
    if (headerA > headerB) {
        return 1;
    }
    return 0;
}

const getCards = (dossier?: string): ProjectCardType[] => {
    if (dossier) {
        switch (dossier) {
            case "projects":
                return dossiersArray.flatMap((item: any) => item.cards).sort(compare);
            default:
                return dossiers[dossier].cards.sort(compare);
        }
    }

    return dossiersArray.sort(compare);
}

export {getCards};