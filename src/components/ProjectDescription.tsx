import "./ProjectDescription.css";
import React from "react";
import {ScrollPanel} from "primereact/scrollpanel";
import {ProjectDescriptionProps} from "../types";
import {AssociatedProjectTemplate} from "./AssociatedProjectTemplate";

const ProjectDescription = (props: ProjectDescriptionProps) => {
    return <>
        <h1 id={props.descriptionContent.anchor}>
                {props.descriptionContent.header}
        </h1>
        <div className="image-content-wrapper">
            {props?.image ? <img className="image" src={props.image} alt="image" key={props.image}/>: <></>}
            {props.children}
        </div>

        <div className="flex gap-1 margin-btm">
            {props.descriptionContent.links?.map(item => item)}
        </div>

        {props.tags?.length ? <div className="content-wrapper">
            {props.tags}
        </div> : <></>}

        {props.otherProjectsLinkSpace ? props.otherProjectsLinkSpace : <></>}

        <article key={props.descriptionContent.anchor}>
            <section>
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
