import {ProjectCardType, ProjectPageType, ImageType} from "@/types";
import {ngi0Projects} from "@/data/ngi0Projects";
import {ngi0Images} from "@/data/ngi0Images";
import {ASSOCIATED_NGI0_PROJECTS} from "@/data/commonStrings";
import {DossierType} from "@/types/DossierType";

const VFX_RELATED_PROJECT_CARDS = [
    ngi0Projects.libreSOC,
    ngi0Projects.miru,
    ngi0Projects.peertube,
    ngi0Projects.peertubeRemoteTranscoding,
    ngi0Projects.videobox,
    ngi0Projects.loops,
    ngi0Projects.tisg,
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

const GALLERY_OPENSHOT: ImageType[] = [
    ngi0Images.openshot_0,
    ngi0Images.openshot_1,
    ngi0Images.openshot_2,
    ngi0Images.openshot_3
]

const GALLERY_VLC: ImageType[] = [
    ngi0Images.vlc_0,
    ngi0Images.vlc_1,
    ngi0Images.vlc_2,
    ngi0Images.vlc_3
]

const GALLERY_OBS: ImageType[] = [
    ngi0Images.obs_0,
    ngi0Images.obs_1,
    ngi0Images.obs_2,
    ngi0Images.obs_3
]

const GALLERY_SHOTCUT: ImageType[] = [
    ngi0Images.shotcut_0,
    ngi0Images.shotcut_1,
    ngi0Images.shotcut_2,
    ngi0Images.shotcut_3
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
            image: "/img/video/kdenlive.png",
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
        },
        {
            image: "/img/video/OpenShot_logo_2016.svg",
            header: "OpenShot",
            text: "This video editor offers basic and also advanced editing options, such as image, video, audio, and text input, curve-based animations, transitions, filters, transformations of the video clips, and more. OpenShot is lighweight, suitable for quick editing without additional software and tools.",
            tags: ["Video", "Movie", "Film", "Cut" ],
            links: [
                {
                    link: "https://www.openshot.org",
                    label: "OpenShot"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_OPENSHOT
                }
            ]
        },
        {
            header: "Comparison",
            text: "OpenShot does not provide too complex features but is a great option for standard users who need to cut video without overly complex user interface. Compared to other products, OpenShot might be lacking in hardware acceleration support and stability.",
        },
        {
            image: "/img/video/shotcut.png",
            header: "Shotcut",
            text: "This video editor is suitable as an easy-to-use tool to edit videos with prepared templates of titles and effects. The user interface is friendly and not bloated with too complex features which are not necessary for simple projects.",
            tags: ["Video", "Movie", "Film", "Cut" ],
            links: [
                {
                    link: "https://shotcut.org",
                    label: "Shotcut"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_SHOTCUT
                }
            ]
        },
        {
            header: "Comparison",
            text: "Shotcut is similar to OpenShot, providing simple user interface but might not be as performant as other tools.",
        },
        {
            image: "/img/video/VLC_Icon.svg",
            header: "VLC Media Player",
            text: "This player supports a wide range of audio and video formats which can be played. It uses custom implementations and also FFmpeg-supported codecs and muxers. Many advanced functions can be used to avoid opening and editing the videos in editors, for example, audio or subtitle retiming, filters and transforms, etc. The playback is fast and often offers hardware acceleration.",
            tags: ["Video Player", "Multimedia", "Film", "Movie" ],
            links: [
                {
                    link: "https://www.videolan.org/vlc",
                    label: "VLC Media Player"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_VLC
                }
            ]
        },
        {
            header: "Comparison",
            text: "Compared to other software, such as Windows Media Player or QuickTime, VLC supports almost all standardly used vidoe and audio formats and also offers tools that can be used to transcode videos, work with streaming, and more. The user interface is adjustable and different skins can be created by the users. It is also multiplatform and stable.",
        },
        {
            image: "/img/video/OBS_Studio_Logo.svg",
            header: "OBS Studio",
            text: "OBS is a screencasting and streaming application suitable for real-time video capturing, processing, encoding, and streaming purposes. It is often used for creating of tutorials to record the user desktop or to stream either capmera captured video or screen content, for example, when playing video games. Various edits and overlays can be added to the video in real time.",
            tags: ["Streaming", "Multimedia", "Video", "Capturing" ],
            links: [
                {
                    link: "https://obsproject.com",
                    label: "OBS Studio"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_OBS
                }
            ]
        },
        {
            header: "Comparison",
            text: "OBS is a general video capturing and streaming tool and offers all the necessary features. Additional support for features like chat, connected mobile apps, store integrations, etc. are available in commercial alternatives, such as Streamlabs, which is based on a fork of OBS. Professional tools, such as vMix focus on industrial setups with several devices and user interface which is quick to use. OBS can be customized and extended to support many professional features. It might encounter some stability issues when performance demanding setups are used.",
        },
        {
            image: "/img/video/cutie_r.ico",
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
    image: "/img/video/Video_Camera_-_The_Noun_Project.svg",
    header: "Video",
    subheader: "Video Editors",
    tags: ["Graphics", "Multimedia", "Kdenlive", "Video"],
    link: `/${VIDEO_DOSSIER_PATHNAME}`,
    cards: VIDEO_CARDS,
    tagsDossierDetail: VIDEO_TAGS,
    projects: VIDEO_DOSSIER_PROJECTS,
    detailedProjects: {
    },
    comparisons: {
    }
}
