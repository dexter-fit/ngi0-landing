import {ProjectCardType, ProjectPageType, DossierType} from "@/types";
import {ASSOCIATED_NGI0_PROJECTS, SIMILAR_CLOSED_SOURCE_PROJECTS, SIMILAR_NGI0_PROJECTS} from "@/data/commonStrings";
import {ngi0Projects} from "@/data/ngi0Projects";
import {corporateProjects} from "@/data/corporateProjects";

const PCB_CARDS: ProjectCardType[] = [
    ngi0Projects.librePCB, ngi0Projects.librePCB_2_0, ngi0Projects.KiCad, ngi0Projects.KiCad_IPC, ngi0Projects.kikit
];

const PCB_TAGS: string[] = [];

const PCB_PROJECTS: ProjectPageType = {
    pageTitle: "Commercial and Open-Source PCB design tools",
    menuTitle: "PCB design tools",
    projectDescription: [
        {
            header: "Commercial and Open-Source PCB design tools",
            text: `
Printed Circuit Board (PCB) design is a fundamental aspect of modern electronics development,
enabling the creation of complex electronic systems by interconnecting components on a
compact, multilayered substrate. PCBs serve as the backbone of electronic devices, from
consumer gadgets to industrial automation systems, medical devices, and aerospace
applications. The process of designing a PCB involves multiple stages, including schematic
capture, component placement, signal routing, and design verification to ensure reliability and
manufacturability. Efficient PCB design software is essential for streamlining these stages,
allowing engineers to focus on innovation while adhering to electrical and mechanical
constraints.

A wide range of PCB design tools is available, with solutions ranging from high-end commercial
software to open-source alternatives. This article highlights that Altium’s comprehensive,
integrated feature set (from schematic capture through layout and analysis) caters to the
demands of complex professional PCB projects, offering efficiency and advanced capabilities
out-of-the-box. Meanwhile, KiCad and LibrePCB serve as capable, cost-effective alternatives;
KiCad can handle large-scale designs with proper workflows, and LibrePCB focuses on usability
and robust library handling, though with limited feature depth. Understanding the differences
between these tools is crucial for professionals seeking an optimal balance between
functionality, cost, and accessibility.
            `,
        },
        {
            header: " Introduction to PCB Design Tools",
            text: `
Printed Circuit Board (PCB) design tools are essential software applications used by engineers
and designers to create electronic circuits efficiently and accurately. These tools facilitate the
process of designing, simulating, and manufacturing PCBs by providing a virtual environment
where users can lay out components, route traces, and verify circuit performance before
production. Modern PCB design software integrates various functionalities, such as schematic
capture, layout design, and design rule checks (DRC), ensuring that the final product meets
industry standards and manufacturing constraints.

As electronic devices continue to shrink in size and grow in complexity, PCB design tools must
evolve to address challenges like high-speed design, thermal management, and design for
manufacturability (DFM). The integration of artificial intelligence and cloud-based collaboration
is further enhancing the efficiency and accuracy of PCB design workflows. By leveraging these
tools, engineers can streamline the design process, reduce errors, and bring innovative electronic
products to market faster and more reliably.

The evolution of PCB design tools has led to the development of highly sophisticated software
with advanced features such as 3D visualization, signal integrity analysis, and automated routing.
Some of the most widely used PCB design tools include Altium Designer, KiCad, Eagle, and
OrCAD, each offering unique capabilities catering to different levels of complexity and user
requirements. Open-source and commercial solutions provide a range of options, from costeffective 
entry-level tools to high-end enterprise-grade software used for designing complex
multilayer PCBs for industries like telecommunications, automotive, aerospace, and consumer
electronics.

Commercial PCB design tools, such as Altium Designer, OrCAD, and Autodesk Eagle, offer
powerful features tailored for professional environments. They provide extensive libraries,
advanced simulation capabilities, real-time collaboration, and integration with manufacturing
services, making them ideal for industrial and high-reliability applications. On the other hand,
open-source alternatives like KiCad and LibrePCB offer free, community-driven solutions that
cater to hobbyists, startups, and small businesses. These tools have improved significantly over
the years, offering competitive features such as multi-layer PCB support, DRC checks, and 3D
visualization, making them viable options for professional-grade designs without the high cost
associated with commercial software.
            `,
        },
        {
            header: "Aspects of PCB Editors",
            text: `
PCB editors encompass several key aspects that facilitate the design and manufacturing of circuit boards. 
The schematic editor enables engineers to define the logical structure of a circuit, ensuring proper component connections 
and verification before layout. The PCB layout editor translates the schematic into a physical board design, considering
factors like signal integrity, thermal management, and manufacturability. Component libraries provide standardized symbols, 
footprints, and metadata to streamline design consistency and sourcing. Finally, generation of production data ensures that all necessary 
files, such as Gerber files and Bills of Materials (BOM), are created for fabrication and assembly. Together, these aspects form the 
foundation of an efficient PCB design workflow.

## Schematic Editor Features
A schematic editor, also known as a schematic capture tool, is a fundamental component of PCB
design software that allows engineers to create and define the logical structure of an electronic
circuit. It serves as the blueprint for the entire PCB design process, enabling users to place
components, connect them using electrical nets, and verify circuit behavior before proceeding to
the PCB layout stage. Schematic capture tools follow standardized electronic symbols and design
rules to ensure accuracy and manufacturability. Additionally, modern schematic editors include
features like electrical rule checking (ERC), hierarchical design, and integration with component
libraries to streamline the design workflow. A well-structured schematic is crucial for minimizing
errors, optimizing circuit performance, and ensuring seamless transition from concept to
fabrication.

## PCB Layout Editor Features
A PCB layout editor is a crucial tool in the PCB design process, allowing engineers to translate a
circuit schematic into a physical board design that can be manufactured. It involves placing
electronic components on a defined board area and routing electrical connections (traces)
between them while adhering to electrical and mechanical constraints. The layout editor ensures
that the design follows proper signal integrity, thermal management, and design for
manufacturability (DFM) guidelines. Advanced layout editors offer features such as multi-layer
support, design rule checks (DRC), auto-routing, differential pair routing, and 3D visualization to
help engineers optimize performance and minimize errors before fabrication. A well-designed
PCB layout is essential for achieving high signal integrity, reliability, and efficient production.

## Components Libraries and Management
Component libraries are essential in PCB design tools, as they store standardized representations
of electronic components, including schematic symbols, PCB footprints, and 3D models. These
libraries ensure consistency across designs, enabling engineers to quickly reuse components
without repeatedly defining their electrical and mechanical properties. A well-structured
component library simplifies the PCB design workflow, reducing errors and improving efficiency.
The creation process typically involves defining an electrical symbol for the schematic,
associating it with a physical footprint for the PCB layout, and, in some cases, adding a 3D model
for mechanical verification. Advanced library management systems also include metadata such
as manufacturer details, part numbers, and sourcing information, helping designers ensure
component availability and compliance with design requirements.

## Generation of Production Data
The creation of fabrication data is a critical step in the PCB design process, ensuring that a circuit
board can be manufactured accurately according to the designer’s specifications. Fabrication
data includes essential files such as Gerber files (for copper layers, silkscreen, solder mask), drill
files (for vias and mounting holes), Bill of Materials (BOM), pick-and-place files (for automated
assembly), and mechanical drawings. These files provide manufacturers with the necessary
information to produce, assemble, and verify the PCB. The process involves running Design Rule
Checks (DRC) and Design for Manufacturability (DFM) analysis to detect potential issues such as
clearance violations, missing vias, or incorrect footprints before fabrication. 
            `,
            associatedProjects: [
                {
                    heading: SIMILAR_NGI0_PROJECTS,
                    carousel: [ngi0Projects.librePCB, ngi0Projects.librePCB_2_0, ngi0Projects.KiCad, ngi0Projects.KiCad_IPC, ngi0Projects.kikit]
                }
            ]
        },
    ]
};

