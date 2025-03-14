import {ProjectDescriptionLinkType, ProjectDescriptionType} from "../types";
import {stringToTag} from "../util/stringToTag";
import {createLinkFromProjectLinkItem} from "../util/createLinkFromProjectLinkItem";
import {extractAssociatedProjectsFromProjectDescription} from "../util/extractAssociatedProjectsFromProjectDescription";
import {extractGalleryFromProjectDescription} from "../util/extractGalleryFromProjectDescription";
import {createLinkWithLabelFromProjectLinkItems} from "../util/createLinkWithLabelFromProjectLinkItems";
import {markdownToHtml} from "../util/markdownToHtml";
import React from "react";
import {ProjectDescriptionProps} from "../props";

export const projectDescriptionsToProjectDescriptionProps = (projectDescriptions: ProjectDescriptionType[]) =>
    projectDescriptions.map((proj) => ({
        image: proj.image,
        tags: proj?.tags?.map(stringToTag),
        descriptionContent: {
            header: proj.header,
            links: proj.links?.map((item: ProjectDescriptionLinkType) =>
                createLinkFromProjectLinkItem(item)
            ),
            associatedProjects: extractAssociatedProjectsFromProjectDescription(proj),
            gallery: extractGalleryFromProjectDescription(proj),
        },
        otherProjectsLinkSpace: (
            proj?.relatedContent ? <>
                {proj?.relatedContent?.map(({label, links}) =>
                    createLinkWithLabelFromProjectLinkItems(label, links)
                )}
            </> : undefined
        ),
        children: (
            <div dangerouslySetInnerHTML={{__html: markdownToHtml(proj.text)}}/>
        )
    })) as ProjectDescriptionProps[];