import {ProjectCardType} from "../types";

import inputDos from "./dossie.json";
import inputGeo from "./geo.json";

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

const getCards = (contentType?: "dos" | "geo") => {
    if (contentType) {
        return contentType === 'dos' ?
            inputDos.cards.sort(compare) :
            inputGeo.cards.sort(compare) as ProjectCardType[];
    }

    return [...inputDos.cards, ...inputGeo.cards].sort(compare);
}

export {getCards};