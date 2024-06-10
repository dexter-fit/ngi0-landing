import {Tag} from "primereact/tag";
import {ProjectDescriptionProps} from "../types";
import {Link, useOutletContext} from "react-router-dom";
import {ClickableTag} from "../components/ClickableTag";
import React, {useEffect} from "react";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {ProjectDescription} from "../components/ProjectDescription";

const ProjectsComparison = () => {
    const NIX_TAGS = [
        "Functional Package Management",
        "Declarative Configuration",
        "Immutable Infrastructure",
        "Reproducible Builds",
        "Package Isolation",
        "Lazy Evaluation",
        "Hygienic Build Environments",
        "Multi-Platform Support"
    ].map(item => <Tag value={item} key={item}></Tag>);

    const projects: ProjectDescriptionProps[] = [
        {
            otherProjectsLinkSpace: <div className="full-width flex flex-column">
                <p className="flex align-items-center gap-1"><span>Part of the Nix dossier</span>
                    <Link to="/dossiers" className="flex align-items-center"
                          style={{textDecoration: "none"}}><ClickableTag name="Visit"/></Link>
                </p>
                <p className="flex align-items-center gap-1"><span>Visit the Nix page</span>
                    <Link to="/detail" className="flex align-items-center"
                          style={{textDecoration: "none"}}><ClickableTag name="Visit"/></Link>
                </p>
            </div>,
            image: "img/dream2nix.logo.svg",
            tags: NIX_TAGS,
            descriptionContent: {
                header: "Choosing Between Dockerfile and Nix for Building Docker Images"
            },
            children: <>
                <p>In the realm of containerization, Docker has long been a dominant force, offering a simple and
                    effective way to package applications and their dependencies into lightweight, portable containers.
                    Central to Docker’s workflow is the Dockerfile, a text file that contains instructions for building
                    Docker images. However, as alternative approaches emerge, developers are faced with the question:
                    should they stick with Dockerfiles or explore alternatives like Nix for building Docker images?</p>
                <h2>Understanding Dockerfile</h2>
                <div>Dockerfile is the de facto standard for building Docker images. Its simplicity and familiarity have
                    made it widely adopted in the developer community. Dockerfiles consist of a series of instructions
                    that are executed sequentially to build an image layer by layer. These instructions include actions
                    like copying files into the image, installing packages, setting environment variables, and defining
                    the default command to run when the container starts.
                    Pros
                    <ul>
                        <li>
                            Simplicity and Familiarity
                        </li>
                    </ul>
                    Cons
                    <ul>
                        <li>
                            Reproducibility
                        </li>
                    </ul>
                </div>
                <h2>Exploring Nix</h2>
                <div>Nix is a powerful package manager and build tool known for its emphasis on reproducibility and
                    declarative approach. While not as ubiquitous as Dockerfiles, Nix offers unique advantages for
                    building Docker images.
                    Pros
                    <ul>
                        <li>
                            Reproducibility
                        </li>
                    </ul>
                    Cons
                    <ul>
                        <li>
                            Learning Curve
                        </li>
                    </ul>
                </div>
                <h2>Choosing the Right Tool for the Job</h2>
                <p>Both Dockerfile and Nix have their strengths and weaknesses, and the choice between them depends on the specific requirements of your project.
                </p>
                <h2>How to switch</h2>
                <p>
                    Examples on how to switch, we are getting paid so the only thing that matters is switching from the 3rd party tool to the NGI0 one.
                </p>
            </>
        }
    ]

    const {setNewMenuItemsFromChild} = useOutletContext();

    useEffect(() => {
        const objectsList = [
            {
                label: "Nix vs Docker",
                items: projects.map(item => ({
                    label: item.descriptionContent.header,
                    url: `/detail#${replaceSpacesWith(item.descriptionContent.header, "_")}`,
                    icon: "pi pi-file"
                }))
            }
        ];

        setNewMenuItemsFromChild(objectsList);
    }, []);

    return <>
        {projects.map(item =>
            <ProjectDescription key={item.descriptionContent.header}
                                otherProjectsLinkSpace={item.otherProjectsLinkSpace}
                                image={item.image}
                                tags={item.tags}
                                descriptionContent={{
                                    ...item.descriptionContent,
                                    anchor: item.descriptionContent.header.replace(/ /g, "_")
                                }}>
                {item.children}
            </ProjectDescription>
        )}
    </>;
};

export {ProjectsComparison};
