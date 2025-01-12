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
import { createLinkWithLabelFromProjectLinkItem } from "../util/createLinkWithLabelFromProjectLinkItem";
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
            const links = [
                {
                    label: comp.linkHeader,
                    link: `/${contentType}`
                },
                {
                    label: comp.link2Header,
                    link: `/${contentType}/detail`
                }
            ].map((item: ProjectDescriptionLinkType) => createLinkWithLabelFromProjectLinkItem(item));

            projects.push({
                otherProjectsLinkSpace: links,
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
