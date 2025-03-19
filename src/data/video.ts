import {ProjectCardType, ProjectPageType, ImageType} from "../types";
import {ngi0Projects} from "./ngi0Projects";
import {ngi0Images} from "./ngi0Images";
import {ASSOCIATED_NGI0_PROJECTS} from "./commonStrings";
import {DossierType} from "../types/DossierType";

const VFX_RELATED_PROJECT_CARDS = [
    ngi0Projects.libreSOC,
    ngi0Projects.miru,
    ngi0Projects.peertube,
    ngi0Projects.peertubeRemoteTranscoding,
    ngi0Projects.videobox
]

const VIDEO_CARDS = [
    ...VFX_RELATED_PROJECT_CARDS
];

const VIDEO_TAGS: string[] = [
];

const GALLERY_KDENLIVE: ImageType[] = [
    ngi0Images.kdenlive_0,
    ngi0Images.kdenlive_1,
    ngi0Images.kdenlive_2,
    ngi0Images.kdenlive_3
]

const VIDEO_DOSSIER_PROJECTS: ProjectPageType = {
    pageTitle: "Video Editing Dossier",
    menuTitle: "Video Dossier",
    projectDescription: [
        {
            header: "Video Editing Software Entry Point",
            text: "Video editors are used in cinematography and all fields where video processing is a necessary task. They allow the users to cut the recorded video sequences, add audio tracks, text, edit the video appearance by application of various filters, etc."
        },
        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/kdenlive.png",
            header: "Kdenlive",
            text: "KDE Non-Linear Video Editor, is a free, open-source video editing software that caters to both amateur and professional video editors. Developed by the KDE community, Kdenlive offers a comprehensive set of features, including multi-track video editing, a wide array of effects and transitions, keyframe animations, and support for a vast range of video and audio formats. Its intuitive interface and powerful tools make it suitable for creating high-quality video content, from simple home movies to complex video projects.",
            tags: ["Video", "Movie", "Film", "Cut"],
            links: [
                {
                    link: "https://kdenlive.org/en/",
                    label: "Kdenlive"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_KDENLIVE
                }
            ]
        },
        {
            header: "Comparison",
            text: "Kdenlive is focused on video editing and offers more features in this field than Blender. Kdenlive is often considered a worthy alternative to Sony Vegas, Adobe Premiere, or Final Cut. It is optimized and is one of the few professional video editor that runs well on Linux. Commercial software contains a lot of fancy features that can be often recreated in Kdenlive but the user needs to get used to the UI and options.",
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: VFX_RELATED_PROJECT_CARDS
                }
            ]
        },
    ]
};

export const VIDEO_DOSSIER_PATHNAME = "video";

export const DOSSIER: DossierType = {
    pathName: VIDEO_DOSSIER_PATHNAME,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Video_Camera_-_The_Noun_Project.svg",
    header: "Video",
    subheader: "Video Editors",
    tags: ["Graphics", "Multimedia", "Kdenlive", "Video"],
    link: `/ngi0/${VIDEO_DOSSIER_PATHNAME}`,
    cards: VIDEO_CARDS,
    tagsDossierDetail: VIDEO_TAGS,
    projects: VIDEO_DOSSIER_PROJECTS,
    detailedProjects: {
    },
    comparisons: {
    }
}
