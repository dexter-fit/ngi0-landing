import {AssociatedProjectProps, ProjectDescriptionProps} from "../props";
import {useLocation } from "react-router-dom";
import React from "react";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {ProjectDescription} from "../components/ProjectDescription";
import { markdownToHtml } from "../util/markdownToHtml";
import { getContentTypeFromLocation } from "../util/getContentTypeFromLocation";
import { dossiers } from "../data/dossiers";
import { ProjectDescriptionLinkType } from "../types/ProjectDescriptionLinkType";
import { createLinkWithLabelFromProjectLinkItems } from "../util/createLinkWithLabelFromProjectLinkItems";
import { stringToTag } from "../util/stringToTag";
import {AssociatedProjectType, GalleryType} from "../types";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";

const ProjectsComparison = () => {
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

function loadProjects(dossierName: string, compGroupName: string) {
    const dossier = dossiers[dossierName];
    let projects: ProjectDescriptionProps[] = [];

    const otherProjectsLinkSpace = [
        createLinkWithLabelFromProjectLinkItems(`Part of the ${dossier.header} Dossier`, [{
            label: 'Visit',
            link: `/${dossierName}`
        }])
    ];

    if (dossier.comparisons[compGroupName]) {
        for (const comp of dossier.comparisons[compGroupName].projectDescription) {

            if (comp?.relatedContent) {
                otherProjectsLinkSpace.push(...comp?.relatedContent?.map(
                    (item: { label: string; links: ProjectDescriptionLinkType[]; }) =>
                        createLinkWithLabelFromProjectLinkItems(item.label, item.links)
                ));
            }

            let associatedProjects = comp.associatedProjects?.map((item: AssociatedProjectType) => ({
                heading: item.heading,
                description: item.description,
                carousel: {
                    cards: item.carousel,
                    template: CardCarouselTemplate
                }
            } as AssociatedProjectProps));

            let gallery = comp.gallery?.map((item: GalleryType) => ({
                heading: item.heading,
                description: item.description,
                images: item.images,
                largeImage: item.largeImage
            } as GalleryType));

            projects.push({
                descriptionContent: {
                    header: comp.header,
                    associatedProjects,
                    gallery
                },
                children: <div dangerouslySetInnerHTML={{
                    __html: markdownToHtml(comp.text)
                }}>
                </div>
            })
        }

        if (projects.length) {
            projects[0].tags = dossier.tags.map(stringToTag);
        }

        if (projects.length) {
            projects[projects.length - 1].otherProjectsLinkSpace = otherProjectsLinkSpace;
        }
    }

    return projects;
}

export {ProjectsComparison};
