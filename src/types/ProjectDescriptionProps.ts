import React, {ReactNode} from "react";
import {CardProps} from "primereact/card";

export type ProjectDescriptionProps = {
    otherProjectsLinkSpace?: ReactNode,
    image?: string,
    tags?: ReactNode[],
    descriptionContent: {
        header: string,
        anchor: string,
        links?: ReactNode[],
        carousel?: {
            cards: CardProps[],
            template: (item: any) => React.ReactNode}
    },
    children: ReactNode
};