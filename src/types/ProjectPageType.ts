import {ProjectDescriptionType} from "./ProjectDescriptionType";

/**
 * Type representing the project page.
 */
export type ProjectPageType = {
    /**
     * Title that will be used at the top of the card.
     * For example in the https://nlnet.nl/ the text is currently "NLnet; Welcome to the Nlnet Foundation".
     * You can tinker with this, but I recommend something short, so it can be seen it the card easily.
     * For example "Nix Dossier", "Open Street Map Detail" and so on.
     */
    pageTitle: string,
    /**
     * A menu title, should be short and outlining what is the purpose of the page (e.g.: Docker vs Nix, Nix for Docker).
     */
    menuTitle: string,
    /**
     * The content itself.
     */
    projectDescription: ProjectDescriptionType[]
};
