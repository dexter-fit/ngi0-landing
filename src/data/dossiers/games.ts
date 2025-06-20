import {ProjectCardType, ProjectPageType, ImageType} from "@/types";
import {ngi0Projects} from "@/data/ngi0Projects";
import {ngi0Images} from "@/data/ngi0Images";
import {ASSOCIATED_NGI0_PROJECTS} from "@/data/commonStrings";
import {DossierType} from "@/types/DossierType";

const GAMES_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.blenderWeb,
    ngi0Projects.inochi,
    ngi0Projects.minetestedu
];

const GAMES_CARDS = [
    ...GAMES_RELATED_PROJECT_CARDS,
];

const GAMES_TAGS: string[] = [
];

const GALLERY_LUANTI: ImageType[] = [
    ngi0Images.luanti_0,
    ngi0Images.luanti_1,
    ngi0Images.luanti_2,
    ngi0Images.luanti_3
]

const GALLERY_OPENARENA: ImageType[] = [
    ngi0Images.openarena_0,
    ngi0Images.openarena_1,
    ngi0Images.openarena_2,
    ngi0Images.openarena_3
]

const GALLERY_AD: ImageType[] = [
    ngi0Images.ad_0,
    ngi0Images.ad_1,
    ngi0Images.ad_2,
    ngi0Images.ad_3
]

const GALLERY_OPENTTD: ImageType[] = [
    ngi0Images.openttd_0,
    ngi0Images.openttd_1,
    ngi0Images.openttd_2,
    ngi0Images.openttd_3
]

const GAMES_DOSSIER_PROJECTS: ProjectPageType = {
    pageTitle: "Games Dossier",
    menuTitle: "Games Dossier",
    projectDescription: [
        {
            header: "Video Games Entry Point",
            text: "Gaming industry produces a vast number of video games of all genres. Free and open-source games are popular due to their zero price and often interesting and experimental features. They might not reach the same visual immersive appearance as the commercial titles but large communities exist around the free titles with an active involvement in the course of the game development. Also, FOSS games can be easily compiled for various platforms and operating systems."
        },
        {
            image: "/ngi0/img/games/Openttdlogo.svg",
            header: "OpenTTD",
            text: "This is a free and open game from the Tycoon category where the player creates a working economical and industrial system. This game focuses on transportation of passengers and the player is responsible for the creation of the transportation network and its maintanance.",
            tags: ["Sandbox", "Business", "Simulation", "Transportation"],
            links: [
                {
                    link: "https://www.openttd.org",
                    label: "OpenTTD"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_OPENTTD
                }
            ]
        },
        {
            header: "Comparison",
            text: "The game is inspired by Transport Tycoon Deluxe, contains all the features of the original game and significantly extends them with additional elements. The original features were improved in terms of user experience and brand new options were added. The old school graphics might be appealing to some players but also an obstance to others."
        },
        {
            image: "/ngi0/img/games/0_A.D._logo.svg",
            header: "0 A.D.",
            text: "This is a historical real-time strategy game focusing on the ancient era. Among other game features, the player can fight other civilisaitons, research new technologies or focus on economy. The developers focus on the historical accuracy of the buildings and units in this game. ",
            tags: ["FPS", "Shooter", "Action", "Deathmatch"],
            links: [
                {
                    link: "https://play0ad.com",
                    label: "0 A.D."
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_AD
                }
            ]
        },
        {
            header: "Comparison",
            text: "The players often praise the deep game features, nice background music, good artistic elements and overall graphics. The players seem top enjoy this game as much as other commercial titles such as Age of Empires etc. The disadvantage of this project might be its slow development and possible bugs since this game is still work in progress."
        },
        {
            image: "/ngi0/img/games/Openarena-logo.svg",
            header: "OpenArena",
            text: "This first person shooter game offers many gaming modes, such as deathmatch, cpature the flag, team deathmatch or tournament, similar to other existing commercial games.",
            tags: ["FPS", "Shooter", "Action", "Deathmatch"],
            links: [
                {
                    link: "https://openarena.ws/",
                    label: "OpenArena"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_OPENARENA
                }
            ]
        },
        {
            header: "Comparison",
            text: "The game is inspired by Quake III arena and offers generally the same features but for free."
        },
        {
            image: "/ngi0/img/games/Minetest_logo.svg",
            header: "Luanti",
            text: "This voxel-based sandbox general engine is used to run many community-developed games and mods where the players can build their own new worlds and explore prodecudrally generated landscapes. The multiplayer options allow for connection with other people.",
            tags: ["Voxel", "Minecraft", "Minetest", "Open World"],
            links: [
                {
                    link: "https://www.luanti.org",
                    label: "Luanti"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_LUANTI
                }
            ]
        },
        {
            header: "Comparison",
            text: "Luanti is inspired by the famous commercial game Minecraft. Due to the Luanti's open nature, it offers many various variations of the game with mods and assets. The game does not exactly imitate Minecraft but is developed to be more flexible and extensible by the community.",
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: GAMES_RELATED_PROJECT_CARDS
                }
            ]
        },    
    ]
};

export const GAMES_DOSSIER_PATHNAME = "games";

export const DOSSIER: DossierType = {
    pathName: GAMES_DOSSIER_PATHNAME,
    image: "/ngi0/img/games/Console-controller_-_game-icons.svg",
    header: "Games",
    subheader: "Video games",
    tags: ["Graphics", "Multimedia", "Gaming", "Entertainment"],
    link: `/${GAMES_DOSSIER_PATHNAME}`,
    cards: GAMES_CARDS,
    tagsDossierDetail: GAMES_TAGS,
    projects: GAMES_DOSSIER_PROJECTS,
    detailedProjects: {
    },
    comparisons: {
    }
}
