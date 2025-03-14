import {useLocation} from "react-router-dom";
import {getContentTypeFromLocation} from "../util/getContentTypeFromLocation";
import {dossiers} from "../data/dossiers";
import {createLinkWithLabelFromProjectLinkItems} from "../util/createLinkWithLabelFromProjectLinkItems";
import {stringToTag} from "../util/stringToTag";
import {projectDescriptionsToProjectDescriptionProps} from "../utils/projectDescriptionsToProjectDescriptionProps";
import {projectDescriptionPropsToProjectDescriptions} from "../util/projectDescriptionPropsToProjectDescriptions";

const ProjectsComparison = () => {
    const location = getContentTypeFromLocation(useLocation());

    const dossier = dossiers[location[0]];
    const projects = projectDescriptionsToProjectDescriptionProps(dossier.comparisons[location[2]].projectDescription);

    if (projects.length) {
        projects[0].tags = dossier.tags.map(stringToTag);
    }

    if (projects.length) {
        projects[projects.length - 1].otherProjectsLinkSpace = [
            createLinkWithLabelFromProjectLinkItems(`Part of the ${dossier.header} Dossier`, [{
                label: 'Visit',
                link: `/${dossier.pathName}`
            }])
        ];
    }

    return projectDescriptionPropsToProjectDescriptions(projects);
};

export {ProjectsComparison};
