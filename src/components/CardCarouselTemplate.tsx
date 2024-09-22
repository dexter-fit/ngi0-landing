import {ProjectCardType} from "../types";
import {ProjectCard} from "./ProjectCard";
import React from "react";

const CardCarouselTemplate = (card: ProjectCardType) =>
    <ProjectCard key={card.header} card={card}/>;

export {CardCarouselTemplate};
