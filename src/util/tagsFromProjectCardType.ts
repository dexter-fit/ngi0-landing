import {ProjectCardType} from "../types";

export const tagsFromProjectCardType = (cards: ProjectCardType[]): string[] =>
    Array.from(new Set(cards.flatMap(item => item.tags))).sort()
;
