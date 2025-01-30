import {ProjectCardType} from "./ProjectCardType";
import {ProjectDescriptionType} from "./ProjectDescriptionType";

/**
 * A type for the entire Dossier.
 */
export type DossierType = {
    /**
     * Name of the path, that the dossier is under.
     */
    pathName: string,
    /**
     * An image of the dossier, which should be on the dossiers page.
     */
    image: string,
    /**
     * The name of the dossier, used on the main page.
     */
    header: string,
    /**
     * An additional description of the dossier. This should be kept short, so it fits on one row in the card.
     */
    subheader: string,
    /**
     * An array of tags of the dossier. Keep this short to prevent crowding the front page by tags.
     */
    tags: string[],
    /**
     * A relative link to the dossier, will be computed later. For now set ngi0/pathName.
     */
    link: string,
    /**
     * An array of tags to be shown on the dossier page.
     */
    tagsDossierDetail: string[],
    cards: ProjectCardType[],
    projects: ProjectDescriptionType[],
    detailedProjects: {[key: string]: ProjectDescriptionType[]},
    comparisons: {[key: string]: ProjectDescriptionType[]}
}