const altium: ProjectPageType = {
    pageTitle: "Altium Designer",
    menuTitle: "Altium Designer",
    projectDescription: [
        {
            header: "Altium Designer",
            text: `
Altium Designer is a powerful PCB (Printed Circuit Board) design software widely used by engineers and designers for
creating complex electronic circuits. It offers an integrated environment that combines schematic capture, PCB layout,
simulation, and manufacturing tools, making the design process more efficient and streamlined. With features like 3D
visualization, real-time collaboration, and extensive component libraries, Altium Designer simplifies the development
of high-quality electronic products. Its user-friendly interface and advanced automation tools help reduce design errors
and speed up production, making it a preferred choice for both small businesses and large enterprises in the electronics
industry.`
        },
        {
            header: "Schematic Editor Features",
            text: `
Altium Designer offers one of the most advanced and user-friendly schematic editors in the PCB
design industry. It provides a highly intuitive interface with powerful tools such as hierarchical and
multi-channel design support, design rule verification, and real-time electrical rule checking
(ERC). The schematic editor seamlessly integrates with Altium's extensive component libraries,
allowing designers to access manufacturer-sourced component data, footprints, and symbols
directly within the tool. Additionally, Altium Designer enables real-time collaboration via its cloudbased Altium 365 platform, 
allowing multiple engineers to work on the same schematic while
maintaining version control and design consistency. An example of how the schematic editor GUI
looks like in Altium Designer is shown in the following Figure.
            `,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/schematic_editor_Altium.bmp",
                        title: "Appearance of schematic editor GUI in Altium Designer."
                    }],
                    largeImage: true
                }
            ]
        },
        {
            header: "PCB Layout Editor Features",
            text: `
Altium Designer offers one of the most advanced and comprehensive PCB layout editors, making
it a top choice for professional engineers and large-scale industrial projects. It supports multilayer PCB designs,
high-speed routing, impedance-controlled traces, and advanced signal
integrity analysis. The interactive and auto-routing features in Altium provide an efficient way to
place and route components while adhering to design rules and constraints (DRC). Additionally,
Altium Designer includes 3D visualization and collision detection, enabling designers to verify the
mechanical compatibility of their PCB before manufacturing. Its seamless integration with
component libraries, design rule checks (DRC), and Altium 365 cloud collaboration make it a
robust solution for teams working on complex designs. An example of how the PCB editor GUI in
action like in Altium Designer is shown in the following Figure.`,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/pcb_editor_Altium.bmp",
                        title: "Appearance of PCB editor GUI in Altium Designer."
                    }],
                    largeImage: true
                }
            ]
        },
        {
            header: "Components Libraries and Management",
            text: `
Altium Designer provides a highly sophisticated and integrated component library management
system, making it a top choice for professional PCB designers. It offers access to extensive
manufacturer databases through Altium 365 and Concord Pro, enabling users to directly import
verified component models, footprints, and 3D models from suppliers. Altium allows centralized
library management, ensuring consistency across projects and teams. The software supports
parametric component creation, which means users can define part attributes such as
resistance, capacitance, voltage ratings, and supplier links. Additionally, Altium Designer
provides template-based component creation tools, making it easy to generate custom parts with
symbols, footprints, and models in a structured way. An example of powerful and complex GUI for
components creation and management in Altium Designer is shown in the following Figure.
            `,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/library_management_Altium.bmp",
                        title: "Complex interface for components creation and management in Altium Designer."
                    }],
                    largeImage: true
                }
            ]
        },
        {
            header: "Generation of Production Data",
            text: `
Altium Designer offers a highly automated and professional-grade fabrication output generation
system, ensuring seamless transition from design to manufacturing. The software provides a CAM
(Computer-Aided Manufacturing) Editor, allowing users to generate and inspect fabrication files
before submission to a manufacturer. Altium supports a wide range of industry-standard formats,
including Gerber (RS-274X and X2), ODB++, IPC-2581, NC Drill files, and Bill of Materials (BOM).
The built-in Design Rule Checks (DRC) and Design for Manufacturability (DFM) analysis help
prevent potential production issues, making Altium an excellent choice for high-reliability
applications. Interface to the generation of various output data types is shown in the following Figure. 
            `,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/fabrication_data_Altium.bmp",
                        title: "Module for generation various types of output data from Altium Designer."
                    }],
                    largeImage: true
                }
            ],
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: [ngi0Projects.librePCB, ngi0Projects.librePCB_2_0]
                }
            ]
        }
    ]
};

