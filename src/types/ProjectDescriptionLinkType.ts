/**
 * A type representing a link / button / transition out of the current page.
 * Can relate external sources (e.g.: project GitHub, home page, wiki page, etc.).
 */
export type ProjectDescriptionLinkType = {
    /**
     * A primereact icon, that should be used next to the link label in a button.
     */
    icon?: string,
    /**
     * A custom img, that should be used next to the link label in a button.
     * This could be both the path and a base64.
     */
    img?: string,
    /**
     * Hyperlink link <a href="ProjectDescriptionLinkType.link">...<>
     */
    link: string,
    /**
     * Hyperlink label <a ...>ProjectDescriptionLinkType.label<>
     */
    label: string
};
