import {ProjectCardType} from "../types";

import inputDos from "./nix";
import inputGeo from "./geo";
import {dossiersArray} from "./dossiers";
import {ContentType} from "../types/ContentType";

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

const getCards = (contentType?: ContentType | "projects"): ProjectCardType[] => {
    if (contentType) {
        switch (contentType) {
            case "projects":
                return [...inputDos.cards, ...inputGeo.cards].sort(compare);
            case "dos":
                return inputDos.cards.sort(compare);
            case "geo":
                return inputGeo.cards.sort(compare);
        }
    }

    return dossiersArray.sort(compare);
}

export {getCards};