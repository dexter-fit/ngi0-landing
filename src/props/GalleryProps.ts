import { ImageType } from "../types/ImageType";

export type GalleryProps = {
    heading?: string,
    description?: string
    images: ImageType[],
    largeImage?: boolean
};
