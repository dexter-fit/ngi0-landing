import "./ProjectDescription.css";
import React from "react";
import {ProjectDescriptionProps} from "@/props";
import {AssociatedProjectTemplate} from "./AssociatedProjectTemplate";
import {Divider} from "primereact/divider";
import {GalleryTemplate} from "./Gallery";

const ProjectDescription = (props: ProjectDescriptionProps) => {
    return <>
        <h1 id={props.descriptionContent.anchor}>
            {props.descriptionContent.header}
        </h1>
        <div className="image-content-wrapper">
            {props?.image ? <img className="image" src={props.image} alt="header_image" key={props.image}/> : <></>}
            {props.children}
        </div>

        <div className="links-div">
            {props.descriptionContent.links?.map(item => item)}
        </div>

        {props.tags?.length ? <div className="content-wrapper">
            {props.tags}
        </div> : <></>}

        <article key={`${props.descriptionContent.anchor}-gallery`}>
            <section>
                {props.descriptionContent.gallery?.map(project => <GalleryTemplate
                    description={project.description}
                    heading={project.heading}
                    images={project.images}
                    largeImage={project.largeImage}
                />)}
            </section>
        </article>

        <article key={`${props.descriptionContent.anchor}-associatedProjects`}>
            <section>
                {props.descriptionContent.associatedProjects?.map((project, index) => <AssociatedProjectTemplate
                    key={index}
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
