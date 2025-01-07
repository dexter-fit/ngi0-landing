import {Tag} from "primereact/tag";
import {ProjectDescriptionProps} from "../types";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";
import {Link, useOutletContext} from "react-router-dom";
import React, {useEffect} from "react";
import {ProjectDescription} from "../components/ProjectDescription";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {ClickableTag} from "../components/ClickableTag";
import inputDos from "../data/nix";
import inputGeo from "../data/geo";
import { markdownToHtml } from "../util/markdownToHtml";
import {fillWithRandomStuff} from "../data/nixDossierData";
import { Button } from "primereact/button";
import {tagsFromProjectCardType} from "../util/tagsFromProjectCardType";

const ProjectDetail = (props: {contentType: "dos" | "geo"}) => {
    const projects: ProjectDescriptionProps[] = loadProjects(props.contentType);

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

function loadProjects(contentType: "dos" | "geo") {
    let projects: ProjectDescriptionProps[] = [];

    const NIX_TAGS = tagsFromProjectCardType(contentType === 'dos' ?
        inputDos.cards :
        inputGeo.cards
    ).map(item => <Tag value={item} key={item}></Tag>);

    const similarNGI0Projects = "Similar NGI0 Projects";
    const similarCorporateProjects = "Similar Corporate Projects";

    for (const proj of contentType === 'dos' ? inputDos.detailedProjects : inputGeo.detailedProjects) {
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
        
        projects.push({
            otherProjectsLinkSpace: <>
                <p><span>Fund</span> <span>NGI0 Assure</span></p>
                <p><span>2022-12</span> - <span>active</span></p>
                <p className="flex align-items-center gap-1"><span>Part of the {"dos" ? "Nix" : "Geography"} dossier</span>
                    <Link to={`/${contentType}`} className="flex align-items-center" style={{textDecoration: "none"}}>
                        <ClickableTag name="Visit"/>
                    </Link>
                </p>
            </>,
            image: contentType === 'dos' ? inputDos.cards[0].image : inputGeo.cards[0].image,
            tags: NIX_TAGS,
            descriptionContent: {
                header: proj.header,
                links: links,
                associatedProjects: [
                    {
                        heading: similarNGI0Projects,
                        carousel: {
                            cards: fillWithRandomStuff(3, contentType),
                            template: CardCarouselTemplate
                        }
                    },
                    {
                        heading: similarCorporateProjects,
                        carousel: {
                            cards: fillWithRandomStuff(4, contentType),
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
