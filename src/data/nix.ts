import {ngi0Projects} from "./ngi0Projects";

export default {
    "cards": [
        ngi0Projects.typeInferenceForNix,
        ngi0Projects.debugAdapterWithNix,
        ngi0Projects.dream2nix,
        ngi0Projects.libnix,
        ngi0Projects.genealogos,
        ngi0Projects.genodepkgs,
        ngi0Projects.pythonSupplyChainWithDream2Nix,
        ngi0Projects.securingNixOSServicesWithSystemd,
        ngi0Projects.uefiSecureBootSupportFotNixOS,
        ngi0Projects.p4Nix,
        ngi0Projects.nixOSClevis,
        ngi0Projects.nixCloud,
        ngi0Projects.nixCloudWebservices,
        ngi0Projects.selfPrivacy,
        ngi0Projects.robotnix,
        ngi0Projects.liminix,
        ngi0Projects.mobileNixos
    ],
    "tags": [
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
    ],
    "projects": [
        {
            "image": "/ngi0/img/dream2nix.logo.svg",
            "header": "Nix Ecosystem",
            "text": "Nix is a powerful system that integrates a declarative programming language, a versatile package\nmanager, and a comprehensive operating system. As a declarative language, Nix allows users to\ndescribe their system configurations in a high-level, human-readable format, ensuring consistency\nand reproducibility across different environments. Its package manager, also named Nix, facilitates\nthe installation, upgrading, and management of software packages with atomic upgrades and rollbacks,\nisolation of dependencies, and a robust versioning system. Moreover, NixOS, the operating system\nbuilt on Nix, leverages these capabilities to provide a highly reliable and customizable platform,\nmaking it an ideal choice for developers and system administrators seeking a modern approach to\nsystem management. In the sections below, we will delve into each of these components in detail,\nexploring their functionalities and the associated NGI0 projects that enhance and support the Nix\necosystem.",
            "links": [
                {
                    "img": "img/nix.svg",
                    "link": "https://nix.dev/manual/nix/stable/",
                    "label": "Nix Reference Manual"
                },
                {
                    "icon": "pi pi-github",
                    "link": "https://github.com/NixOS/nix",
                    "label": "GitHub"
                }
            ]
        },
        {
            "header": "Nix Language",
            "text": "Nix is a functional programming language specifically designed for configuration management and package management. It is the core language of the Nix package manager and the NixOS Linux distribution. The primary objective of Nix is to provide reproducible and deterministic builds, which ensures that software builds and configurations are consistent across different environments.\n\n## Key Features:\n\n- **Purely Functional:** Nix treats packages and configurations as pure functions without side effects. This functional nature allows for precise dependency tracking and ensures that builds are reproducible.\n- **Declarative:** Users declare the desired state of the system in a Nix expression file, and Nix takes care of building and managing the system to match this state. This approach contrasts with imperative package managers that execute a series of commands.\n- **Reproducibility:** Nix aims to produce identical outputs given the same input, making builds reproducible. It uses content-addressed storage to uniquely identify package dependencies and their versions.\n- **Isolation:** Each package is built in a sandboxed environment, ensuring that builds are isolated from the rest of the system and from each other. This reduces the risk of interference between packages.\n- **Atomic Upgrades and Rollbacks:** Nix supports atomic upgrades, meaning a system can be upgraded without downtime. If an upgrade fails, users can easily roll back to the previous working state.\n- **Multi-User Support:** Nix can manage dependencies and configurations for multiple users on the same system, maintaining isolation between their environments.\n- **Cross-Platform:** While primarily used on NixOS, Nix can be used on other Linux distributions and macOS, providing the same functional benefits across different platforms.\n\nNix is particularly useful in environments where consistency, reproducibility, and reliability are paramount. It is popular in DevOps, CI/CD pipelines, and environments where managing complex dependencies and configurations is a challenge.\n\nBrief with examples"
        },
        {
            "header": "Nix Package Manager",
            "text": "The Nix package manager is a powerful tool designed for package management and system configuration. It is known for its unique approach to managing dependencies and environments in a reproducible and reliable manner. Nix ensures that software builds are consistent, isolated, and free from conflicts.\n\n## Key Features:\n\n- **Declarative Configuration:** Nix allows users to define their entire system configuration declaratively. This means you can specify what you want the system to look like, and Nix will build it accordingly.\n- **Reproducible Builds:** Nix guarantees that builds are reproducible by using cryptographic hashes to identify dependencies. This ensures that the same set of inputs will always produce the same output.\n- **Isolation:** Each package is built in a sandboxed environment, preventing dependencies from interfering with each other. This isolation ensures that builds are predictable and reliable.\n- **Atomic Upgrades and Rollbacks:** Nix supports atomic upgrades, allowing the system to be updated without interruption. If something goes wrong, users can easily roll back to the previous state.\n- **Multi-User Support:** Nix can manage dependencies and configurations for multiple users on the same system, maintaining isolation between their environments.\n- **Cross-Platform:** Nix works on various operating systems, including NixOS, other Linux distributions, and macOS, providing a consistent package management experience across different platforms.\n\nThe Nix package manager is especially useful in environments where consistency, reproducibility, and reliability are critical. It is widely used in DevOps, continuous integration/continuous deployment (CI/CD) pipelines, and for managing complex software dependencies.\n\nBrief with examples"
        },
        {
            "header": "Nix OS",
            "text": "NixOS is a Linux distribution built on top of the Nix package manager. It is designed to be reliable, reproducible, and declarative, making it distinct from other Linux distributions. NixOS uses the functional nature of Nix to manage the entire system configuration.\n\n## Key Features:\n\n- **Declarative System Configuration:** In NixOS, the entire system configuration is described in a single file, allowing users to specify the desired state of the system. This makes it easy to reproduce and share system configurations.\n- **Reproducibility:** NixOS ensures that the system can be reproduced exactly, thanks to the Nix package manager's use of cryptographic hashes to track dependencies. This guarantees that the same configuration will produce the same system every time.\n- **Rollbacks:** NixOS allows for atomic upgrades and easy rollbacks. If an update causes issues, users can roll back to a previous configuration effortlessly.\n- **Isolation:** NixOS builds packages in isolation, preventing conflicts and ensuring that each package behaves as expected without interference from other packages.\n- **Binary Caching:** NixOS can use binary caches to speed up the installation of packages, reducing the need to build everything from source. This makes it faster to deploy and update systems.\n- **Consistency Across Environments:** NixOS provides a consistent environment across different machines, making it ideal for development, testing, and production environments where consistency is crucial.\n\nNixOS is particularly suitable for users who need a high level of control over their system configuration and require the ability to reproduce and share environments precisely. It is popular among developers, system administrators, and anyone who values a robust and dependable operating system.\n"
        }
    ],
    "detailedProjects": [
        {
            "header": "Nix Language",
            "linkHeader": "Part of the Nix dossier",
            "text": "Nix is a functional programming language specifically designed for configuration management and package management. It is the core language of the Nix package manager and the NixOS Linux distribution. The primary objective of Nix is to provide reproducible and deterministic builds, which ensures that software builds and configurations are consistent across different environments.\n\nKey Features:\n-------------\n\n*   **Purely Functional:** Nix treats packages and configurations as pure functions without side effects. This functional nature allows for precise dependency tracking and ensures that builds are reproducible.\n*   **Declarative:** Users declare the desired state of the system in a Nix expression file, and Nix takes care of building and managing the system to match this state. This approach contrasts with imperative package managers that execute a series of commands.\n*   **Reproducibility:** Nix aims to produce identical outputs given the same input, making builds reproducible. It uses content-addressed storage to uniquely identify package dependencies and their versions.\n*   **Isolation:** Each package is built in a sandboxed environment, ensuring that builds are isolated from the rest of the system and from each other. This reduces the risk of interference between packages.\n*   **Atomic Upgrades and Rollbacks:** Nix supports atomic upgrades, meaning a system can be upgraded without downtime. If an upgrade fails, users can easily roll back to the previous working state.\n*   **Multi-User Support:** Nix can manage dependencies and configurations for multiple users on the same system, maintaining isolation between their environments.\n*   **Cross-Platform:** While primarily used on NixOS, Nix can be used on other Linux distributions and macOS, providing the same functional benefits across different platforms.\n\nNix is particularly useful in environments where consistency, reproducibility, and reliability are paramount. It is popular in DevOps, CI/CD pipelines, and environments where managing complex dependencies and configurations is a challenge.\n\nBrief with examples"
        }
    ],
    "comparison": [
        {
            "header": "Choosing Between Dockerfile and Nix for Building Docker Images",
            "header2": "Nix vs Docker",
            "linkHeader": "Part of the Nix dossier",
            "link2Header": "Visit the Nix page",
            "text": "In the realm of containerization, Docker has long been a dominant force, offering a simple and effective way to package applications and their dependencies into lightweight, portable containers. Central to Docker’s workflow is the Dockerfile, a text file that contains instructions for building Docker images. However, as alternative approaches emerge, developers are faced with the question: should they stick with Dockerfiles or explore alternatives like Nix for building Docker images?\n\nUnderstanding Dockerfile\n------------------------\n\nDockerfile is the de facto standard for building Docker images. Its simplicity and familiarity have made it widely adopted in the developer community. Dockerfiles consist of a series of instructions that are executed sequentially to build an image layer by layer. These instructions include actions like copying files into the image, installing packages, setting environment variables, and defining the default command to run when the container starts. Pros\n\n*   Simplicity and Familiarity\n\nCons\n\n*   Reproducibility\n\nExploring Nix\n-------------\n\nNix is a powerful package manager and build tool known for its emphasis on reproducibility and declarative approach. While not as ubiquitous as Dockerfiles, Nix offers unique advantages for building Docker images. Pros\n\n*   Reproducibility\n\nCons\n\n*   Learning Curve\n\nChoosing the Right Tool for the Job\n-----------------------------------\n\nBoth Dockerfile and Nix have their strengths and weaknesses, and the choice between them depends on the specific requirements of your project.\n\nHow to switch\n-------------\n\nExamples on how to switch, switching from the 3rd party tool to the NGI0 one."
        }
    ]
}