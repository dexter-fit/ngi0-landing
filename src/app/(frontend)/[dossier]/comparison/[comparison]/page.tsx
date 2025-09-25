import {dossiers} from "@/data/dossiers";
import {projectDescriptionsToProjectDescriptionProps} from "@/util/projectDescriptionsToProjectDescriptionProps";
import {createLinkWithLabelFromProjectLinkItems} from "@/util/createLinkWithLabelFromProjectLinkItems";
import {projectDescriptionPropsToProjectDescriptions} from "@/util/projectDescriptionPropsToProjectDescriptions";
import {stringToTag} from "@/util/stringToTag";
import { Metadata } from "next";

export async function generateStaticParams() {
    return Object.entries(dossiers)
        .flatMap(([dossierName, dossier]) =>
            Object.keys(dossier.comparisons)
                .map(comparison => ({dossier: dossierName, comparison})));
}

export async function generateMetadata({params}: {
    params: Promise<{ dossier: string, comparison: string }>
}): Promise<Metadata> {
    const {dossier, comparison} = await params;
    const dossierData = dossiers[dossier];

    return {
        title: dossierData.comparisons[comparison].menuTitle
    }
}

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