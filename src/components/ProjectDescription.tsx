import "./ProjectDescription.css";
import React from "react";
import {ProjectDescriptionProps} from "../types";
import {AssociatedProjectTemplate} from "./AssociatedProjectTemplate";
import {Divider} from "primereact/divider";

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


        <article key={props.descriptionContent.anchor}>
            <section>
                {props.descriptionContent.associatedProjects?.map(project => <AssociatedProjectTemplate
                    description={project.description}
                    carousel={project.carousel}
                    heading={project.heading}
                />)}
            </section>
        </article>

        {props.otherProjectsLinkSpace ? <><Divider align="left">
            <div className="inline-flex align-items-center">
                <i className="pi pi-link mr-2"></i>
                <b>Related Content</b>
            </div>
        </Divider>{props.otherProjectsLinkSpace}</> : <></>}
    </>
}

export {ProjectDescription}
