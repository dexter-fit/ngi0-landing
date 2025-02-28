import {Galleria} from 'primereact/galleria';
import React from "react";
import "./Gallery.css";
import {GalleryProps} from "../props";

const GalleryTemplate = (props: GalleryProps) => {

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 5
        },
        {
            breakpoint: '1199px',
            numVisible: 5
        },
        {
            breakpoint: '950px',
            numVisible: 3
        },
        {
            breakpoint: '690px',
            numVisible: 1
        },
    ];

    const itemTemplate = (item: any) => {
        return <img src={item.itemImageSrc} alt={item.alt} className='item-img' />
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={item.itemImageSrc} alt={item.alt} className='thumbnail-img'/>
    }

    const caption = (item: any) => {
        return (
            item.title || item.alt ?
            <div className='alt-div'>
                {item.title ? <div className="text-xl mb-2 font-bold">{item.title}</div> : <></>}
                {item.alt ? <p className="text-white">{item.alt}</p> : <></>}
            </div>
            : <></>
        );
    }

    return <div>
        {props.heading ? <h2>{props.heading}</h2> : <></>}
        {props.description ? <p>{props.description}</p> : <></>}
        <div>
            <Galleria value={props.images} responsiveOptions={responsiveOptions} numVisible={3} className='gallery-cmp' 
                    item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption}/>
        </div>
    </div>
}

export {GalleryTemplate};
