import {Tag} from "primereact/tag";
import {ProjectCard} from "../components/ProjectCard";
import React from "react";
import {CARDS} from "../data/cards";
import {ProjectCardType} from "../types";
import {ProjectDescription} from "../components/ProjectDescription";

const Dossiers = () => {
    const cards = CARDS.slice(0, 3);

    const cardCarouselTemplate = (card: ProjectCardType) => <ProjectCard key={card.header} card={card}/>

    return <div>
        <ProjectDescription key={"Nix Ecosystem"} tags={[<Tag value="Nix"></Tag>]} descriptionContent={{header: "Nix Ecosystem"}} image="img/dream2nix.logo.svg">
            <p>
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
        </ProjectDescription>

        <ProjectDescription key={"Nix Language"} descriptionContent={{header: "Nix Language", links: ["Links here"], carousel: {cards: cards, template: cardCarouselTemplate}}}>
            <>
                <p>
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
                <p>
                    Brief with examples
                </p>
            </>
        </ProjectDescription>
    </div>
}

export {Dossiers};
