import {ProjectCardType, ProjectPageType, DossierType} from "../types";
import {ngi0Projects} from "./ngi0Projects";
import {ASSOCIATED_NGI0_PROJECTS} from "./commonStrings";

const OPEN_DATA_MANAGEMENT_AND_INTEGRATION: ProjectCardType[] = [
    ngi0Projects.dataPackages,
    ngi0Projects.ontogen,
    ngi0Projects.atomicTables,
    ngi0Projects.maDada,
];

const LINKED_DATA_AND_KNOWLEDGE_GRAPH_EXPLORATION: ProjectCardType[] = [
    ngi0Projects.atomicData,
    ngi0Projects.linkedDataHub,
];

const OPEN_DATA_TRANSPARENCY: ProjectCardType[] = [
    ngi0Projects.wikirateFrameworks,
]

const OPEN_DATA_CARDS: ProjectCardType[] = [
    ...OPEN_DATA_MANAGEMENT_AND_INTEGRATION,
    ...LINKED_DATA_AND_KNOWLEDGE_GRAPH_EXPLORATION,
    ...OPEN_DATA_TRANSPARENCY
];

const OPEN_DATA_TAGS: string[] = ["Open Data", "Knowledge Graphs", "Transparency", "Data Integration", "ESG Data"];

const OPEN_DATA_PROJECTS: ProjectPageType = {
    pageTitle: "Introduction to Open Data",
    menuTitle: "Open Data Dossier",
    projectDescription: [
        {
            header: "Introduction to Open Data",
            text: `
Open data is data that is made available to the public to use, share, and repurpose freely. The idea behind open data
is to foster transparency, collaboration, and innovation across various sectors by making valuable data accessible to
all. Open data can come in many forms, such as government datasets, research data, or corporate transparency reports.
By ensuring that data is publicly available and in a standardized format, we can unlock new opportunities for discovery,
problem-solving, and decision-making.

In this article, we'll explore three key categories of open data projects that are pushing the boundaries of how data is
managed, integrated, and utilized. Each of these categories represents a different aspect of open data, from improving
how data is organized and integrated, to exploring complex linked data and knowledge graphs, and ultimately making corporate
data more transparent and accessible. The projects listed above are pushing the boundaries of what is possible with open
data, and their contributions are helping to build a more open and accessible world for data-driven decision-making.

            `,
        },
        {
            header: "Open Data Management and Integration",
            text: `
Open data management and integration projects focus on enhancing how data is organized, described, and interconnected to
ensure accessibility and usability. These projects aim to create standardized frameworks for handling datasets, allowing
diverse stakeholders to efficiently share, analyze, and work with data. By promoting structured formats and tools, these
initiatives ensure that datasets are not just publicly available, but also useful for practical applications.

These tools provide solutions for cataloging datasets, integrating metadata, and transforming raw data into formats that
can be linked and used effectively across different platforms and projects. In turn, they help reduce data silos and
facilitate collaboration among data users, such as government bodies, organizations, and researchers.
            `,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: OPEN_DATA_MANAGEMENT_AND_INTEGRATION
                }
            ]
        },
        {
            header: "Linked Data and Knowledge Graph Exploration",
            text: `
Linked data and knowledge graph exploration projects are focused on enabling users to navigate, analyze, and manipulate
data that is interrelated across different domains. Linked data refers to data that is connected to other data through
shared links, and knowledge graphs are visualizations or representations of these relationships. These projects help
users interact with large datasets, identify patterns, and extract meaningful insights by providing tools for exploring
the data's structure and connections.

These tools provide a framework for discovering relationships within datasets, querying data using languages like SPARQL,
and editing and visualizing data in more accessible forms. They are especially valuable for researchers, data scientists,
and domain experts who need to work with complex datasets and uncover insights that might otherwise be hidden.
            `,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: LINKED_DATA_AND_KNOWLEDGE_GRAPH_EXPLORATION
                }
            ]
        },
        {
            header: "Corporate Transparency and ESG Data",
            text: `
Corporate transparency and Environmental, Social, and Governance (ESG) data projects focus on making corporate data more
accessible and transparent to a wide range of stakeholders, including investors, researchers, and citizens. These
projects aim to organize and standardize ESG data so that it can be used to assess corporate performance in key areas
such as environmental sustainability, social responsibility, and governance practices. By making this data open and
accessible, these projects promote greater accountability, informed decision-making, and corporate responsibility.

These tools help organizations align their data with recognized standards and frameworks, allowing stakeholders to
better understand and analyze corporate behavior. They also enable companies to share their ESG data in a way that is
transparent and easy to compare across industries, enhancing the ability of investors, researchers, and citizens to make
more informed decisions.
            `,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: OPEN_DATA_TRANSPARENCY
                }
            ]
        },
    ]
};

export const OPEN_DATA_DOSSIER_PATHNAME = "open-data";

export const DOSSIER: DossierType = {
    pathName: OPEN_DATA_DOSSIER_PATHNAME,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/LibreOffice_4.0_Writer_Icon.svg",
    header: "Open Data",
    subheader: "Exploring the Impact and Innovation of Open Data Solutions",
    tags: ["Open Data", "Knowledge Graphs", "Transparency", "Data Integration", "ESG Data"],
    link: `/${OPEN_DATA_DOSSIER_PATHNAME}`,
    cards: OPEN_DATA_CARDS,
    tagsDossierDetail: OPEN_DATA_TAGS,
    projects: OPEN_DATA_PROJECTS,
    detailedProjects: {},
    comparisons: {}
};