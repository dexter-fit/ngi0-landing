import {ProjectDescriptionLinkType} from "./ProjectDescriptionLinkType";

export type RelatedContentType = {
    /**
     * Label outlining how these links are related. For example links to previous projects in the dossier application,
     * or link to the Dossier, or any other specific link you want to include.
     * I would advise on adding this content only in the last block of the entire description.
     */
    label: string,
    /**
     * The links themselves.
     */
    links: ProjectDescriptionLinkType[]
};