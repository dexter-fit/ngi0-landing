import {ProjectDescriptionLinkType} from "../types/ProjectDescriptionLinkType";
import React from "react";
import {createLinkFromProjectLinkItem} from "./createLinkFromProjectLinkItem";

export const createLinkWithLabelFromProjectLinkItems = (label: string, linkItem: ProjectDescriptionLinkType[]) => {
    const buttons = linkItem.map(createLinkFromProjectLinkItem)
    return <div key={label} className="content-links-div">
        <span>{label}</span>
            <div className="content-links-btns">
                {buttons}
            </div>
        </div>;
};