const kicad: ProjectPageType = {
    pageTitle: "KiCad",
    menuTitle: "KiCad",
    projectDescription: [
        {
            header: "KiCad",
            text: `KiCad is a free and open source electronics design application (EDA) that can handle everything from
the most basic schematic to a complex hierarchical design with hundreds of sheets. It allows electronics designers to
use a toolchain that itself is technically transparent, and that can be customised when needed. KiCad has already been
successfully used for key open hardware projects such as the LibreRouter, the HackRF, MNT Reform and UPSAT. This
project will contribute to furthering the mission of providing professional level tools for users who design electronics
for a living.`
        },
        {
            header: "Schematic Editor Features",
            text: `
KiCad provides a capable open-source schematic editor that balances usability with advanced
functionality. The Eeschema module in KiCad offers hierarchical design support, ERC checking,
and an extensive component library that is continuously updated by the community. Unlike
Altium, KiCad does not have a built-in cloud collaboration system, but it allows version control via
external Git integration. While the interface may not be as polished as commercial counterparts,
it remains an efficient and highly flexible tool, particularly for small-to-medium projects and users
who prefer open-source solutions. Furthermore, KiCad supports SPICE simulation through
integration with external simulation tools, allowing users to verify circuit behavior before PCB
layout. An example of how the schematic editor GUI looks like in KiCAD environment is shown in the following Figure.`,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/schematic_editor_KiCAD.bmp",
                        title: "Appearance of schematic editor GUI in KiCAD."
                    }],
                    largeImage: true
                }
            ]
        },
        {
            header: "PCB Layout Editor Features",
            text: `
KiCad provides a powerful open-source PCB layout editor that competes with many commercial
tools in terms of capabilities. It supports multi-layer PCB design, differential pair routing, and
interactive router features that assist designers in placing and routing components efficiently. The
PCBNew module in KiCad allows users to visualize their designs in 3D to check component
placement and board alignment. While it lacks advanced AI-driven routing and some high-end
simulation tools found in Altium, KiCad compensates with strong design rule enforcement, a 
flexible user interface, and community-driven plugin support. An example of how the PCB editor
GUI in action like in KiCAD environment is shown in the following Figure.
            `,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/pcb_editor_KiCAD.bmp",
                        title: "Appearance of PCB editor GUI in KiCAD environment."
                    }],
                    largeImage: true
                }
            ]
        },
        {
            header: "Components Libraries and Management",
            text: `
KiCad offers a flexible and open-source approach to component library management, giving
users full control over how they organize and create symbols, footprints, and 3D models. KiCad
uses a separate library structure, where schematic symbols and PCB footprints are managed
independently but can be linked during design. It supports Git-based version control, allowing
teams to manage libraries collaboratively while maintaining changes and history tracking. The
Library Manager in KiCad provides an easy way to add, modify, and share components, while
community-driven library contributions offer a large selection of pre-existing symbols and
footprints. Creating new components in KiCad requires manual entry of parameters and symbols,
but built-in wizards simplify the process, making it accessible even for beginners. An example of
open-source GUI for components creation and management in KiCAD, which is roughly matching
the capabilities of Altium Designer, is shown in the following Figure.
            `,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/library_management_KiCAD.bmp",
                        title: "An example of GUI for components creation and management in KiCAD tool."
                    }],
                    largeImage: true
                }
            ]
        },
        {
            header: "Generation of Production Data",
            text: `
KiCad provides a flexible and open-source solution for generating fabrication outputs, supporting
standard formats such as Gerber (RS-274X), Excellon drill files, BOM, and IPC-D-356 netlist files.
The Gerber Viewer included in KiCad allows users to inspect output files to ensure accuracy
before submission. While it lacks a built-in cloud collaboration feature like Altium, KiCad’s DRC
and DFM checks help catch design errors before fabrication. Additionally, KiCad supports
position files for PCB assembly and can generate outputs compatible with pick-and-place
machines. Though it does not offer as many automated documentation tools as Altium, KiCad
remains a reliable option for small to medium-sized projects, especially for users looking for a
cost-effective solution. An approach to the generation of various output data types in KiCAD tool
is shown is shown in the following Figure.
            `,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/fabrication_data_KiCAD.bmp",
                        title: "Module for generation fabrication data from KiCAD tool."
                    }],
                    largeImage: true
                }
            ],
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: [ngi0Projects.KiCad, ngi0Projects.KiCad_IPC, ngi0Projects.kikit]
                }
            ]
        }
    ]
};

