import {ProjectCardType, ProjectPageType} from "../types";
import { ProjectDescriptionType } from "../types/ProjectDescriptionType";
import { tagsFromProjectCardType } from "../util/tagsFromProjectCardType";
import { ASSOCIATED_NGI0_PROJECTS } from "./commonStrings";
import {ngi0Projects} from "./ngi0Projects";
import {DossierType} from "../types/DossierType";

const OSM_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.nominatim,
    ngi0Projects.organicMaps,
    ngi0Projects.protomaps,
    ngi0Projects.peermaps
];

const MAP_EDITORS_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.mapComplete,
    ngi0Projects.streetComplete,
    ngi0Projects.umap
];

const ROUTING_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.mobroute
];

const GEO_CARDS = [
    ...OSM_RELATED_PROJECT_CARDS,
    ...MAP_EDITORS_RELATED_PROJECT_CARDS,
    ...ROUTING_RELATED_PROJECT_CARDS
];

const GEO_TAGS: string[] = [
    "Open Street Maps",
    "Geovisualization",
    "Open Source GIS",
    "Spatial Data Visualization",
    "GeoMapping Tools",
    "GIS Software",
    "Open Source Cartography",
    "GeoAnalytics",
    "Geospatial Analysis",
    "Mapping Libraries",
    "Geographic Information Systems",
    "Data Visualization",
    "Open Source Mapping",
    "Cartographic Tools",
    "GeoData Tools",
    "GIS Applications",
    "Open Source Geospatial",
    "Interactive Maps",
    "GeoVisualization Software",
    "Spatial Data Analysis",
    "Open Source Data Mapping"
];

const GEO_DOSSIER_PROJECTS: ProjectPageType = {
    pageTitle: "Geovisialisation Dossier and Tool Comparison",
    menuTitle: "Geovisialisation Dossier",
    projectDescription: [
        {
            image: "/ngi0/img/openstreetmap.logo.svg",
            header: "Geovisualisation",
            text: "Geovisualization encompasses a wide variety of applications, from simple map displays with various points of interest, to navigation in unfamiliar space, to complex applications that help us every day. With themed maps, users can get to know their surroundings better as well as new points of interest. The next level is then represented by applications that allow the user to modify the maps themselves. Thanks to open souce projects with a wide community of users, cartography is more accessible than ever before.",
            links: [
                {
                    img: "/ngi0/img/openstreetmap.logo.svg",
                    link: "https://www.openstreetmap.org/",
                    label: "Open Street Maps"
                },
                {
                    icon: "pi pi-info",
                    link: "https://en.wikipedia.org/wiki/OpenStreetMap",
                    label: "Wikipedia"
                },
                {
                    img: "/ngi0/img/OpenSeaMap-Logo.svg",
                    link: "https://map.openseamap.org/",
                    label: "OpenSeaMap"
                },
                {
                    img: "/ngi0/img/Open_Source_Routing_Machine_logo.png",
                    link: "https://github.com/Project-OSRM/osrm-backend",
                    label: "Open Source Routing Machine"
                },
                {
                    icon: "pi pi-map",
                    link: "https://www.openrailwaymap.org/",
                    label: "OpenRailwayMap"
                }
            ]
        },
        {
            header: "Open Street Map",
            text: `OpenStreetMap (OSM) is a free, open geographic database updated and maintained by a community of volunteers via open collaboration. Contributors collect data from surveys, trace from aerial imagery and also import from other freely licensed geodata sources. OpenStreetMap is freely licensed under the Open Database License and as a result commonly used to make electronic maps, inform turn-by-turn navigation, assist in humanitarian aid and data visualisation. OpenStreetMap uses its own topology to store geographical features which can then be exported into other GIS file formats. The OpenStreetMap website itself is an online map, geodata search engine and editor.\nOpenStreetMap was created by Steve Coast in response to the Ordnance Survey, the United Kingdom's national mapping agency, failing to release its data to the public under free licences in 2004. Initially, maps were created only via GPS traces, but it was quickly populated by importing public domain geographical data such as the U.S. TIGER and by tracing permitted aerial photography or satellite imagery. OpenStreetMap's adoption was accelerated by Google Maps's introduction of pricing in 2012 and the development of supporting software and applications. The database is hosted by the OpenStreetMap Foundation, a non-profit organisation registered in England and Wales and is funded mostly via donations.`,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: OSM_RELATED_PROJECT_CARDS
                }
            ]
        },
        {
            header: "Map Editors",
            text: "OpenStreetMap is a libre and free online database of geodata which can be edited by everyone and is used by millions of people. However, contributing can be challenging or intimidating to non-technical users. Therefore there are webapps whose goal is to make it trivial to see and update information on OpenStreetMap. This is achieved by showing only features related to a single topic of interest on the map - from playgrounds, public toilets and bicycle rental places to charging stations and public tap water spots.",
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: MAP_EDITORS_RELATED_PROJECT_CARDS
                }
            ]
        },
        {
            header: "Routing",
            text: "Route mapping refers to the process of visually depicting a particular route or trip on a map, often involving waypoints, landmarks and other geographical data. The aim is to provide a clear, interactive, and spatially accurate representation of a route’s course. Route mapping solves puzzles for various sectors via navigation, travel planning, and logistics visualisation. Unlike route planning software which focuses on optimising logistics, and efficiency, route mapping software’s primary role is to create visual and understandable maps.",
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: ROUTING_RELATED_PROJECT_CARDS
                }
            ]
        }
    ]
};

