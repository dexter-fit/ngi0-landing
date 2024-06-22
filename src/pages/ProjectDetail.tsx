import {Tag} from "primereact/tag";
import {ProjectDescriptionProps} from "../types";
import {
    NIX_LANGUAGE_RELATED_PROJECT_CARDS,
    NIX_OS_RELATED_PROJECT_CARDS
} from "../data/nixDossierData";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";
import {Link, useOutletContext} from "react-router-dom";
import React, {useEffect} from "react";
import {ProjectDescription} from "../components/ProjectDescription";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {ClickableTag} from "../components/ClickableTag";
import inputDos from "../data/dossie.json";
import inputGeo from "../data/geo.json";
import { markdownToHtml } from "../util/markdownToHtml";

const ProjectDetail = () => {
    const projects: ProjectDescriptionProps[] = loadProjects();


    const { setNewMenuItemsFromChild } = useOutletContext();

    useEffect(() => {
        const objectsList = [
            {
                label: "Nix Language detail",
                items: projects.map(item => ({
                    label: item.descriptionContent.header,
                    url: `/detail#${replaceSpacesWith(item.descriptionContent.header, "_")}`,
                    icon: "pi pi-file"
                }))
            }
        ];

        setNewMenuItemsFromChild(objectsList);
    }, []);

    return <>
        {projects.map(item =>
            <ProjectDescription key={item.descriptionContent.header}
                                otherProjectsLinkSpace={item.otherProjectsLinkSpace}
                                image={item.image}
                                tags={item.tags}
                                descriptionContent={{...item.descriptionContent, anchor: item.descriptionContent.header.replace(/ /g, "_")}}>
                {item.children}
            </ProjectDescription>
        )}
    </>;
};

function loadProjects() {
    let projects: ProjectDescriptionProps[] = [];

    const NIX_TAGS = process.env.REACT_APP_CONTENT_TYPE === 'dos' ?
        inputDos.tags.map(item => <Tag value={item} key={item}></Tag>) :
        inputGeo.tags.map(item => <Tag value={item} key={item}></Tag>);
    const similarNGI0Projects = "Similar NGI0 Projects";
    const similarCorporateProjects = "Similar Corporate Projects";

    for (const proj of process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.projects : inputGeo.projects) {
        projects.push({
            otherProjectsLinkSpace: <>
                <p><span>Fund</span> <span>NGI0 Assure</span></p>
                <p><span>2022-12</span> - <span>active</span></p>
                <p className="flex align-items-center gap-1"><span>{proj.linkHeader}</span>
                    <Link to="/dossiers" className="flex align-items-center" style={{textDecoration: "none"}}><ClickableTag name="Visit"/></Link>
                </p>
            </>,
            image: process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.cards[0].image : inputGeo.cards[0].image,
            tags: NIX_TAGS,
            descriptionContent: {
                header: proj.header,
                links: ["Links here"],
                associatedProjects: [
                    {
                        heading: similarNGI0Projects,
                        carousel: {
                            cards: NIX_LANGUAGE_RELATED_PROJECT_CARDS,
                            template: CardCarouselTemplate
                        }
                    },
                    {
                        heading: similarCorporateProjects,
                        carousel: {
                            cards: NIX_OS_RELATED_PROJECT_CARDS,
                            template: CardCarouselTemplate
                        }
                    }
                ]
            },
            children: <div dangerouslySetInnerHTML={{
                __html: markdownToHtml(proj.text)
            }}>
            </div>
        })
    }

    return projects;
}

export {ProjectDetail};
