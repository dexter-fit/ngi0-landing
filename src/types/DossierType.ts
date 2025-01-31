import {ProjectCardType} from "./ProjectCardType";
import {ProjectPageType} from "./ProjectPageType";

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
    /**
     * All cards of the projects available in the dossier.
     */
    cards: ProjectCardType[],
    /**
     * The main page outline of the projects in the dossier.
     */
    projects: ProjectPageType,
    /**
     * A single page designed to introduce one project. This can be a page introducing a Nix Language in a Nix dossier, or
     * Some other concrete project, that is part of the dossier (e.g.: Open Office in word, etc.).
     */
    detailedProjects: {[key: string]: ProjectPageType},
    /**
     * Comparisons between some projects. This can be used to represent "how to switch" pages or pages detailing the benefits
     * of the open-source sw when compared to the proprietary ones (e.g.: you can pay for Google Plus to have more cloud storage,
     * or you can self-host next cloud, but you have to have the HW to do it.
     */
    comparisons: {[key: string]: ProjectPageType}
}
