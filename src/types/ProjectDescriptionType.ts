import {ProjectDescriptionLinkType} from "./ProjectDescriptionLinkType";
import {AssociatedProjectType} from "./AssociatedProjectType";
import {GalleryType} from "./GalleryType";
import {RelatedContentType} from "./RelatedContentType";

/**
 * A description of a project.
 * You can use more blocks to build the project description. You might want to split your description into multiple
 * sections, with each having a header, some main image and associated projects.
 */
export type ProjectDescriptionType = {
    /**
     * An optional image, that represents the project (e.g.: the logo, or something important to the project).
     */
    image?: string,
    /**
     * The tags of the project, can be left out.
     */
    tags?: string[],
    /**
     * The starting header of the description. Can be a bit longer, but keep it concise, so it looks good on mobile.
     */
    header: string,
    /**
     * Links to outside sources (project home page, GitHub, GitLab, wiki, resource links, documentations).
     */
    links?: ProjectDescriptionLinkType[],
    /**
     * Projects, that are associated with this (e.g.: some proprietary tools).
     */
    associatedProjects?: AssociatedProjectType[],
    /**
     * Related content within this project. For example if this is a comparison of an open source project to some
     * proprietary one you might want to link to the page of the open source option within this Dossier application.
     * May be left out and possibly will be generated in the future.
     */
    relatedContent?: RelatedContentType[],
    /**
     * A nice text about the description. This should be written in markdown.
     */
    text: string,
    /**
     * Gallery of images related to the topic.
     */
    gallery?: GalleryType[]
};
