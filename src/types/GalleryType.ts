import { ImageType } from "./ImageType";

/**
 * The image gallery can be used either in the description of the dossier itself or in the case of a detailed project description 
 * or project comparison. Images can be inserted either by URL link or by relative path into a public folder on the server.
 */
export type GalleryType = {
    /**
     * A header outlining the "class" of the projects (e.g.: NGI0 Related, From the Same Developers, Commercial Alternatives).
     */
    heading?: string,
    /**
     * A description of the "class". Maybe outlining why it may be beneficial for the user to look into these projects, or similar
     * info.
     */
    description?: string,
    /**
     * Images included in gallery
     */
    images: ImageType[],
    /**
     * Output large previous, useful, if you want only one centered item instead of the entire gallery
     */
    largeImage?: boolean
};
