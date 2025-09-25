"use client"
import {Carousel} from "primereact/carousel";
import React from "react";
import {AssociatedProjectProps} from "../props";

const AssociatedProjectTemplate = (props: AssociatedProjectProps) => {

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
            breakpoint: '950px',
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: '690px',
            numVisible: 1,
            numScroll: 1,
        },
    ];

    return <div>
        <h2>
            {props.heading}
        </h2>
        {props.description ? <p>{props.description}</p> : <></>}
        <div>
            <Carousel
                value={props.carousel.cards}
                numScroll={1}
                numVisible={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={props.carousel.template}
            />
        </div>
    </div>
}

export {AssociatedProjectTemplate};
