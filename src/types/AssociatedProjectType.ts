import {ProjectCardType} from "./projectCardType";

export type AssociatedProjectType = {
    heading: string,
    description?: string,
    carousel: ProjectCardType[]
};
