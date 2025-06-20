import {ProjectCardType, ProjectPageType, DossierType} from "@/types";

const ROS_CARDS: ProjectCardType[] = [];

const ROS_TAGS: string[] = [];

const ROS_PROJECTS: ProjectPageType = {
    pageTitle: "Robotics and ROS",
    menuTitle: "Robotics and ROS",
    projectDescription: [
        {
            header: "Robotics and ROS Dossier",
            text: `
In the world of robotics, open-source software has become a cornerstone for innovation, collaboration, and accessibility.
Free and open-source software (FOSS) empowers developers, researchers, and enthusiasts to create, share, and improve
robotic systems without the constraints of proprietary licenses. By leveraging FOSS, the robotics community fosters a
collaborative environment where knowledge is freely exchanged, and cutting-edge technology is made accessible to all.
This page introduces you to the role of FOSS in the field of robotics, with a special focus on its integration with the
Robot Operating System (ROS). ROS is an open-source framework that provides tools, libraries, and conventions to simplify
the development of complex robotic systems. Whether you're designing a new robot, exploring robotic algorithms, or
contributing to an open-source project, you'll find how FOSS tools and ROS can accelerate your work and expand the
potential of your robotics projects.
        `,
        },
        {
            header: "ROS1",
            text: `
ROS 1 (Robot Operating System 1) is the pioneering open-source framework that has become the backbone of modern robotics
development. Launched over a decade ago, ROS 1 has enabled robotics researchers, engineers, and enthusiasts around the
world to create, share, and improve robotic systems with unprecedented ease and flexibility. While ROS 1 has been the
foundation of many successful robotic projects, it has also paved the way for ROS 2, which builds on its strengths while
addressing new challenges. However, it is considered obsolete nowadays.
        `,
            links: [
                {
                    label: "ROS1",
                    link: "https://wiki.ros.org/"
                }
            ],
            tags: ["ROS1"],
            image: "/ngi0/img/ros/ROS1.png"
        },
        {
            header: "ROS2",
            text: `
ROS 2 (Robot Operating System 2) is the next-generation framework designed to support the development of advanced
robotic systems. Building on the success of its predecessor, ROS 1, ROS 2 introduces a host of new features that address
the evolving needs of modern robotics, including real-time performance, improved security, and enhanced scalability for
complex, distributed systems. At its core, ROS 2 offers a flexible set of tools, libraries, and conventions that
simplify the development, simulation, and deployment of robotics applications. It contains enhanced communication
frameworks, better integration with industry-standard hardware, and the ability to deploy on multiple platforms, from
embedded systems to cloud-based infrastructures. This enables roboticists to address real-time requirements, multi-robot
coordination, and other advanced capabilities with ease.
        `,
            links: [
                {
                    label: "ROS2",
                    link: "https://wiki.ros.org/"
                }
            ],
            tags: ["ROS2"],
            image: "/ngi0/img/ros/ROS2.png"
        },
        {
            header: "MoveIt!",
            text: `
MoveIt! is one of the most widely used open-source libraries for motion planning, manipulation, and control in robotics.
It provides advanced tools for robot arm manipulation, 3D perception, and planning with various optimization methods.
It is crucial for industrial applications like robotic arms and has been adopted by a large number of research institutions
and companies.
        `,
            links: [
                {
                    label: "MoveIt!",
                    link: "https://moveit.ai/"
                }
            ],
            tags: [
                "Motion Planning",
                "Robot Manipulation",
                "Inverse Kinematics",
                "Trajectory Planning",
                "Path Planning",
                "Collision Avoidance"
            ],
            image: "/ngi0/img/ros/moveit.png"
        },
        {
            header: "Gazebo",
            text: `
Gazebo is a powerful simulation environment that integrates with ROS to simulate robots in 3D environments. It allows
developers to test algorithms, design robots, and conduct experiments without the need for real-world hardware. Gazebo
is critical for testing and developing robotic systems in a virtual environment before deployment, making it an essential
tool for robotics development.
        `,
            links: [
                {
                    label: "Gazebo",
                    link: "/ngi0/img/ros/gazebo-classic"
                }
            ],
            tags: [
                "Simulation",
                "3D Visualization",
                "Robot Models",
                "Physics Engine",
                "Sensors"
            ],
            image: "/ngi0/img/ros/gazebo.png"
        }
    ]
};

export const ROS_DOSSIER_PATHNAME = "ros";

export const DOSSIER: DossierType = {
    pathName: ROS_DOSSIER_PATHNAME,
    image: "/ngi0/img/ros/ROS1.png",
    header: "ROS and Robotics",
    subheader: "ROS and Robotics Dossier",
    tags: ["ROS 1", "ROS 2", "MoveIt!", "Gazebo"],
    link: `/${ROS_DOSSIER_PATHNAME}`,
    cards: ROS_CARDS,
    tagsDossierDetail: ROS_TAGS,
    projects: ROS_PROJECTS,
    detailedProjects: {},
    comparisons: {}
};
