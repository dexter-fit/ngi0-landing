import {Tag} from "primereact/tag";
import React, {useEffect} from "react";
import {ProjectDescription} from "../components/ProjectDescription";
import {
    NIX_LANGUAGE_RELATED_PROJECT_CARDS,
    NIX_OS_RELATED_PROJECT_CARDS,
    NIX_PKG_RELATED_PROJECT_CARDS
} from "../data/nixDossierData";
import {ProjectDescriptionProps} from "../types";
import {useOutletContext} from "react-router-dom";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";
import {replaceSpacesWith} from "../util/replaceSpacesWith";

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
    ].map(item => <Tag value={item} key={item}></Tag>);

    const associatedNGI0Projects = "Associated NGI0 Projects";

    const projects: ProjectDescriptionProps[] = [
        {
            image: "img/dream2nix.logo.svg",
            tags: NIX_TAGS,
            descriptionContent: {
                header: "Nix Ecosystem",
                links: ["Links here"]
            },
            children: <p>
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
            </p>
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
            children: <>
                <p>The Nix package manager is a powerful tool designed for package management and system configuration.
                    It is known for its unique approach to managing dependencies and environments in a reproducible and
                    reliable manner. Nix ensures that software builds are consistent, isolated, and free from
                    conflicts.</p>
                <h2>Key Features:</h2>
                <ul>
                    <li><strong>Declarative Configuration:</strong> Nix allows users to define their entire system
                        configuration declaratively. This means you can specify what you want the system to look like,
                        and Nix will build it accordingly.
                    </li>
                    <li><strong>Reproducible Builds:</strong> Nix guarantees that builds are reproducible by using
                        cryptographic hashes to identify dependencies. This ensures that the same set of inputs will
                        always produce the same output.
                    </li>
                    <li><strong>Isolation:</strong> Each package is built in a sandboxed environment, preventing
                        dependencies from interfering with each other. This isolation ensures that builds are
                        predictable and reliable.
                    </li>
                    <li><strong>Atomic Upgrades and Rollbacks:</strong> Nix supports atomic upgrades, allowing the
                        system to be updated without interruption. If something goes wrong, users can easily roll back
                        to the previous state.
                    </li>
                    <li><strong>Multi-User Support:</strong> Nix can manage dependencies and configurations for multiple
                        users on the same system, maintaining isolation between their environments.
                    </li>
                    <li><strong>Cross-Platform:</strong> Nix works on various operating systems, including NixOS, other
                        Linux distributions, and macOS, providing a consistent package management experience across
                        different platforms.
                    </li>
                </ul>
                <p>The Nix package manager is especially useful in environments where consistency, reproducibility, and
                    reliability are critical. It is widely used in DevOps, continuous integration/continuous deployment
                    (CI/CD) pipelines, and for managing complex software dependencies.</p>
                <p>
                    Brief with examples
                </p>
            </>
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
            children: <>
                <p>NixOS is a Linux distribution built on top of the Nix package manager. It is designed to be reliable,
                    reproducible, and declarative, making it distinct from other Linux distributions. NixOS uses the
                    functional nature of Nix to manage the entire system configuration.</p>
                <h2>Key Features:</h2>
                <ul>
                    <li><strong>Declarative System Configuration:</strong> In NixOS, the entire system configuration is
                        described in a single file, allowing users to specify the desired state of the system. This
                        makes it easy to reproduce and share system configurations.
                    </li>
                    <li><strong>Reproducibility:</strong> NixOS ensures that the system can be reproduced exactly,
                        thanks to the Nix package manager's use of cryptographic hashes to track dependencies. This
                        guarantees that the same configuration will produce the same system every time.
                    </li>
                    <li><strong>Rollbacks:</strong> NixOS allows for atomic upgrades and easy rollbacks. If an update
                        causes issues, users can roll back to a previous configuration effortlessly.
                    </li>
                    <li><strong>Isolation:</strong> NixOS builds packages in isolation, preventing conflicts and
                        ensuring that each package behaves as expected without interference from other packages.
                    </li>
                    <li><strong>Binary Caching:</strong> NixOS can use binary caches to speed up the installation of
                        packages, reducing the need to build everything from source. This makes it faster to deploy and
                        update systems.
                    </li>
                    <li><strong>Consistency Across Environments:</strong> NixOS provides a consistent environment across
                        different machines, making it ideal for development, testing, and production environments where
                        consistency is crucial.
                    </li>
                </ul>
                <p>NixOS is particularly suitable for users who need a high level of control over their system
                    configuration and require the ability to reproduce and share environments precisely. It is popular
                    among developers, system administrators, and anyone who values a robust and dependable operating
                    system.</p>
            </>
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
