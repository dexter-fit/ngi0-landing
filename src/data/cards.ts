import {ProjectCardType} from "../types";

const CARDS = [
    {
        image: "img/dream2nix.logo.svg",
        header: "Data packages",
        subheader: "Specification + improved tooling for external data set descriptions",
        tags: ["Data", "AI", "Data Set Descriptions"],
        link: "https://nlnet.nl/project/FrictionlessStandards/",
        fund: "NGI0 Entrust",
        start: "2023-04"
    },
    {
        image: "img/dream2nix.logo.svg",
        header: "K-Gen",
        subheader: "From datasets in DCAT catalogs to knowledge graphs",
        tags: ["Data", "AI", "Data Set Descriptions", "Knowledge Graphs"],
        link: "https://nlnet.nl/project/K-Gen/",
        fund: "NGI Assure",
        start: "2022-12"
    },
    {
        image: "img/dream2nix.logo.svg",
        header: "Atomic Tables",
        subheader: "Self-hostable tabular structured data solution",
        tags: ["Data", "AI", "Data Modeling"],
        link: "https://nlnet.nl/project/AtomicTables/",
        fund: "NGI0 Entrust",
        start: "2022-10"
    },
    {
        image: "img/dream2nix.logo.svg",
        header: "Atomic Data",
        subheader: "Typesafe handling of LinkedData",
        tags: ["Data", "AI", "Data Modeling", "Knowledge Graphs"],
        link: "https://nlnet.nl/project/AtomicData/",
        fund: "NGI Assure",
        start: "2021-10",
        end: "2023-06"
    },
    {
        image: "img/dream2nix.logo.svg",
        header: "Organic Maps",
        subheader: "Privacy-focused Android & iOS offline maps application",
        tags: ["Services", "Applications", "Maps", "P2P", "OpenStreetMap"],
        link: "https://nlnet.nl/project/OrganicMaps/",
        fund: "NGI0 Entrust",
        start: "2021-10"
    },
    {
        image: "img/dream2nix.logo.svg",
        header: "Protomaps",
        subheader: "Self-hostable maps based on OpenStreetMap data",
        tags: ["Services", "Applications", "Maps", "OpenStreetMap", "Verticals", "Search"],
        link: "https://nlnet.nl/project/Protomaps/",
        fund: "NGI Zero Core",
        start: "2023-10"
    },
    {
        image: "img/dream2nix.logo.svg",
        header: "peermaps",
        subheader: "Peer to peer cartography",
        tags: ["Verticals", "Search", "Maps", "OpenStreetMap", "P2P", "Decentralised Solutions"],
        link: "https://nlnet.nl/project/Peermaps/",
        fund: "NGI0 Discovery",
        start: "2021-12",
        end: "2022-10"
    },
    {
        image: "img/dream2nix.logo.svg",
        header: "MapComplete",
        subheader: "Thematics OpenStreetMap-viewer and editor",
        tags: ["Verticals", "Search", "Maps", "OpenStreetMap", "Gamification"],
        link: "https://nlnet.nl/project/Mapcomplete/",
        fund: "NGI0 Entrust",
        start: "2022-10"
    },
    {
        image: "img/dream2nix.logo.svg",
        header: "Nominatim",
        subheader: "Multi-lingual support in address search",
        tags: ["Operating Systems", "Maps", "OpenStreetMap"],
        link: "https://nlnet.nl/project/Nominatim/",
        fund: "NGI0 Discovery",
        start: "2020-10",
        end: "2022-09"
    },
    {
        image: "img/dream2nix.logo.svg",
        header: "Dream2nix",
        subheader: "Automate reproducible packaging for various language ecosystems",
        tags: ["Software Engineering", "Middleware", "Identity", "Packaging"],
        link: "https://nlnet.nl/project/Dream2nix/",
        fund: "NGI Assure",
        start: "2022-02"
    }
].sort((a, b) => {
    const headerA = a.header.toUpperCase();
    const headerB = b.header.toUpperCase();

    if (headerA < headerB) {
        return -1;
    }
    if (headerA > headerB) {
        return 1;
    }
    return 0;
}) as ProjectCardType[];

export {CARDS};