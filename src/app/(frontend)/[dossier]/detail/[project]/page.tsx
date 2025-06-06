import {dossiers} from "@/data/dossiers";
import {projectDescriptionsToProjectDescriptionProps} from "@/util/projectDescriptionsToProjectDescriptionProps";
import {createLinkWithLabelFromProjectLinkItems} from "@/util/createLinkWithLabelFromProjectLinkItems";
import {projectDescriptionPropsToProjectDescriptions} from "@/util/projectDescriptionPropsToProjectDescriptions";

export default async function Page({params}: {
    params: Promise<{ dossier: string, project: string }>
}) {
    const {dossier, project} = await params;

    const dossierData = dossiers[dossier];
    const projects = projectDescriptionsToProjectDescriptionProps(
        dossierData.detailedProjects[project].projectDescription
    );

    const otherProjectsLinkSpace = [
        createLinkWithLabelFromProjectLinkItems(`Part of the ${dossierData.header} Dossier`, [{
            label: 'Visit',
            link: `/${dossierData.pathName}`
        }])
    ];

    if (projects.length) {
        projects[projects.length - 1].otherProjectsLinkSpace = <>
            {projects[projects.length - 1].otherProjectsLinkSpace}{otherProjectsLinkSpace}
        </>;
    }

    return projectDescriptionPropsToProjectDescriptions(projects);
}