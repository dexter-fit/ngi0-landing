import {ProjectDescriptionProps} from "../types";
import {useLocation } from "react-router-dom";
import React from "react";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {ProjectDescription} from "../components/ProjectDescription";
import { markdownToHtml } from "../util/markdownToHtml";
import { getContentTypeFromLocation } from "../util/getContentTypeFromLocation";
import { ContentType } from "../types/ContentType";
import { dossiers } from "../data/dossiers";
import { ProjectDescriptionLinkType } from "../types/ProjectDescriptionLinkType";
import { createLinkWithLabelFromProjectLinkItems } from "../util/createLinkWithLabelFromProjectLinkItems";
import { stringToTag } from "../util/stringToTag";

const ProjectsComparison = () => {
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

    for (const compGroupName in dossier.comparisons) {
        for (const comp of dossier.comparisons[compGroupName]) {
            const otherProjectsLinkSpace = [
                createLinkWithLabelFromProjectLinkItems(`Part of the ${dossier.header} Dossier`, [{
                    label: 'Visit',
                    link: `/${contentType}`
                }])
            ];

            if (comp?.relatedContent) {
                otherProjectsLinkSpace.push(...comp?.relatedContent?.map(
                    (item: { label: string; links: ProjectDescriptionLinkType[]; }) =>
                        createLinkWithLabelFromProjectLinkItems(item.label, item.links)
                ));
            }

            projects.push({
                otherProjectsLinkSpace,
                image: dossier.image,
                descriptionContent: {
                    header: comp.header
                },
                tags: dossier.tags.map(stringToTag),
                children: <div dangerouslySetInnerHTML={{
                    __html: markdownToHtml(comp.text)
                }}>
                </div>
            })
        }
    }

    return projects;
}

export {ProjectsComparison};
