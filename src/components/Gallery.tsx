import {Galleria} from 'primereact/galleria';
import React, { useRef, useState } from "react";
import "./Gallery.css";
import {GalleryProps} from "../props";

const GalleryTemplate = (props: GalleryProps) => {

    const galleria = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

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
            <Galleria ref={galleria} value={props.images} numVisible={3}
                caption={caption} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
                <div className='gallery-cmp'>
                    {
                        props.images && props.images.map((image, index) => {
                            return (
                                <div className="gallery-item-div" key={index}>
                                    <img src={image.itemImageSrc} alt={image.alt}
                                         className={props?.largeImage ? "gallery-item-img large" : "gallery-item-img"} onClick={
                                        () => {
                                            setActiveIndex(index);
                                            if (galleria.current !== null) {
                                                galleria.current.show();
                                            }
                                        }
                                    } />
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    </div>
}

export {GalleryTemplate};
