import "./ProjectDescription.css";
import React from "react";
import {ScrollPanel} from "primereact/scrollpanel";
import {ProjectDescriptionProps} from "../types";
import {AssociatedProjectTemplate} from "./AssociatedProjectTemplate";

const ProjectDescription = (props: ProjectDescriptionProps) => {
    return <>
        {props?.image ? <div className="image-container">
            <img src={props.image} alt="image" key={props.image}/>
        </div> : <></>}

        {props.tags?.length ? <ScrollPanel className="scrollbar">
            <div className="content-wrapper">
                {props.tags}
            </div>
        </ScrollPanel> : <></>}

        {props.otherProjectsLinkSpace ? props.otherProjectsLinkSpace : <></>}

        <article key={props.descriptionContent.anchor}>
            <section>
                <h1 id={props.descriptionContent.anchor}>
                    {props.descriptionContent.header}
                </h1>
                <div>
                    {props.children}
                </div>
                <div>
                    {props.descriptionContent.links?.map(item => item)}
                </div>
                {props.descriptionContent.associatedProjects?.map(project => <AssociatedProjectTemplate
                    description={project.description}
                    carousel={project.carousel}
                    heading={project.heading}
                />)}
            </section>
        </article>
    </>
}

export {ProjectDescription}