const OSM_DETAIL: ProjectPageType = {
    pageTitle: "Open Street Map Detail Page",
    menuTitle: "Open Street Map",
    projectDescription: [
        {
            header: "Open Street Map",
            text: `> **OpenStreetMap** (**OSM**) is an application that uses an open geographic database which is updated and maintained by a community of volunteers via Open collaboration.

OpenStreetMap is freely licensed under the Open Database License and it's commonly used to make electronic maps, turn-by-turn navigation, assist in humanitarian aid and data visualisation. OpenStreetMap uses its own topology to store geographical objects which can then be exported into other GIS file formats.

## History

The whole project started in 2004, when Steve Coast founded the base project, initially focusing on mapping the United Kingdom. In April 2006, the OpenStreetMap Foundation was established to encourage the growth, development and distribution of free geospatial data and provide geospatial data for anybody to use and share. The turning point came in 2012, when Google Maps charged for its services. In response, several prominent services switched to using OpenStreetMap and other competitors.

## What can you add on map?
Map features range in scale from international boundaries to hyperlocal details such as shops and street furniture. Although historically significant features and ongoing construction projects are routinely included in the database, the project's scope is generally limited to the present day, as opposed to the past or future.

In general, every map object is modelled as one of three geometric primitives:
 - _node_ or point
 - _way_ or polyline
 - _relation_ is an ordered list of nodes and/or ways

Every feature, or object can also holds its own metadata. Each object contains key-value pairs, called _tags_, that identify and describe the feature. In addition, due to its high level of coverage, timeliness and detail, OSM often performs better than commercial or government mapping services.

## Licence
OpenStreetMap data and derived tiles were originally published under the Creative Commons Attribution-ShareAlike licence (CC BY-SA) with the intention of promoting free use and redistribution of the data. Currently, all data added to a project must be licensed under the Open Data Commons Open Database License (ODbL), which in practice means that "©OpenStreetMap Contributors" with link to ODbL copyright page as attribution requirement is used on the your site.

## Where are OSM used

 - Cartography - The official OSM website features an interactive slippy map interface so that users can efficiently edit maps and view changesets. Beyond this reference implementation, community-maintained map applications focus on alternative cartographic representations and specialised use cases.
 - Geospatial analysis - OSM is often a source for realistic, large-scale transport network analyses because the raw road network data is freely available or because of aspects of coverage that are uncommon in proprietary alternatives. OSM is also used in conservation and land-use planning research.
 - Navigation - Some public transportation providers rely on OpenStreetMap data in their route planning services and for other analysis needs. OSM data appears in the driver or rider application or powers backend operations for ridesharing companies.
 - Humanitarian aid - Humanitarian aid agencies use OSM data both proactively and reactively. OSM's road and building coverage allow them to discover patterns of disease outbreaks and target interventions such as antimalarial medications toward remote villages. After a disaster occurs, they produce large-format printed maps and downloadable maps for GPS tracking units for aid workers to use in the field.
 - Gaming - OSM is a map data source for many location-based games that require broad coverage of local details such as streets and buildings. Flight simulators combine OSM's coverage of roads and structures with other sources of natural environment data, acting as sophisticated 3D map renderers, in order to add realism to the ground below. City-building games use a subset of OSM data as a base layer to take advantage of the player's familiarity with their surroundings. Alternate reality games rely on OSM data to determine where rewards and other elements of the game spawn in the player's presence.
 
## Where to start

The map data can be edited from a number of editing applications that provide aids including satellite and aerial imagery, street-level imagery, GPS traces, and photo and voice annotations. So feel free to sign up and help keep OSM up to date in your area. Or you can try plotting different data on the map, or create your own editor, e.g. using the Leaflet library.`,
            tags: tagsFromProjectCardType(OSM_RELATED_PROJECT_CARDS),
            links: [
                {
                    img: "/ngi0/img/openstreetmap.logo.svg",
                    link: "https://www.openstreetmap.org/",
                    label: "Open Street Maps"
                },
                {
                    icon: "pi pi-info",
                    link: "https://en.wikipedia.org/wiki/OpenStreetMap",
                    label: "Wikipedia"
                },
                {
                    img: "/ngi0/img/OpenSeaMap-Logo.svg",
                    link: "https://map.openseamap.org/",
                    label: "OpenSeaMap"
                },
                {
                    img: "/ngi0/img/Open_Source_Routing_Machine_logo.png",
                    link: "https://github.com/Project-OSRM/osrm-backend",
                    label: "Open Source Routing Machine"
                },
                {
                    icon: "pi pi-map",
                    link: "https://www.openrailwaymap.org/",
                    label: "OpenRailwayMap"
                }
            ],
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: OSM_RELATED_PROJECT_CARDS
                }
            ],
            image: "/ngi0/img/openstreetmap.logo.svg"
        } as ProjectDescriptionType
    ]
};

