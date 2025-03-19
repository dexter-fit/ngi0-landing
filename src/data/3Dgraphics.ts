import {ProjectCardType, ProjectPageType, ImageType} from "../types";
import {ngi0Projects} from "./ngi0Projects";
import {ngi0Images} from "./ngi0Images";
import {ASSOCIATED_NGI0_PROJECTS} from "./commonStrings";
import {DossierType} from "../types/DossierType";

const THREE_D_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.blenderWeb,
    ngi0Projects.icosaGallery,
    ngi0Projects.manyfold,
    ngi0Projects.cablesGl
];

const GRAPHICS3D_CARDS = [
    ...THREE_D_RELATED_PROJECT_CARDS,
];

const GRAPHICS3D_TAGS: string[] = [
];

const GALLERY_BLENDER: ImageType[] = [
    ngi0Images.blender_0,
    ngi0Images.blender_1,
    ngi0Images.blender_2,
    ngi0Images.blender_3
]

const GRAPHICS3D_DOSSIER_PROJECTS: ProjectPageType = {
    pageTitle: "3D Graphics and Modeling",
    menuTitle: "3D Graphics Dossier",
    projectDescription: [
        {
            header: "3D Graphics Editing Software Entry Point",
            text: "3D editors are programs capable of complex editing operations on 3D models. The editors usually offer imports of various 3D model types and also their import or rendering options to create, sometimes realistic, 2D renders of the 3D scene."
        },
        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/blender.svg",
            header: "Blender",
            text: "Blender is mainly a 3D editor but offers a lot of other options, such as 2D editing and animation, drawing, video editing, compositing, realistic rendering, etc. Its open-source nature makes it a popular choice for amateurs and professionals. The large community support with forums and tutorials makes learning with this tool easy. A lot of community add-ons and the option to use the built-in Python scripting environment make the software highly flexible and suitable for many various tasks in the field of computer graphics, game development, science, education, filmmaking, etc.",
            tags: ["3D editing", "Animation", "Multimedia Processing", "Video Editing"],
            links: [
                {
                    link: "https://www.blender.org/",
                    label: "Blender"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_BLENDER
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
        }
    ]
};

export const GRAPHICS3D_DOSSIER_PATHNAME = "graphics3D";

export const DOSSIER: DossierType = {
    pathName: GRAPHICS3D_DOSSIER_PATHNAME,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
    header: "3D Graphics",
    subheader: "3D Modeling Software",
    tags: ["Graphics", "Multimedia", "3D", "Blender"],
    link: `/ngi0/${GRAPHICS3D_DOSSIER_PATHNAME}`,
    cards: GRAPHICS3D_CARDS,
    tagsDossierDetail: GRAPHICS3D_TAGS,
    projects: GRAPHICS3D_DOSSIER_PROJECTS,
    detailedProjects: {
    },
    comparisons: {
    }
}
