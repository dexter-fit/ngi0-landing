import {ProjectDescriptionLinkType} from "./ProjectDescriptionLinkType";
import {AssociatedProjectType} from "./AssociatedProjectType";

export type ProjectDescriptionType = {
    image?: string,
    tags?: string[],
    header: string,
    links?: ProjectDescriptionLinkType[],
    associatedProjects?: AssociatedProjectType[],
    relatedContent?: [
        {
            label: string,
            links: ProjectDescriptionLinkType[]
        }
    ]
    text: string
};
