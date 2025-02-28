/**
 * Information about the image to fill intro the gallery
 */
type ImageType = {
    /**
     * Image src, can be provided as URL link, or relative path to server public directory
     */
    itemImageSrc: string,
    /**
     * Image title
     */
    title?: string,
    /**
     * Image content description
     */
    alt?: string
};

export type {ImageType};
