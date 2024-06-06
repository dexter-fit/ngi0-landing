import {Carousel} from "primereact/carousel";
import React, {ReactNode} from "react";
import {CardProps} from "primereact/card";

const ProjectDescription = (props: {image?: string, tags?: ReactNode[], descriptionContent: {header: string, links?: ReactNode[], carousel?: {cards: CardProps[], template: (item: any) => React.ReactNode}}, children: ReactNode}) => {

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
        <div className="tag-list">
            {props.tags}
        </div>
        <article>
            <section>
                <h1>
                    {props.descriptionContent.header}
                </h1>
                <div>
                    {props.children}
                </div>
                <div>
                    {props.descriptionContent.links?.map(item => item)}
                </div>
                { props.descriptionContent.carousel ? <div>
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
