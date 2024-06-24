import {Tag} from "primereact/tag";
import {ProjectDescriptionProps} from "../types";
import {Link, useOutletContext} from "react-router-dom";
import {ClickableTag} from "../components/ClickableTag";
import React, {useEffect} from "react";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {ProjectDescription} from "../components/ProjectDescription";
import inputDos from "../data/dossie.json";
import inputGeo from "../data/geo.json";
import { markdownToHtml } from "../util/markdownToHtml";

const ProjectsComparison = () => {
    const projects: ProjectDescriptionProps[] = loadProjects();

    const {setNewMenuItemsFromChild} = useOutletContext();

    useEffect(() => {
        const objectsList = [
            {
                label: process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.comparison[0].header : inputGeo.comparison[0].header2,
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
                                descriptionContent={{
                                    ...item.descriptionContent,
                                    anchor: item.descriptionContent.header.replace(/ /g, "_")
                                }}>
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

    for (const proj of process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.comparison : inputGeo.comparison) {
        projects.push({
            otherProjectsLinkSpace: <div className="full-width flex flex-column">
                <p className="flex align-items-center gap-1"><span>{proj.linkHeader}</span>
                    <Link to="/dossiers" className="flex align-items-center"
                          style={{textDecoration: "none"}}><ClickableTag name="Visit"/></Link>
                </p>
                <p className="flex align-items-center gap-1"><span>{proj.link2Header}</span>
                    <Link to="/detail" className="flex align-items-center"
                          style={{textDecoration: "none"}}><ClickableTag name="Visit"/></Link>
                </p>
            </div>,
            image: process.env.REACT_APP_CONTENT_TYPE === 'dos' ? inputDos.cards[0].image : inputGeo.cards[0].image,
            tags: NIX_TAGS,
            descriptionContent: {
                header: proj.header
            },
            children: <div dangerouslySetInnerHTML={{
                __html: markdownToHtml(proj.text)
            }}>
            </div>
        })
    }

    return projects;
}

export {ProjectsComparison};
