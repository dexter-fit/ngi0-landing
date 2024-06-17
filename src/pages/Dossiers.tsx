import {Tag} from "primereact/tag";
import React, {useEffect} from "react";
import {ProjectDescription} from "../components/ProjectDescription";
import {
    NIX_LANGUAGE_RELATED_PROJECT_CARDS,
    NIX_OS_RELATED_PROJECT_CARDS,
    NIX_PKG_RELATED_PROJECT_CARDS
} from "../data/nixDossierData";
import {ProjectDescriptionProps} from "../types";
import {Link, useOutletContext} from "react-router-dom";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";
import {replaceSpacesWith} from "../util/replaceSpacesWith";
import {markdownToHtml} from "../util/markdownToHtml";
import {Button} from "primereact/button";

const Dossiers = () => {

    const NIX_TAGS = [
        "Functional Package Management",
        "Declarative Configuration",
        "Immutable Infrastructure",
        "Reproducible Builds",
        "Package Isolation",
        "Lazy Evaluation",
        "Hygienic Build Environments",
        "Multi-Platform Support",
        "Atomic Upgrades/Rollbacks",
        "Garbage Collection",
        "NixOS",
        "Functional Programming",
        "Customization",
        "Community-Driven",
        "Configuration Management"
    ];

    const associatedNGI0Projects = "Associated NGI0 Projects";
    const img = <img className="p-0 p-button-icon-left" src="img/nix.svg" width="20px"/>;

    const projects: ProjectDescriptionProps[] = [
        {
            image: "img/dream2nix.logo.svg",
            tags: NIX_TAGS.map(item => <Tag value={item} key={item}></Tag>),
            descriptionContent: {
                header: "Nix Ecosystem",
                links: [
                    <Link to="https://nix.dev/manual/nix/stable/"><Button outlined={true} icon={img} className="p-button-tiny" label="Nix Reference Manual"/></Link>,
                    <Link to="https://github.com/NixOS/nix"><Button className="p-button-tiny" icon="pi pi-github" outlined={true} label="GitHub"/></Link>
                ]
            },
            children: <div dangerouslySetInnerHTML={{
                __html: markdownToHtml(`
Nix is a powerful system that integrates a declarative programming language, a versatile package
manager, and a comprehensive operating system. As a declarative language, Nix allows users to
describe their system configurations in a high-level, human-readable format, ensuring consistency
and reproducibility across different environments. Its package manager, also named Nix, facilitates
the installation, upgrading, and management of software packages with atomic upgrades and rollbacks,
isolation of dependencies, and a robust versioning system. Moreover, NixOS, the operating system
built on Nix, leverages these capabilities to provide a highly reliable and customizable platform,
making it an ideal choice for developers and system administrators seeking a modern approach to
system management. In the sections below, we will delve into each of these components in detail,
exploring their functionalities and the associated NGI0 projects that enhance and support the Nix
ecosystem.
`)
            }}>
            </div>
        },
        {
            descriptionContent: {
                header: "Nix Language",
                links: ["Links here"],
                associatedProjects: [
                    {
                        heading: associatedNGI0Projects,
                        carousel: {
                            cards: NIX_LANGUAGE_RELATED_PROJECT_CARDS,
                            template: CardCarouselTemplate
                        }
                    }
                ]
            },
            children: <div dangerouslySetInnerHTML={{
                __html: markdownToHtml(`
Nix is a functional programming language specifically designed for configuration management and package management. It is the core language of the Nix package manager and the NixOS Linux distribution. The primary objective of Nix is to provide reproducible and deterministic builds, which ensures that software builds and configurations are consistent across different environments.

## Key Features:

- **Purely Functional:** Nix treats packages and configurations as pure functions without side effects. This functional nature allows for precise dependency tracking and ensures that builds are reproducible.
- **Declarative:** Users declare the desired state of the system in a Nix expression file, and Nix takes care of building and managing the system to match this state. This approach contrasts with imperative package managers that execute a series of commands.
- **Reproducibility:** Nix aims to produce identical outputs given the same input, making builds reproducible. It uses content-addressed storage to uniquely identify package dependencies and their versions.
- **Isolation:** Each package is built in a sandboxed environment, ensuring that builds are isolated from the rest of the system and from each other. This reduces the risk of interference between packages.
- **Atomic Upgrades and Rollbacks:** Nix supports atomic upgrades, meaning a system can be upgraded without downtime. If an upgrade fails, users can easily roll back to the previous working state.
- **Multi-User Support:** Nix can manage dependencies and configurations for multiple users on the same system, maintaining isolation between their environments.
- **Cross-Platform:** While primarily used on NixOS, Nix can be used on other Linux distributions and macOS, providing the same functional benefits across different platforms.

Nix is particularly useful in environments where consistency, reproducibility, and reliability are paramount. It is popular in DevOps, CI/CD pipelines, and environments where managing complex dependencies and configurations is a challenge.

Brief with examples
`)
            }}>
            </div>
        },
        {
            descriptionContent: {
                header: "Nix Package Manager",
                links: ["Links here"],
                associatedProjects: [
                    {
                        heading: associatedNGI0Projects,
                        carousel: {
                            cards: NIX_PKG_RELATED_PROJECT_CARDS,
                            template: CardCarouselTemplate
                        }
                    }
                ]
            },
            children: <div dangerouslySetInnerHTML={{
                __html: markdownToHtml(`
The Nix package manager is a powerful tool designed for package management and system configuration. It is known for its unique approach to managing dependencies and environments in a reproducible and reliable manner. Nix ensures that software builds are consistent, isolated, and free from conflicts.

## Key Features:

- **Declarative Configuration:** Nix allows users to define their entire system configuration declaratively. This means you can specify what you want the system to look like, and Nix will build it accordingly.
- **Reproducible Builds:** Nix guarantees that builds are reproducible by using cryptographic hashes to identify dependencies. This ensures that the same set of inputs will always produce the same output.
- **Isolation:** Each package is built in a sandboxed environment, preventing dependencies from interfering with each other. This isolation ensures that builds are predictable and reliable.
- **Atomic Upgrades and Rollbacks:** Nix supports atomic upgrades, allowing the system to be updated without interruption. If something goes wrong, users can easily roll back to the previous state.
- **Multi-User Support:** Nix can manage dependencies and configurations for multiple users on the same system, maintaining isolation between their environments.
- **Cross-Platform:** Nix works on various operating systems, including NixOS, other Linux distributions, and macOS, providing a consistent package management experience across different platforms.

The Nix package manager is especially useful in environments where consistency, reproducibility, and reliability are critical. It is widely used in DevOps, continuous integration/continuous deployment (CI/CD) pipelines, and for managing complex software dependencies.

Brief with examples
`)
            }}>
            </div>
        },
        {
            descriptionContent: {
                header: "Nix OS",
                links: ["Links here"],
                associatedProjects: [
                    {
                        heading: associatedNGI0Projects,
                        description: "Description of associated projects. As NixOS has many projects with different targets (build upon it for mobile, for cloud, extensions and so on we should probably describe each of them separately. And some description about the projects, explaining the goals of this group i.e. these aim to improve the NixOS operating system itself, ...",
                        carousel: {
                            cards: NIX_OS_RELATED_PROJECT_CARDS,
                            template: CardCarouselTemplate
                        }
                    },
                    {
                        heading: associatedNGI0Projects,
                        description: "Description of associated projects. As NixOS has many projects with different targets (build upon it for mobile, for cloud, extensions and so on we should probably describe each of them separately. And some description about the projects, explaining the goals of this group i.e. these aim to improve the NixOS operating system itself, ...",
                        carousel: {
                            cards: NIX_OS_RELATED_PROJECT_CARDS,
                            template: CardCarouselTemplate
                        }
                    }
                ]
            },
            children: <div dangerouslySetInnerHTML={{
                __html: markdownToHtml(`
NixOS is a Linux distribution built on top of the Nix package manager. It is designed to be reliable, reproducible, and declarative, making it distinct from other Linux distributions. NixOS uses the functional nature of Nix to manage the entire system configuration.

## Key Features:

- **Declarative System Configuration:** In NixOS, the entire system configuration is described in a single file, allowing users to specify the desired state of the system. This makes it easy to reproduce and share system configurations.
- **Reproducibility:** NixOS ensures that the system can be reproduced exactly, thanks to the Nix package manager's use of cryptographic hashes to track dependencies. This guarantees that the same configuration will produce the same system every time.
- **Rollbacks:** NixOS allows for atomic upgrades and easy rollbacks. If an update causes issues, users can roll back to a previous configuration effortlessly.
- **Isolation:** NixOS builds packages in isolation, preventing conflicts and ensuring that each package behaves as expected without interference from other packages.
- **Binary Caching:** NixOS can use binary caches to speed up the installation of packages, reducing the need to build everything from source. This makes it faster to deploy and update systems.
- **Consistency Across Environments:** NixOS provides a consistent environment across different machines, making it ideal for development, testing, and production environments where consistency is crucial.

NixOS is particularly suitable for users who need a high level of control over their system configuration and require the ability to reproduce and share environments precisely. It is popular among developers, system administrators, and anyone who values a robust and dependable operating system.
`)}}>
            </div>
        }
    ]


    const { setNewMenuItemsFromChild } = useOutletContext();

    useEffect(() => {
        const objectsList = [
            {
                label: "Nix Environment Dossier",
                items: projects.map(item => ({
                    label: item.descriptionContent.header,
                    url: `/dossiers#${replaceSpacesWith(item.descriptionContent.header, "_")}`,
                    icon: "pi pi-file"
                }))
            }
        ];

        setNewMenuItemsFromChild(objectsList);
    }, []);

    return <>
        {projects.map(item =>
                <ProjectDescription key={item.descriptionContent.header}
                                    image={item.image}
                                    tags={item.tags}
                                    descriptionContent={{...item.descriptionContent, anchor: replaceSpacesWith(item.descriptionContent.header, "_")}}>
                    {item.children}
                </ProjectDescription>
        )}
    </>
}

export {Dossiers};
