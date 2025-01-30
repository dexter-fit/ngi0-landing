import {ProjectCardType} from "./ProjectCardType";

export type AssociatedProjectType = {
    heading: string,
    description?: string,
    carousel: ProjectCardType[]
};
