import {ProjectCardType} from "../types";
import inputDos from "./nix";
import inputGeo from "./geo";

function fillWithRandomStuff(numOfProjects: number, contentType: "dos" | "geo") {
    let cards: ProjectCardType[] = [];

    for (let i = 0; i < numOfProjects; i++) {
        cards.push(contentType === 'dos' ?
            inputDos.cards[Math.floor(Math.random() * inputDos.cards.length)] :
            inputGeo.cards[Math.floor(Math.random() * inputGeo.cards.length)])
    }

    return cards;
}


export {fillWithRandomStuff}