const librePCB: ProjectPageType = {
    pageTitle: "LibrePCB",
    menuTitle: "LibrePCB",
    projectDescription: [
        {
            header: "LibrePCB",
            text: `LibrePCB is a free and open source electronics design automation (EDA) software suite to develop
printed circuit boards (PCBs). It runs on all major platforms and aims to be easy to use, while still beeing able to
create professional schematics and PCBs. The goal is to make creating electronics easier, more efficient and less
error-prone by using modern technologies and user interface concepts. LibrePCB therefore streamlines the whole PCB
design process — from installing part libraries to ordering the final PCB design. Having such a free, powerful EDA
software is the basement for the whole open hardware community as it allows us to reduce the dependency to proprietary
and expensive technologies and empowers everyone to develop hardware for free, from hobbyists to professionals.            
            `
        },
        {
            header: "Schematic Editor Features",
            text: `
LibrePCB is a lightweight open-source PCB design tool with a schematic editor that prioritizes
simplicity and ease of use. While not as feature-rich as Altium Designer or KiCad, LibrePCB
provides a clean and modern interface for quick schematic capture, with essential functions such
as ERC checking and hierarchical design support. Its library management system is designed to
be intuitive and user-friendly, reducing the complexity often associated with component handling
in other tools. However, LibrePCB currently lacks some advanced features like SPICE simulation
and deep integration with external verification tools, making it better suited for small projects,
hobbyists, and beginners rather than large-scale professional designs. An example of how the
schematic editor GUI looks like in KiCAD environment is shown in the following Figure.`,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/schematic_editor_LibrePCB.bmp",
                        title: "Appearance of schematic editor GUI in LibrePCB."
                    }],
                    largeImage: true
                }
            ]
        },
        {
            header: "PCB Layout Editor Features",
            text: `
LibrePCB offers a simpler yet effective PCB layout editor, designed for ease of use and quick
prototyping. While it does not provide as many advanced features as Altium or KiCad, it supports
essential functions like basic multi-layer routing, component placement, and design rule checks
(DRC) to ensure manufacturability. LibrePCB focuses on providing a streamlined workflow,
allowing users to quickly transition from schematic to PCB layout without dealing with extensive
settings or configuration steps. However, it currently lacks features such as differential pair
routing, impedance control, and advanced high-speed design support, making it more suitable
for beginners, hobbyists, or small-scale projects rather than complex professional applications.
An example of how the PCB editor GUI in action like in LibrePCB tool is shown in the following Figure.
            `,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/pcb_editor_LibrePCB.bmp",
                        title: "Appearance of PCB editor GUI in LibrePCB tool."
                    }],
                    largeImage: true
                }
            ]
        },
        {
            header: "Components Libraries and Management",
            text: `
LibrePCB focuses on simplicity and ease of use when managing and creating component
libraries. Unlike KiCad and Altium, LibrePCB unifies symbols, footprints, and metadata into a
single entity, streamlining the process of defining components. The Library Manager allows users
to create and edit components using a guided workflow, reducing complexity for newcomers.
LibrePCB also introduces a unique library repository system, enabling users to install libraries
directly from online sources rather than manually downloading and importing files. However, the
selection of pre-existing libraries in LibrePCB is smaller compared to KiCad and Altium, meaning
users may need to create custom components more frequently. An example of open-source GUI
for components creation and management in LibrePCB is shown in the following Figure.
            `,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/library_management_LibrePCB.bmp",
                        title: "An example of GUI for components creation and management in LibrePCB tool."
                    }],
                    largeImage: true
                }
            ]
        },
        {
            header: "Generation of Production Data",
            text: `
LibrePCB simplifies the process of generating fabrication outputs with an easy-to-use CAM
export system. It supports essential formats such as Gerber, Excellon drill files, and BOM,
ensuring compatibility with standard PCB manufacturing workflows. While LibrePCB does not yet
support advanced fabrication output formats like ODB++ or IPC-2581, it covers the fundamental
requirements for most small-scale PCB projects. The tool includes basic DRC checks, but it lacks
advanced DFM verification or built-in Gerber viewers, meaning designers may need external tools
to verify fabrication files before submission. Despite these limitations, LibrePCB offers a
streamlined approach that suits hobbyists and small-scale projects where simplicity is preferred
over complex fabrication requirements. An approach to the generation of various output data
types in LibrePCB tool is shown on in the following Figure.
            `,
            gallery: [
                {
                    images: [{
                        itemImageSrc: "/img/pcb/fabrication_data_LibrePCB.bmp",
                        title: "Module for generation fabrication data from LibrePCB tool."
                    }],
                    largeImage: true
                }
            ]
        }
    ]
};

