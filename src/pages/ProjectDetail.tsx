import {AssociatedProjectProps, ProjectDescriptionProps} from "../props";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";
import {useLocation} from "react-router-dom";
import React from "react";
import {ProjectDescription} from "../components/ProjectDescription";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import { markdownToHtml } from "../util/markdownToHtml";
import { getContentTypeFromLocation } from "../util/getContentTypeFromLocation";
import { dossiers } from "../data/dossiers";
import { AssociatedProjectType } from "../types/AssociatedProjectType";
import { stringToTag } from "../util/stringToTag";
import { ProjectDescriptionLinkType } from "../types/ProjectDescriptionLinkType";
import { createLinkFromProjectLinkItem } from "../util/createLinkFromProjectLinkItem";
import {createLinkWithLabelFromProjectLinkItems} from "../util/createLinkWithLabelFromProjectLinkItems";
import { GalleryType } from "../types";

const ProjectDetail = () => {
    const location = getContentTypeFromLocation(useLocation());
    const projects: ProjectDescriptionProps[] = loadProjects(location[0], location[2]);

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

function loadProjects(dossierName: string, projGroupName: string) {
    const dossier = dossiers[dossierName];
    let projects: ProjectDescriptionProps[] = [];

    const otherProjectsLinkSpace = [
        createLinkWithLabelFromProjectLinkItems(`Part of the ${dossier.header} Dossier`, [{
            label: 'Visit',
            link: `/${dossierName}`
        }])
    ];

    if (dossier.detailedProjects[projGroupName]) {
        for (const proj of dossier.detailedProjects[projGroupName].projectDescription) {
            const links = proj.links?.map((item: ProjectDescriptionLinkType) => createLinkFromProjectLinkItem(item));

            let associatedProjects = proj.associatedProjects?.map((item: AssociatedProjectType) => ({
                heading: item.heading,
                description: item.description,
                carousel: {
                    cards: item.carousel,
                    template: CardCarouselTemplate
                }
            } as AssociatedProjectProps));

            let gallery = proj.gallery?.map((item: GalleryType) => ({
                heading: item.heading,
                description: item.description,
                images: item.images
            } as GalleryType));
    
            projects.push({
                image: proj.image,
                descriptionContent: {
                    header: proj.header,
                    links: links,
                    associatedProjects: associatedProjects,
                    gallery: gallery
                },
                children: <div dangerouslySetInnerHTML={{
                    __html: markdownToHtml(proj.text)
                }}>
                </div>,
                tags: proj.tags?.map(stringToTag),
            })
        }

        if (projects.length) {
            projects[projects.length - 1].otherProjectsLinkSpace = otherProjectsLinkSpace;
        }
    }

    return projects;
}

export {ProjectDetail};
