import {ProjectDescriptionLinkType} from "../types/ProjectDescriptionLinkType";
import React from "react";
import {Link} from "react-router-dom";
import {Button} from "primereact/button";

export const createLinkImageFromLinkedItemIconOrImage = (linkItem: ProjectDescriptionLinkType) =>
    !linkItem.img ? linkItem.icon : <img className="p-0 p-button-icon-left" src={linkItem.img} width="20px" alt=""/>;

export const createLinkFromProjectLinkItem = (linkItem: ProjectDescriptionLinkType) => {
    const img = createLinkImageFromLinkedItemIconOrImage(linkItem);
    return <Link to={linkItem.link}>
        <Button outlined={true} icon={img} className="p-button-tiny" label={linkItem.label}/>
    </Link>;
};