const comparison: ProjectPageType = {
    pageTitle: "PCB Design Tools Comparison",
    menuTitle: "PCB Tools Comparison",
    projectDescription: [
        {
            header: "PCB Design Tools Comparison",
            text: ``
        },
        {
            header: "Schematic Editor Features",
            text: `
When comparing these schematic editors, Altium Designer clearly stands out in terms of
advanced functionality, integration with cloud collaboration, and direct access to manufacturer
databases, making it ideal for professional engineers working on complex designs. KiCad, while
lacking some of Altium’s commercial-grade features, remains a powerful alternative for those who
prefer an open-source solution with solid schematic capture capabilities and flexible external
integrations. LibrePCB, on the other hand, offers a more beginner-friendly approach with a focus
on simplicity, though it falls short in terms of advanced features. Ultimately, the choice depends
on the user's needs—whether they require the high-end features of Altium, the open-source
flexibility of KiCad, or the straightforward usability of LibrePCB.
`
        },
        {
            header: "PCB Layout Editor Features",
            text: `
When comparing these PCB layout editors, Altium Designer clearly leads with its advanced
routing capabilities, 3D visualization, signal integrity analysis, and cloud-based collaboration
tools, making it ideal for high-end industrial designs. KiCad provides a strong middle ground,
offering powerful open-source features like multi-layer routing, differential pair support, and 3D
visualization, making it a viable alternative for those who seek a cost-effective yet professional
grade tool. LibrePCB, while user-friendly and lightweight, lacks many of the advanced design
features needed for high-complexity circuits, but it remains an excellent option for beginners and
small-scale projects. The choice ultimately depends on the user’s needs—whether they require
Altium’s industrial-grade precision, KiCad’s open-source flexibility, or LibrePCB’s simplicity for
rapid prototyping.
            `,
        },
        {
            header: "Components Libraries and Management",
            text: `
When comparing component library management across these tools, Altium Designer stands out for its professional-grade 
features, including cloud integration, real-time component sourcing, and automated parameter management. It is the best 
choice for enterprise environments where consistency and supply chain integration are critical. KiCad provides a strong 
community-driven and version-controlled system, making it ideal for open-source enthusiasts and teams who prefer 
decentralized control over their libraries. LibrePCB, while offering a streamlined and beginner-friendly approach, 
lacks the extensive pre-built library support of its counterparts but makes up for it with an intuitive component 
creation workflow. The choice ultimately depends on whether the user values Altium’s automation, KiCad’s flexibility, 
or LibrePCB’s simplicity.
            `
        },
        {
            header: "Generation of Production Data",
            text: `
When comparing fabrication output capabilities, Altium Designer provides the most advanced
and comprehensive solution, including automated documentation, real-time manufacturer
collaboration, and extensive file format support, making it ideal for industrial and high-reliability
applications. KiCad offers a strong middle ground, with essential fabrication formats, robust DRC
checks, and open-source flexibility, making it a great option for professional users who do not
require Altium’s premium features. LibrePCB, while limited in its fabrication output options,
provides a user-friendly and lightweight solution for hobbyists and smaller projects. The choice
ultimately depends on the designer’s needs—whether they require Altium’s high-end automation,
KiCad’s open-source flexibility, or LibrePCB’s straightforward approach.
            `
        },
        {
            header: "Summary",
            text: `
When comparing **Altium Designer**, **KiCad**, and **LibrePCB**, it becomes clear that each tool caters
to different user needs and project requirements. **Altium Designer** stands out as a high-end
commercial solution, offering powerful features such as advanced schematic capture, intelligent
PCB layout editing, robust component library management, and seamless fabrication output
generation. Its cloud-based Altium 365 platform and real-time collaboration tools make it the
ideal choice for large-scale industrial projects, professional engineering teams, and companies
requiring high-reliability PCB designs with strict manufacturing standards. The software’s
extensive design automation, built-in rule verification, and direct manufacturer integration
significantly enhance productivity, making it a preferred tool for aerospace, automotive, medical,
and telecommunications industries.

On the other hand, **KiCad** presents itself as the most feature-rich open-source alternative,
providing a balance between flexibility, functionality, and affordability. With its powerful
schematic and PCB layout editors, extensive community-driven component libraries, and opensource adaptability,
KiCad is a strong choice for small-to-medium professional projects, startups,
educators, and independent designers. It offers multi-layer routing, differential pair support,
SPICE simulation, and DRC checks, making it suitable for professional use, but lacks built-in
cloud collaboration, manufacturer integrations, and advanced automation found in Altium.
However, its Git-based version control and strong community plugin support allow users to extend
its capabilities, making it a practical option for those who need an open and customizable design
environment without a commercial price tag.

Finally, **LibrePCB** offers a lightweight, beginner-friendly, and simplified approach to PCB design,
making it a great entry point for hobbyists, students, and small-scale projects. Its intuitive library
management, straightforward schematic capture, and basic PCB layout tools make it easy to use,
but it lacks advanced features like differential pair routing, DFM analysis, and real-time rule
checking. While it supports basic fabrication outputs, its limited output formats and lack of builtin Gerber
viewers may require users to rely on external tools for verification. LibrePCB is best
suited for hobby projects, simple electronic circuits, and users who prioritize ease of use over
advanced design capabilities.
            `
        },
        {
            header: "Final Recommendation",
            text: `
- **Altium Designer** is ideal for large-scale, high-reliability, and industry-grade PCB designs,
offering automation, collaboration, and professional manufacturing support.
Page 12
- **KiCad** is a strong open-source alternative, balancing advanced design features with
flexibility, making it a great fit for independent designers, startups, and small-to-medium
professional projects.
- **LibrePCB** is best for hobbyists, beginners, and simple PCB projects, prioritizing ease of
use and accessibility over advanced functionality.

Ultimately, the choice between these tools depends on budget, project complexity, and required
features. Professionals working on industrial designs will benefit from Altium’s comprehensive
toolset, while those looking for a cost-effective, open-source solution will find KiCad to be a
powerful alternative. Hobbyists and beginners, however, will appreciate LibrePCB’s simplicity as
an accessible starting point in PCB design.
            `,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: [ngi0Projects.librePCB, ngi0Projects.librePCB_2_0, ngi0Projects.KiCad, ngi0Projects.KiCad_IPC, ngi0Projects.kikit]
                },
                {
                    heading: SIMILAR_CLOSED_SOURCE_PROJECTS,
                    carousel: [corporateProjects.altiumDesigner]
                }
            ]
        }
    ]
};

export const PCB_DOSSIER_PATHNAME = "pcb";

export const DOSSIER: DossierType = {
    pathName: PCB_DOSSIER_PATHNAME,
    image: "/img/pcb/PCB.png",
    header: "PCB Design",
    subheader: "FOSS PCB Design",
    tags: ["Printed Circuit Board", "LibrePCB", "KiCad"],
    link: `/${PCB_DOSSIER_PATHNAME}`,
    cards: PCB_CARDS,
    tagsDossierDetail: PCB_TAGS,
    projects: PCB_PROJECTS,
    detailedProjects: {
        librePCB,
        altium,
        kicad
    },
    comparisons: {
        comparison
    }
};
