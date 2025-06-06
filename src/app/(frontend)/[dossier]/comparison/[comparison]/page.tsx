import {dossiers} from "@/data/dossiers";
import {projectDescriptionsToProjectDescriptionProps} from "@/util/projectDescriptionsToProjectDescriptionProps";
import {createLinkWithLabelFromProjectLinkItems} from "@/util/createLinkWithLabelFromProjectLinkItems";
import {projectDescriptionPropsToProjectDescriptions} from "@/util/projectDescriptionPropsToProjectDescriptions";
import {stringToTag} from "@/util/stringToTag";

export default async function Page({params}: {
    params: Promise<{ dossier: string, comparison: string }>
}) {
    const {dossier, comparison} = await params;

    const dossierData = dossiers[dossier];
    const projects = projectDescriptionsToProjectDescriptionProps(
        dossierData.comparisons[comparison].projectDescription
    );

    if (projects.length) {
        projects[0].tags = dossierData.tags.map(stringToTag);
    }

    const otherProjectsLinkSpace = [
        createLinkWithLabelFromProjectLinkItems(`Part of the ${dossierData.header} Dossier`, [{
            label: 'Visit',
            link: `/${dossierData.pathName}`
        }])
    ];

    if (projects.length) {
        projects[projects.length - 1].otherProjectsLinkSpace = <>{projects[projects.length - 1].otherProjectsLinkSpace}{otherProjectsLinkSpace}</>;
    }

    return projectDescriptionPropsToProjectDescriptions(projects);
}