import {Tag} from "primereact/tag";
import {ProjectDescriptionProps} from "../types";
import {Link, useOutletContext} from "react-router-dom";
import {ClickableTag} from "../components/ClickableTag";
import React, {useEffect} from "react";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {ProjectDescription} from "../components/ProjectDescription";
import inputDos from "../data/nix";
import inputGeo from "../data/geo";
import { markdownToHtml } from "../util/markdownToHtml";

const ProjectsComparison = (props: {contentType: "dos" | "geo"}) => {
    const projects: ProjectDescriptionProps[] = loadProjects(props.contentType);

    const {setNewMenuItemsFromChild} = useOutletContext();

    useEffect(() => {
        const objectsList = [
            {
                label: props.contentType === 'dos' ? inputDos.comparison[0].header : inputGeo.comparison[0].header2,
                items: projects.map(item => ({
                    label: item.descriptionContent.header,
                    url: `/ngi0/${props.contentType}/detail#${replaceSpacesWith(item.descriptionContent.header, "_")}`,
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

function loadProjects(contentType: "dos" | "geo") {
    let projects: ProjectDescriptionProps[] = [];

    const NIX_TAGS = contentType === 'dos' ?
    inputDos.tags.map(item => <Tag value={item} key={item}></Tag>) :
    inputGeo.tags.map(item => <Tag value={item} key={item}></Tag>);

    for (const proj of contentType === 'dos' ? inputDos.comparison : inputGeo.comparison) {
        projects.push({
            otherProjectsLinkSpace: <div className="full-width flex flex-column">
                <p className="flex align-items-center gap-1"><span>{proj.linkHeader}</span>
                    <Link to={`/${contentType}/dossiers`} className="flex align-items-center"
                          style={{textDecoration: "none"}}><ClickableTag name="Visit"/></Link>
                </p>
                <p className="flex align-items-center gap-1"><span>{proj.link2Header}</span>
                    <Link to={`/${contentType}/detail`} className="flex align-items-center"
                          style={{textDecoration: "none"}}><ClickableTag name="Visit"/></Link>
                </p>
            </div>,
            image: contentType === 'dos' ? inputDos.cards[0].image : inputGeo.cards[0].image,
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
