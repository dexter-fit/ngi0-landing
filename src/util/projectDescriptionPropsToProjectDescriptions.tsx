import {ProjectDescriptionProps} from "@/props";
import {ProjectDescription} from "@/components/ProjectDescription";
import {replaceSpacesWith} from "./replaceSpacesWith";
import React from "react";

export const projectDescriptionPropsToProjectDescriptions = (projects: ProjectDescriptionProps[]) => <>
    {projects.map(item =>
        <ProjectDescription key={item.descriptionContent.header}
                            {...item}
                            descriptionContent={{
                                ...item.descriptionContent,
                                anchor: replaceSpacesWith(item.descriptionContent.header, "_")
                            }}>
            {item.children}
        </ProjectDescription>
    )}
</>;
