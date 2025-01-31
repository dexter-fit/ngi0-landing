import {ProjectCardType, ProjectPageType} from "../types";
import {ngi0Projects} from "./ngi0Projects";
import {ProjectDescriptionType} from "../types/ProjectDescriptionType";
import {ASSOCIATED_NGI0_PROJECTS} from "./commonStrings";
import {DossierType} from "../types/DossierType";

const TWO_D_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.libspngAPNG,
    ngi0Projects.calligraSVG,
    ngi0Projects.libvips
];

const THREE_D_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.blenderWeb,
    ngi0Projects.icosaGallery,
    ngi0Projects.manyfold,
    ngi0Projects.cablesGl
];

const AUDIO_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.hurd,
    ngi0Projects.pulseAudio
];

const VFX_RELATED_PROJECT_CARDS = [
    ngi0Projects.libreSOC,
    ngi0Projects.miru,
    ngi0Projects.peertube,
    ngi0Projects.peertubeRemoteTranscoding,
    ngi0Projects.videobox
]

const GRAPHICS_CARDS = [
    ...TWO_D_RELATED_PROJECT_CARDS,
    ...THREE_D_RELATED_PROJECT_CARDS,
    ...AUDIO_RELATED_PROJECT_CARDS,
    ...VFX_RELATED_PROJECT_CARDS
];

const GRAPHICS_TAGS: string[] = [
];

