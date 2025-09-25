import {projectDescriptionPropsToProjectDescriptions} from "@/util/projectDescriptionPropsToProjectDescriptions";
import {stringToTag} from "@/util/stringToTag";
import {createLinkWithLabelFromProjectLinkItems} from "@/util/createLinkWithLabelFromProjectLinkItems";
import {dossiers} from "@/data/dossiers";
import {ProjectDescriptionProps} from "@/props";
import {projectDescriptionsToProjectDescriptionProps} from "@/util/projectDescriptionsToProjectDescriptionProps";
import {ReactNode} from "react";
import { Metadata } from "next";

export async function generateStaticParams() {
    return Object.keys(dossiers).map(dossier => ({ dossier: dossier }));
}

export async function generateMetadata({params}: {
    params: Promise<{ dossier: string }>
}): Promise<Metadata> {
    const {dossier} = await params;
    const dossierData = dossiers[dossier];

    return {
        title: dossierData.header
    }
}

export default async function Page({params}: {
    params: Promise<{ dossier: string }>
}) {
    const {dossier} = await params;

    const dossierData = dossiers[dossier];

    const projects: ProjectDescriptionProps[] = projectDescriptionsToProjectDescriptionProps(dossierData.projects.projectDescription);

    const otherProjectsLinkSpace: ReactNode[] = [];

    if (Object.keys(dossierData.detailedProjects).length > 0) {
        otherProjectsLinkSpace.push(
            createLinkWithLabelFromProjectLinkItems(`Detailed Projects Within the Dossier`,
                Object.entries(dossierData.detailedProjects).map(([path, item]) =>
                    ({link: `/${dossierData.pathName}/detail/${path}`, label: item.menuTitle}))
            )
        )
    }

    if (Object.keys(dossierData.comparisons).length > 0) {
        otherProjectsLinkSpace.push(
            createLinkWithLabelFromProjectLinkItems(`Project Comparisons Within the Dossier`,
                Object.entries(dossierData.comparisons).map(([path, item]) =>
                    ({link: `/${dossierData.pathName}/comparison/${path}`, label: item.menuTitle}))
            )
        )
    }

    otherProjectsLinkSpace.push(
        createLinkWithLabelFromProjectLinkItems("Projects",
            [{label: "Visit", link: `projects`}]
        )
    )

    if (projects[0]) {
        const otherTags = dossierData.tagsDossierDetail.map(stringToTag);
        projects[0].tags = projects[0]?.tags ? [...projects[0].tags, ...otherTags] : otherTags;
    }

    projects[projects.length - 1].otherProjectsLinkSpace = <>{projects[projects.length - 1].otherProjectsLinkSpace}{otherProjectsLinkSpace}</>;

    return projectDescriptionPropsToProjectDescriptions(projects);
}