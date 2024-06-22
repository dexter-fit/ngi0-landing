import {ProjectCardType} from "../types";
import inputDos from "./dossie.json";
import inputGeo from "./geo.json";

const NIX_LANGUAGE_RELATED_PROJECT_CARDS: ProjectCardType[] = fillWithRandomStuff(2);

const NIX_PKG_RELATED_PROJECT_CARDS: ProjectCardType[] = fillWithRandomStuff(5);

const NIX_OS_RELATED_PROJECT_CARDS: ProjectCardType[] = fillWithRandomStuff(4);


function fillWithRandomStuff(numOfProjects: number) {
    let cards: ProjectCardType[] = [];

    for (let i = 0; i < numOfProjects; i++) {
        cards.push(process.env.REACT_APP_CONTENT_TYPE === 'dos' ?
            inputDos.cards[Math.floor(Math.random() * inputDos.cards.length)] :
            inputGeo.cards[Math.floor(Math.random() * inputGeo.cards.length)])
    }

    return cards;
}


export {NIX_LANGUAGE_RELATED_PROJECT_CARDS, NIX_PKG_RELATED_PROJECT_CARDS, NIX_OS_RELATED_PROJECT_CARDS}
