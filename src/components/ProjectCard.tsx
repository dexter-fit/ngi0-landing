"use client"
import {ProjectCardType} from "../types";
import "./ProjectCard.css";
import {useEffect, useState} from "react";
import {Tag} from "primereact/tag";

const ProjectCard = (props: {card: ProjectCardType, hidden?: boolean, highlight?: boolean}) => {
    const [opacity, setOpacity] = useState(1);
    const [hidden, setHidden] = useState(props.hidden);
    const [highlight, setHighlight] = useState(props.highlight);

    useEffect(() => {
        if (!props.hidden) {
            setHidden(false);
            setTimeout(() => {
                setOpacity(1);
            }, 100);
        } else {
            setOpacity(0);
            setTimeout(() => {
                setHidden(true);
            }, 300);
        }

        setHighlight(props.highlight);
    }, [props.highlight, props.hidden, hidden, opacity]);
    
    return (
        <div className={`my-card${hidden ? " hidden" : ""}${highlight ? " highlight" : ""}`} style={{opacity: `${opacity}`}}>
            <img src={props.card.image} alt={props.card.header}/>
            <div className="card-content">
                <h3>
                    {props.card.header}
                </h3>
                <div>
                    {props.card.fund ? <p className="fund hide-mobile">
                        <span className="fund-label">Fund: </span><span className="fund-name">{props.card.fund}</span>
                    </p> : <></>}
                    {props.card.start ? <p className="hide-mobile">
                        <span className="start">
                            {props.card.start}
                        </span>
                        <span className="divider">
                            -
                        </span>
                        <span className="end">
                            {props.card.end ?? "active"}
                        </span>
                    </p> : <></>}
                </div>
                <p>{props.card.subheader}</p>
            </div>
            <div className="card-tags">
                {props.card.tags.map(tagName => <Tag key={tagName}>{tagName}</Tag>)}
            </div>
            <a className="card-link-container" href={props.card.link}>
                <span className="card-link">Visit</span>
            </a>
        </div>
    );
}

export {ProjectCard};