const GEO_COMPARISON: ProjectPageType = {
    pageTitle: "A Detailed Comparison Between MapComplete and StreetComplete",
    menuTitle: "MapComplete vs StreetComplete",
    projectDescription: [
        {
            header: "Comparison Between MapComplete and StreetComplete",
            text: "MapComplete\n-----------\n\n**Purpose**: MapComplete is a versatile tool designed for browsing, editing, and adding data to OpenStreetMap (OSM). It is particularly useful for visualizing specific themes and datasets, such as cycling infrastructure, public transportation, or cultural heritage.\n\n**Features**:\n\n*   **Theme-based Mapping**: Users can choose from various themes, each highlighting different types of data. For example, there are themes for bicycle parking, public art, trees, and more.\n*   **Interactive Interface**: MapComplete provides an intuitive interface that allows users to click on map elements and edit their properties directly.\n*   **Visualization**: It emphasizes the visualization of OSM data, making it easier to see what data is already present and what might be missing or incorrect.\n*   **Customization**: Users and communities can create custom themes tailored to specific needs or interests.\n\nStreetComplete\n--------------\n\n**Purpose**: StreetComplete is a mobile application focused on improving OpenStreetMap by allowing users to answer simple, survey-style questions about their surroundings. It targets casual users who can contribute data without needing in-depth knowledge of OSM.\n\n**Features**:\n\n*   **Quest-based System**: Users are presented with quests, which are questions about nearby map features. These might include details like building addresses, road surface types, or amenity opening hours.\n*   **Mobile-friendly**: Designed specifically for mobile use, StreetComplete leverages the GPS capabilities of smartphones to present relevant quests based on the user’s location.\n*   **User-friendly**: The app simplifies the process of contributing to OSM, making it accessible to anyone, including those without mapping experience.\n*   **Automatic Upload**: Once users complete quests, the app automatically uploads the data to OSM, ensuring contributions are quickly integrated into the map.\n\nComparison\n----------\n\nAspect\n\nMapComplete\n\nStreetComplete\n\n**Target Audience**\n\nBoth casual and experienced mappers interested in specific themes and visualization.\n\nCasual mappers looking for a straightforward way to contribute via their mobile devices.\n\n**Usability**\n\nRicher, more detailed interface suitable for desktop use and thematic exploration.\n\nGamified, easy-to-use experience for on-the-go contributions.\n\n**Functionality**\n\nAllows for detailed edits and visualizations based on selected themes, providing a comprehensive tool for exploring and enhancing specific types of OSM data.\n\nFocuses on answering specific questions about the environment, making it simpler but less comprehensive in terms of data management.\n\n**Contribution Style**\n\nUsers might engage in more complex edits and data management, often in a targeted way based on themes.\n\nUsers contribute by answering predefined questions, making contributions easier but more guided and limited to what the app presents."
        } as ProjectDescriptionType
    ]
};

export const GEO_DOSSIER_PATHNAME = "geo";

export const DOSSIER: DossierType = {
    pathName: GEO_DOSSIER_PATHNAME,
    image: "/ngi0/img/openstreetmap.logo.svg",
    header: "Geography",
    subheader: "Charting, routing, maps",
    tags: ["Charting", "Routing", "Maps", "OpenStreetMap", "Decentralised Solutions"],
    link: `/ngi0/${GEO_DOSSIER_PATHNAME}`,
    cards: GEO_CARDS,
    tagsDossierDetail: GEO_TAGS,
    projects: GEO_DOSSIER_PROJECTS,
    detailedProjects: {
        "open_street_map": OSM_DETAIL
    },
    comparisons: {
        "mapcomplete_vs_streetcomplete": GEO_COMPARISON
    }
}
