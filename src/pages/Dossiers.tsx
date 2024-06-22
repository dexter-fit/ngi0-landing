import {Tag} from "primereact/tag";
import React, {useEffect} from "react";
import {ProjectDescription} from "../components/ProjectDescription";
import {
    NIX_LANGUAGE_RELATED_PROJECT_CARDS,
    NIX_OS_RELATED_PROJECT_CARDS,
    NIX_PKG_RELATED_PROJECT_CARDS
} from "../data/nixDossierData";
import {ProjectDescriptionProps} from "../types";
import {Link, useOutletContext} from "react-router-dom";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {markdownToHtml} from "../util/markdownToHtml";
import {Button} from "primereact/button";
import inputDos from "../data/dossie.json";
import inputGeo from "../data/geo.json";

const Dossiers = () => {
    const projects: ProjectDescriptionProps[] = loadProjects();

    const { setNewMenuItemsFromChild } = useOutletContext();

    useEffect(() => {
        const objectsList = [
            {
                label: "Nix Environment Dossier",
                items: projects.map(item => ({
                    label: item.descriptionContent.header,
                    url: `/dossiers#${replaceSpacesWith(item.descriptionContent.header, "_")}`,
                    icon: "pi pi-file"
                }))
            }
        ];

        setNewMenuItemsFromChild(objectsList);
    }, []);

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

function loadProjects() {
    let projects: ProjectDescriptionProps[] = [];

    const NIX_TAGS = process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.tags : inputGeo.tags;
    const associatedNGI0Projects = "Associated NGI0 Projects";
    const cards: any [] = [
        NIX_LANGUAGE_RELATED_PROJECT_CARDS,
        NIX_PKG_RELATED_PROJECT_CARDS,
        NIX_OS_RELATED_PROJECT_CARDS
    ]

    for (const [i, proj] of process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.projects.entries() : inputGeo.projects.entries()) {
        let links: any = [];
        if (proj.links !== undefined) {
            for (const linkItem of proj.links) {
                let img: any = undefined;
                if (linkItem.img !== undefined) {
                    img = <img className="p-0 p-button-icon-left" src={linkItem.img} width="20px" alt=""/>;
                } else {
                    img = linkItem.icon;
                }
                links.push(
                    <Link to={linkItem.link}><Button outlined={true} icon={img} className="p-button-tiny" label={linkItem.label}/></Link>
                )
            }
        }

        let tags: any = [];
        let asProjects: any = [];
        if (proj.links !== undefined) {
            tags = NIX_TAGS.map(item => <Tag value={item} key={item}></Tag>);
        } else {
            asProjects = [
                {
                    heading: associatedNGI0Projects,
                    carousel: {
                        cards: cards[i - 1],
                        template: CardCarouselTemplate
                    }
                }
            ];
        }

        console.log(cards, i)

            projects.push({
                    image: proj.image,
                    tags: tags,
                    descriptionContent: {
                        header: proj.header,
                        links: links,
                        associatedProjects: asProjects
                    },
                    children: <div dangerouslySetInnerHTML={{
                        __html: markdownToHtml(proj.text)
                    }}>
                    </div>
                })
    }

    return projects;
}

export {Dossiers};
