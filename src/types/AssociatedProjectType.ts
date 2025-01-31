import {ProjectCardType} from "./ProjectCardType";

/**
 * Associated project carousel type with description and header. Through this you can make more dynamic associations. For example
 * this project can be related to some nlnet projects, and you can outline how in the description, but it may also be related to
 * some proprietary projects, and you want to distinguish between the two. You use two of these types, and you can specify in the
 * description how they differ / some optional info.
 */
export type AssociatedProjectType = {
    /**
     * A header outlining the "class" of the projects (e.g.: NGI0 Related, From the Same Developers, Commercial Alternatives).
     */
    heading: string,
    /**
     * A description of the "class". Maybe outlining why it may be beneficial for the user to look into these projects, or similar
     * info.
     */
    description?: string,
    /**
     * The projects, that are related in this "class".
     */
    carousel: ProjectCardType[]
};
