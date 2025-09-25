import {ProjectDescriptionProps} from "@/props";
import {ProjectDescription} from "@/components/ProjectDescription";
import {replaceSpacesWith} from "./replaceSpacesWith";
import React from "react";

export const projectDescriptionPropsToProjectDescriptions = (projects: ProjectDescriptionProps[]) => <>
    {projects.map((item, index) =>
        <ProjectDescription key={`${item.descriptionContent.header}_${index}`}
                            {...item}
                            descriptionContent={{
                                ...item.descriptionContent,
                                anchor: replaceSpacesWith(`${item.descriptionContent.header}_${index}`, "_")
                            }}>
            {item.children}
        </ProjectDescription>
    )}
</>;
