import {ProjectCardType} from "../types";

import inputDos from "./dossie.json";
import inputGeo from "./geo.json";

const CARDS = process.env.REACT_APP_CONTENT_TYPE === 'dos' ?
    inputDos.cards.sort((a, b) => {
        const headerA = a.header.toUpperCase();
        const headerB = b.header.toUpperCase();

        if (headerA < headerB) {
            return -1;
        }
        if (headerA > headerB) {
            return 1;
        }
        return 0;
    }) :
    inputGeo.cards.sort((a, b) => {
        const headerA = a.header.toUpperCase();
        const headerB = b.header.toUpperCase();

        if (headerA < headerB) {
            return -1;
        }
        if (headerA > headerB) {
            return 1;
        }
        return 0;
    }) as ProjectCardType[];

export {CARDS};