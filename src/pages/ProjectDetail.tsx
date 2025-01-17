import {AssociatedProjectProps, ProjectDescriptionProps} from "../types";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";
import {useLocation} from "react-router-dom";
import React from "react";
import {ProjectDescription} from "../components/ProjectDescription";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import { markdownToHtml } from "../util/markdownToHtml";
import { getContentTypeFromLocation } from "../util/getContentTypeFromLocation";
import { ContentType } from "../types/ContentType";
import { dossiers } from "../data/dossiers";
import { AssociatedProjectType } from "../types/AssociatedProjectType";
import { stringToTag } from "../util/stringToTag";
import { ProjectDescriptionLinkType } from "../types/ProjectDescriptionLinkType";
import { createLinkFromProjectLinkItem } from "../util/createLinkFromProjectLinkItem";
import {createLinkWithLabelFromProjectLinkItems} from "../util/createLinkWithLabelFromProjectLinkItems";

const ProjectDetail = () => {
    const dossier = getContentTypeFromLocation(useLocation());
    const projects: ProjectDescriptionProps[] = loadProjects(dossier);

    return <>
        {projects.map(item =>
            <ProjectDescription key={item.descriptionContent.header}
                                otherProjectsLinkSpace={item.otherProjectsLinkSpace}
                                image={item.image}
                                tags={item.tags}
                                descriptionContent={{...item.descriptionContent, anchor: replaceSpacesWith(item.descriptionContent.header, "_")}}>
                {item.children}
            </ProjectDescription>
        )}
    </>;
};

function loadProjects(contentType: ContentType) {
    const dossier = dossiers[contentType];
    let projects: ProjectDescriptionProps[] = [];

    for (const projGroupName in dossier.detailedProjects) {
        for (const proj of dossier.detailedProjects[projGroupName]) {
            const links = proj.links?.map((item: ProjectDescriptionLinkType) => createLinkFromProjectLinkItem(item));
            const otherProjectsLinkSpace = [
                createLinkWithLabelFromProjectLinkItems(`Part of the ${dossier.header} Dossier`, [{
                    label: 'Visit',
                    link: `/${contentType}`
                }])
            ];

            let associatedProjects = [];
    
            associatedProjects = proj.associatedProjects?.map((item: AssociatedProjectType) => ({
                heading: item.heading,
                description: item.description,
                carousel: {
                    cards: item.carousel,
                    template: CardCarouselTemplate
                }
            } as AssociatedProjectProps));
    
            projects.push({
                image: proj.image,
                descriptionContent: {
                    header: proj.header,
                    links: links,
                    associatedProjects: associatedProjects
                },
                children: <div dangerouslySetInnerHTML={{
                    __html: markdownToHtml(proj.text)
                }}>
                </div>,
                tags: proj.tags.map(stringToTag),
                otherProjectsLinkSpace
            })
        }
    }

    return projects;
}

export {ProjectDetail};
