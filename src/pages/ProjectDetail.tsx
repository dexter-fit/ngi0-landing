import {useLocation} from "react-router-dom";
import { getContentTypeFromLocation } from "../util/getContentTypeFromLocation";
import { dossiers } from "../data/dossiers";
import {createLinkWithLabelFromProjectLinkItems} from "../util/createLinkWithLabelFromProjectLinkItems";
import {projectDescriptionsToProjectDescriptionProps} from "../utils/projectDescriptionsToProjectDescriptionProps";
import {projectDescriptionPropsToProjectDescriptions} from "../util/projectDescriptionPropsToProjectDescriptions";

const ProjectDetail = () => {
    const location = getContentTypeFromLocation(useLocation());

    const dossier = dossiers[location[0]];
    console.log(dossier, location[1]);
    const projects = projectDescriptionsToProjectDescriptionProps(dossier.detailedProjects[location[2]].projectDescription);

    const otherProjectsLinkSpace = [
        createLinkWithLabelFromProjectLinkItems(`Part of the ${dossier.header} Dossier`, [{
            label: 'Visit',
            link: `/${dossier.pathName}`
        }])
    ];

    if (projects.length) {
        projects[projects.length - 1].otherProjectsLinkSpace = otherProjectsLinkSpace;
    }

    return projectDescriptionPropsToProjectDescriptions(projects);
};

export {ProjectDetail};
