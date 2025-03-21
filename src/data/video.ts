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
    ngi0Projects.videobox,
    ngi0Projects.loops,
    ngi0Projects.vframe
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

const GALLERY_CUTIE: ImageType[] = [
    ngi0Images.cutie_0,
    ngi0Images.cutie_1,
    ngi0Images.cutie_2,
    ngi0Images.cutie_3
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
            tags: ["video", "movie", "film", "cut"],
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
        },
        {
            image: "https://raw.githubusercontent.com/Zarxrax/Cutie-Roto/refs/heads/main/gui/cutie_r.ico",
            header: "Cutie Roto",
            text: "This GUI application is based on the deep learning Cutie object segmentation framework. It serves as an AI assistant for rotoscoping a video sequence where a mask around an object is required to be updated through the whole video. The user can simply click on the desired object in the video, this object gets selected, additional adjustments can be applied, and the mask can be propagated to other frames.",
            tags: ["video", "movie", "vfx", "mask"],
            links: [
                {
                    link: "https://github.com/Zarxrax/Cutie-Roto",
                    label: "Cutie Roto"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_CUTIE
                }
            ]
        },
        {
            header: "Comparison",
            text: " Adobe’s Roto Brush or DaVinci Resolve Magic Mask are alternative commercial products integrated into video editors. Cutie Roto is used as a standalone application where masks are exported as an image sequence and imported into the video editor. However, the open nature of Cutie Roto and its extensibility with newer versions of Cutie or other neural networks for the segmentation might be advantegous as an easy way to improve the quality of the results in the future. Also, the simple user interface makes it easier to use.",
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
