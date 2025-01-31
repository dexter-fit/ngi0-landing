import {FundInfoType} from "./FundInfoType";

/**
 * Information about the project to fill in the card
 */
type ProjectCardType = FundInfoType & {
    /**
     * An image representing the project (e.g.: project logo, or something similar).
     */
    image: string;
    /**
     * A header / name of the project.
     */
    header: string;
    /**
     * A subheader of the project. This is the short description title in nlnet page, or something short
     * that describes the project quickly.
     */
    subheader: string;
    /**
     * Tags of the project (e.g.: "software distribution", "security").
     */
    tags: string[];
    /**
     * Link to the nlnet page detail.
     */
    link: string;
};

export type {ProjectCardType};
