import React from "react";
import {ProjectDescription} from "../components/ProjectDescription";
import {AssociatedProjectProps, ProjectDescriptionProps} from "../types";
import {useLocation} from "react-router-dom";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {markdownToHtml} from "../util/markdownToHtml";
import {dossiers} from "../data/dossiers";
import {tagsFromProjectCardType} from "../util/tagsFromProjectCardType";
import {ContentType} from "../types/ContentType";
import {ProjectDescriptionLinkType} from "../types/ProjectDescriptionLinkType";
import {AssociatedProjectType} from "../types/AssociatedProjectType";
import {createLinkFromProjectLinkItem} from "../util/createLinkFromProjectLinkItem";
import {stringToTag} from "../util/stringToTag";
import {getContentTypeFromLocation} from "../util/getContentTypeFromLocation";

const Dossiers = () => {
    const dossier = getContentTypeFromLocation(useLocation());
    const projects: ProjectDescriptionProps[] = loadProjects(dossier);

    return <>
        {projects.map(item =>
                <ProjectDescription key={item.descriptionContent.header}
                                    image={item.image}
                                    tags={item.tags}
                                    descriptionContent={{...item.descriptionContent, anchor: replaceSpacesWith(item.descriptionContent.header, "_")}}>
                    {item.children}
                </ProjectDescription>
        )}
    </>
}

function loadProjects(contentType: ContentType) {
    const dossier = dossiers[contentType];
    let projects: ProjectDescriptionProps[] = [];

    let tags = [];

    for (const proj of dossier.projects) {
        const links = proj.links?.map((item: ProjectDescriptionLinkType) => createLinkFromProjectLinkItem(item));

        tags = tagsFromProjectCardType(
            proj.associatedProjects?.flatMap((item: AssociatedProjectType) => item.carousel) || []
        ).map(stringToTag);

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
            // tags, // I don't know if we want this here. This allows us to add tags bellow each section with associated ngi0 projects
            descriptionContent: {
                header: proj.header,
                links: links,
                associatedProjects: associatedProjects
            },
            children: <div dangerouslySetInnerHTML={{
                __html: markdownToHtml(proj.text)
            }}>
            </div>
        })
    }

    // Add dossier tags to the first description block
    tags = dossier.tagsDossierDetail.map(stringToTag);
    projects[0].tags = tags;

    return projects;
}

export {Dossiers};
