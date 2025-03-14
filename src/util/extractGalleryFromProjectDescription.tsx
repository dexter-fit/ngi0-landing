import {GalleryType, ProjectDescriptionType} from "../types";

export const extractGalleryFromProjectDescription = (proj: ProjectDescriptionType) => proj.gallery?.map((item: GalleryType) => ({
    heading: item.heading,
    description: item.description,
    images: item.images,
    largeImage: item.largeImage
} as GalleryType));
