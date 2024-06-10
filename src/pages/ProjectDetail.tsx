import {Tag} from "primereact/tag";
import {ProjectDescriptionProps} from "../types";
import {
    NIX_LANGUAGE_RELATED_PROJECT_CARDS,
    NIX_OS_RELATED_PROJECT_CARDS
} from "../data/nixDossierData";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";
import {Link, useOutletContext} from "react-router-dom";
import React, {useEffect} from "react";
import {ProjectDescription} from "../components/ProjectDescription";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {ClickableTag} from "../components/ClickableTag";

const ProjectDetail = () => {
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

    const similarNGI0Projects = "Similar NGI0 Projects";
    const similarCorporateProjects = "Similar Corporate Projects";

    const projects: ProjectDescriptionProps[] = [
        {
            otherProjectsLinkSpace: <>
                <p><span>Fund</span> <span>NGI0 Assure</span></p>
                <p><span>2022-12</span> - <span>active</span></p>
                <p className="flex align-items-center gap-1"><span>Part of the Nix dossier</span>
                    <Link to="/dossiers" className="flex align-items-center" style={{textDecoration: "none"}}><ClickableTag name="Visit"/></Link>
                </p>
            </>,
            image: "img/dream2nix.logo.svg",
            tags: NIX_TAGS,
            descriptionContent: {
                header: "Nix Language",
                links: ["Links here"],
                associatedProjects: [
                    {
                        heading: similarNGI0Projects,
                        carousel: {
                            cards: NIX_LANGUAGE_RELATED_PROJECT_CARDS,
                            template: CardCarouselTemplate
                        }
                    },
                    {
                        heading: similarCorporateProjects,
                        carousel: {
                            cards: NIX_OS_RELATED_PROJECT_CARDS,
                            template: CardCarouselTemplate
                        }
                    }
                ]
            },
            children: <>
                <p>Nix is a functional programming language specifically designed for configuration management and
                    package management. It is the core language of the Nix package manager and the NixOS Linux
                    distribution. The primary objective of Nix is to provide reproducible and deterministic builds,
                    which ensures that software builds and configurations are consistent across different
                    environments.</p>
                <h2>Key Features:</h2>
                <ul>
                    <li><strong>Purely Functional:</strong> Nix treats packages and configurations as pure functions
                        without side effects. This functional nature allows for precise dependency tracking and ensures
                        that builds are reproducible.
                    </li>
                    <li><strong>Declarative:</strong> Users declare the desired state of the system in a Nix expression
                        file, and Nix takes care of building and managing the system to match this state. This approach
                        contrasts with imperative package managers that execute a series of commands.
                    </li>
                    <li><strong>Reproducibility:</strong> Nix aims to produce identical outputs given the same input,
                        making builds reproducible. It uses content-addressed storage to uniquely identify package
                        dependencies and their versions.
                    </li>
                    <li><strong>Isolation:</strong> Each package is built in a sandboxed environment, ensuring that
                        builds are isolated from the rest of the system and from each other. This reduces the risk of
                        interference between packages.
                    </li>
                    <li><strong>Atomic Upgrades and Rollbacks:</strong> Nix supports atomic upgrades, meaning a system
                        can be upgraded without downtime. If an upgrade fails, users can easily roll back to the
                        previous working state.
                    </li>
                    <li><strong>Multi-User Support:</strong> Nix can manage dependencies and configurations for multiple
                        users on the same system, maintaining isolation between their environments.
                    </li>
                    <li><strong>Cross-Platform:</strong> While primarily used on NixOS, Nix can be used on other Linux
                        distributions and macOS, providing the same functional benefits across different platforms.
                    </li>
                </ul>
                <p>Nix is particularly useful in environments where consistency, reproducibility, and reliability are
                    paramount. It is popular in DevOps, CI/CD pipelines, and environments where managing complex
                    dependencies and configurations is a challenge.</p>
                <p>
                    Brief with examples
                </p>
            </>
        }
    ]


    const { setNewMenuItemsFromChild } = useOutletContext();

    useEffect(() => {
        const objectsList = [
            {
                label: "Nix Language detail",
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
                                descriptionContent={{...item.descriptionContent, anchor: item.descriptionContent.header.replace(/ /g, "_")}}>
                {item.children}
            </ProjectDescription>
        )}
    </>;
};

export {ProjectDetail};