const GRAPHICS_DOSSIER_PROJECTS: ProjectPageType = {
    pageTitle: "Graphics and Multimedia Dossier",
    menuTitle: "Graphics Dossier",
    projectDescription: [
        {
            header: "Graphic and Multimedia Software Entry Point",
            text: "This is an introduction to the world of free and open-source software (FOSS) focused on various problems in computer graphics and multimedia. The following programs can serve as alternatives to proprietary products and sometimes even surpass them in certain aspects. The obvious general advantages of FOSS over proprietary software are that FOSS is accessible for free, multiplatform, often updated, extensible with a lot of plugins, open for code contributions, bug fixes, and new ideas, and often has a large and active community.",
        },
        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/gimp.svg",
            header: "GIMP",
            text: "This raster editor can be used for production of drawings, posters, photo editing, etc. It contains various types of painting brushes, image-editing tools, filters, and color-adjustment options. The program offers a layered workflow for complex editing. Higher color bit-depths than standard 8-bit are also supported. Its UI is higly customizable",
            tags: ["photo editing", "2D Graphics", "drawing", "raster"],
            links: [
                {
                    link: "https://www.gimp.org/",
                    label: "GIMP"
                }
            ]
        },
        {
            header: "Comparison",
            text: "Although GIMP offers a wide variety of features and can be extended with plugins, users often find its UI less intuitive than that in alternative software like Photoshop. Photoshop also contains more advanced features, but its price might be an important reason why many users prefer GIMP nevertheless. Online drawing tools like Canva, Photopea, or Pixlr are becoming popular, but might not offer all the necessary functionality to the user. Also, a slow Internet connection might be problematic when importing or exporting large image files.",
        },
        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/inkscape.svg",
            header: "Inkscape",
            text: "This 2D vector editor is a widely used software that maintains a high position among users interested in vector graphics. It allows editing of many vector formats, including the widely used SVG. Vector graphics, containing various texts, diagrams, or schemes, do not lose quality when being zoomed in and are often smaller in size. This tool can be easily extended by plugins and can be used to create various schemes, figures, and design elements for all kinds of articles, presentations, etc.",
            tags: ["image editting", "vector", "svg"],
            links: [
                {
                    link: "https://inkscape.org/",
                    label: "Inkscape"
                }
            ]
        },
        {
            header: "Comparison",
            text: "Proprietary software like Adobe Illustrator, or CorelDRAW is focused on artistic features while Inkscape maintains its general vector editing workflow. Inkscape is often used also in the professional field as alternatives do not offer significant additional features. Recently, online editors such as Figma have been used by many users due to their simple workflow. However, these editors often lack advanced features.",
        },
        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/krita.svg",
            header: "Krita",
            text: "Krita is a graphics program specialized in artistic painting. Various types of brushes with stroke stabilization and support of input hardware such as graphic tablets make this tool suitable for artists. Additional tools like vector elements and text editors allow for quick enhancement of the artwork. The editor also supports production of animations with sound and export of the finished video. It can also be used as a standard image editor.",
            tags: ["artwork", "raster", "paint", "animation"],
            links: [
                {
                    link: "https://krita.org/en/",
                    label: "Krita"
                }
            ]
        },
        {
            header: "Comparison",
            text: "Photoshop also supports animations and painting, but since these features are the main focus of Krita, it offers a more balanced and fine-tuned workflow. FireAlpaca is a lightweight and also free alternative of Krita, which might be easier to use but lacks all the customization options and features. Toon Boom Harmony or Moho Pro are professional tools used in many top animation projects. They offer many features and are more optimized than Krita. However, many authors do need such advanced tools for their projects and Krita is still a way to save a lot of money. Software designed for tablets, such as Procreate, offers optimized UI, but Krita can also be used on mobile devices. Clip Studio Paint or Adobe Fresco offer easy workflows with advanced editing tools while Krita sometimes needs more experience to reproduce the same results, which, on the other hand, are more customizable.",
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: TWO_D_RELATED_PROJECT_CARDS
                }
            ]
        },

        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/blender.svg",
            header: "Blender",
            text: "Blender is mainly a 3D editor but offers a lot of other options, such as 2D editing and animation, drawing, video editing, compositing, realistic rendering, etc. Its open-source nature makes it a popular choice for amateurs and professionals. The large community support with forums and tutorials makes learning with this tool easy. A lot of community add-ons and the option to use the built-in Python scripting environment make the software highly flexible and suitable for many various tasks in the field of computer graphics, game development, science, education, filmmaking, etc.",
            tags: ["3D editing", "animation", "multimedia processing", "video editing"],
            links: [
                {
                    link: "https://www.blender.org/",
                    label: "Blender"
                }
            ]
        },
        {
            header: "Comparison",
            text: "The main advantage of Blender compared to the alternatives is its rich variety of free features. Proprietary 3D editors are usually quite expensive. Software like 3Ds Max, Maya, or Cinema 4D offer professional tools, but they can be replaced with Blender easily. The internal Blender path-tracing renderer Cycles is highly optimized and can be used with GPU as well. It can simulate most of the realistic effects. Alternative paid renderers might offer more advanced features, but they can also be imported to Blender to replace Cycles and keep the workflow. Sony Vegas, Adobe Premiere Pro, or Adobe After Effects are tools specifically designed for 2D video editing and VFX production. They might surpass Blender in this field, but the video editor and compositor in Blender offer a lot of advanced tools that can compete with the mentioned software. Their usage may not be as straightforward as that with specialized software. Similarly, Photoshop, Krita, or GIMP definitely offer better workflow for 2D drawing, but Blender is gaining a lot of feature updates in this direction, as 2D animation is being actively developed there. Game engines such as Unity or Unreal are often used for 3D scene composition. However, these engines lack the powerful designing and editing options of Blender. In terms of game development, Blender contained a game engine that was deprecated in newer versions.",
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: THREE_D_RELATED_PROJECT_CARDS
                }
            ]
        },

        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/audacity.png",
            header: "Audacity",
            text: "Audacity supports a wide range of audio formats and provides various tools for cutting, copying, mixing, and applying effects to audio files. Its functionality is further enhanced by support for plug-ins, making it suitable for both beginners and advanced users in fields such as music production, podcasting, and sound design.",
            tags: ["audio", "sound", "sfx", "signal processing"],
            links: [
                {
                    link: "https://www.blender.org/",
                    label: "Blender"
                }
            ]
        },
        {
            header: "Comparison",
            text: "Audacity belongs to the top software in the field of audio editing. Adobe Audition is a similar but paid tool which aims to be easy to use even for beginners. Users often view these two tools as on the same level. Another similar competitor is WavePad which lacks the wide community support as Audacity. Reaper and Pro Tools are advanced tools with a lot of features that might be too complex for basic audio editing tasks. TwistedWave aims to be a simple multiplatform solution but might not offer all the necessary tools.",
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: AUDIO_RELATED_PROJECT_CARDS
                }
            ]
        },

        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/blender.svg",
            header: "Blender for VFX",
            text: "Blender is mainly a 3D editor but offers a lot of other options, such as 2D editing and animation, drawing, video editing, compositing, realistic rendering, etc. Its open-source nature makes it a popular choice for amateurs and professionals. The large community support with forums and tutorials makes learning with this tool easy. A lot of community add-ons and the option to use the built-in Python scripting environment make the software highly flexible and suitable for many various tasks in the field of computer graphics, game development, science, education, filmmaking, etc.",
            tags: ["3D editing", "animation", "multimedia processing", "video editing"],
            links: [
                {
                    link: "https://www.blender.org/",
                    label: "Blender"
                }
            ]
        },
        {
            header: "Comparison",
            text: "The main advantage of Blender compared to the alternatives is its rich variety of free features. Proprietary 3D editors are usually quite expensive. Software like 3Ds Max, Maya, or Cinema 4D offer professional tools, but they can be replaced with Blender easily. The internal Blender path-tracing renderer Cycles is highly optimized and can be used with GPU as well. It can simulate most of the realistic effects. Alternative paid renderers might offer more advanced features, but they can also be imported to Blender to replace Cycles and keep the workflow. Sony Vegas, Adobe Premiere Pro, or Adobe After Effects are tools specifically designed for 2D video editing and VFX production. They might surpass Blender in this field, but the video editor and compositor in Blender offer a lot of advanced tools that can compete with the mentioned software. Their usage may not be as straightforward as that with specialized software. Similarly, Photoshop, Krita, or GIMP definitely offer better workflow for 2D drawing, but Blender is gaining a lot of feature updates in this direction, as 2D animation is being actively developed there. Game engines such as Unity or Unreal are often used for 3D scene composition. However, these engines lack the powerful designing and editing options of Blender. In terms of game development, Blender contained a game engine that was deprecated in newer versions.",
        },
        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/kdenlive.png",
            header: "Kdenlive",
            text: "KDE Non-Linear Video Editor, is a free, open-source video editing software that caters to both amateur and professional video editors. Developed by the KDE community, Kdenlive offers a comprehensive set of features, including multi-track video editing, a wide array of effects and transitions, keyframe animations, and support for a vast range of video and audio formats. Its intuitive interface and powerful tools make it suitable for creating high-quality video content, from simple home movies to complex video projects.",
            tags: ["video", "movie", "film", "cut"],
            links: [
                {
                    link: "https://kdenlive.org/en/",
                    label: "Blender"
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

export const GRAPHICS_DOSSIER_PATHNAME = "graphics";

export const DOSSIER: DossierType = {
    pathName: GRAPHICS_DOSSIER_PATHNAME,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Gimp-wilber-scalable.svg/1024px-Gimp-wilber-scalable.svg.png",
    header: "Graphics",
    subheader: "Graphics and Multimedia",
    tags: ["Graphics", "Multimedia", "GIMP", "Blender"],
    link: `/ngi0/${GRAPHICS_DOSSIER_PATHNAME}`,
    cards: GRAPHICS_CARDS,
    tagsDossierDetail: GRAPHICS_TAGS,
    projects: GRAPHICS_DOSSIER_PROJECTS,
    detailedProjects: {
    },
    comparisons: {
    }
}