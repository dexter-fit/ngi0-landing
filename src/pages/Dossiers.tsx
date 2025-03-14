import React from "react";
import {ProjectDescriptionProps} from "../props";
import {useLocation} from "react-router-dom";
import {dossiers} from "../data/dossiers";
import {stringToTag} from "../util/stringToTag";
import {getContentTypeFromLocation} from "../util/getContentTypeFromLocation";
import {createLinkWithLabelFromProjectLinkItems} from "../util/createLinkWithLabelFromProjectLinkItems";
import {projectDescriptionsToProjectDescriptionProps} from "../utils/projectDescriptionsToProjectDescriptionProps";
import {projectDescriptionPropsToProjectDescriptions} from "../util/projectDescriptionPropsToProjectDescriptions";

const Dossiers = () => {
    const dossierName = getContentTypeFromLocation(useLocation())[0];

    const dossier = dossiers[dossierName];

    const projects: ProjectDescriptionProps[] = projectDescriptionsToProjectDescriptionProps(dossier.projects.projectDescription);

    const otherProjectsLinkSpace = [
        createLinkWithLabelFromProjectLinkItems(`Detailed Projects Within the Dossier`,
            Object.entries(dossier.detailedProjects).map(([path, item]) =>
                ({link: `detail/${path}`, label: item.menuTitle}))
        ),
        createLinkWithLabelFromProjectLinkItems(`Project Comparisons Within the Dossier`,
            Object.entries(dossier.comparisons).map(([path, item]) =>
                ({link: `comparison/${path}`, label: item.menuTitle}))
        ),
        createLinkWithLabelFromProjectLinkItems("Projects",
            [{label: "Visit", link: `projects`}]
        )
    ];

    if (projects[0]?.tags) {
        projects[0].tags = [...projects[0].tags, ...dossier.tagsDossierDetail.map(stringToTag)];
    }

    projects[projects.length - 1].otherProjectsLinkSpace = <>{projects[projects.length - 1].otherProjectsLinkSpace}{otherProjectsLinkSpace}</>;

    return projectDescriptionPropsToProjectDescriptions(projects);
}

export {Dossiers};
