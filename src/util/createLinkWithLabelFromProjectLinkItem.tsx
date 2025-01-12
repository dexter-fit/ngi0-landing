import {ProjectDescriptionLinkType} from "../types/ProjectDescriptionLinkType";
import React from "react";
import {Link} from "react-router-dom";
import {Button} from "primereact/button";
import { createLinkImageFromLinkedItemIconOrImage } from "./createLinkFromProjectLinkItem";

export const createLinkWithLabelFromProjectLinkItem = (linkItem: ProjectDescriptionLinkType) => {
    const img = createLinkImageFromLinkedItemIconOrImage(linkItem);
    return <p className="flex align-items-center gap-1"><span>{linkItem.label}</span>
        <Link to={linkItem.link} className="flex align-items-center" style={{textDecoration: "none"}}>
            <Button outlined={true} icon={img} className="p-button-tiny" label="Visit"/>
        </Link>
    </p>;
};
