import {ProjectDescriptionProps} from "../types";
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

function loadProjects(dossierType: string, compGroupName: string) {
    const dossier = dossiers[dossierType];
    let projects: ProjectDescriptionProps[] = [];



    if (dossier.comparisons[compGroupName].content) {
        for (const comp of dossier.comparisons[compGroupName].content) {
            const otherProjectsLinkSpace = [
                createLinkWithLabelFromProjectLinkItems(`Part of the ${dossier.header} Dossier`, [{
                    label: 'Visit',
                    link: `/${dossierType}`
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
