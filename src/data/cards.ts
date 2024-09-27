import {ProjectCardType} from "../types";

import inputDos from "./nix";
import inputGeo from "./geo";
import {dossiers} from "./dossiers";

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

const getCards = (contentType?: "dos" | "geo" | "all") => {
    if (contentType) {
        switch (contentType) {
            case "all":
                return [...inputDos.cards, ...inputGeo.cards].sort(compare);
            case "dos":
                return inputDos.cards.sort(compare);
            case "geo":
                return inputGeo.cards.sort(compare);
        }
    }

    return [...dossiers].sort(compare);
}

export {getCards};