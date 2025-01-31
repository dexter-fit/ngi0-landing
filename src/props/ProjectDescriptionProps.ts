import {ReactNode} from "react";
import {AssociatedProjectProps} from "./AssociatedProjectProps";

export type ProjectDescriptionProps = {
    otherProjectsLinkSpace?: ReactNode,
    image?: string,
    tags?: ReactNode[],
    descriptionContent: {
        header: string,
        anchor?: string,
        links?: ReactNode[],
        associatedProjects?: AssociatedProjectProps[]
    },
    children: ReactNode
};
