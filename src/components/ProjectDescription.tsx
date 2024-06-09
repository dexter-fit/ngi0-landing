import "./ProjectDescription.css";
import {Carousel} from "primereact/carousel";
import React from "react";
import {ScrollPanel} from "primereact/scrollpanel";
import {ProjectDescriptionProps} from "../types/ProjectDescriptionProps";

const ProjectDescription = (props: ProjectDescriptionProps) => {

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1,
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    return <>
        {props?.image ? <div className="image-container">
            <img src={props.image} alt="image" key={props.image}/>
        </div> : <></>}

        {props.tags?.length ? <ScrollPanel className="scrollbar">
            <div className="content-wrapper">
                {props.tags}
            </div>
        </ScrollPanel> : <></>}

        {props?.otherProjectsLinkSpace ? props.otherProjectsLinkSpace : <></>}

        <article>
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
                {props.descriptionContent.carousel ? <div>
                    <h2>
                        Associated NGI0 Projects
                    </h2>
                    <div>
                        <Carousel
                            value={props.descriptionContent.carousel.cards}
                            numScroll={1}
                            numVisible={3}
                            responsiveOptions={responsiveOptions}
                            itemTemplate={props.descriptionContent.carousel.template}
                        />
                    </div>
                </div> : <></>}
            </section>
        </article>
    </>
}

export {ProjectDescription}
