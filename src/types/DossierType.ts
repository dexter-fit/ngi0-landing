import {ProjectCardType} from "./projectCardType";
import {ProjectDescriptionType} from "./ProjectDescriptionType";

export type DossierType = {
    pathName: string,
    image: string,
    header: string,
    subheader: string,
    tags: string[],
    link: string,
    cards: ProjectCardType[],
    tagsDossierDetail: string[],
    projects: ProjectDescriptionType[],
    detailedProjects: {[key: string]: ProjectDescriptionType[]},
    comparisons: {[key: string]: ProjectDescriptionType[]}
}
