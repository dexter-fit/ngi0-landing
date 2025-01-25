import {ProjectDescriptionLinkType} from "../types/ProjectDescriptionLinkType";
import React from "react";
import {createLinkFromProjectLinkItem} from "./createLinkFromProjectLinkItem";

export const createLinkWithLabelFromProjectLinkItems = (label: string, linkItem: ProjectDescriptionLinkType[]) => {
    const buttons = linkItem.map(createLinkFromProjectLinkItem)
    return <p className="flex align-items-center gap-1"><span>{label}</span>
        {buttons}
    </p>;
};
