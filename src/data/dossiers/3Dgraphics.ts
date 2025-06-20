import {ProjectCardType, ProjectPageType, ImageType} from "@/types";
import {ngi0Projects} from "@/data/ngi0Projects";
import {ngi0Images} from "@/data/ngi0Images";
import {ASSOCIATED_NGI0_PROJECTS} from "@/data/commonStrings";
import {DossierType} from "@/types/DossierType";

const THREE_D_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.blenderWeb,
    ngi0Projects.icosaGallery,
    ngi0Projects.manyfold,
    ngi0Projects.cablesGl,
    ngi0Projects.replicant,
    ngi0Projects.py3d,
    ngi0Projects.f3d,
    ngi0Projects.itowns,
    ngi0Projects.minetestedu,
    ngi0Projects.libreSoc,
    ngi0Projects.xrfragments
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

const GALLERY_MESHLAB: ImageType[] = [
    ngi0Images.meshlab_0,
    ngi0Images.meshlab_1,
    ngi0Images.meshlab_2,
    ngi0Images.meshlab_3
]

const GALLERY_MESHROOM: ImageType[] = [
    ngi0Images.meshroom_0,
    ngi0Images.meshroom_1,
    ngi0Images.meshroom_2,
    ngi0Images.meshroom_3
]

const GALLERY_ONLINE: ImageType[] = [
    ngi0Images.online_0,
    ngi0Images.online_1,
    ngi0Images.online_2,
    ngi0Images.online_3
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
            image: "/ngi0/img/3Dgraphics/Meshroom_Logo_-_visualization.png",
            header: "Meshroom",
            text: "This program serves for photogrammetry and 3D reconstruction purposes. Based on an input set of images, capturing the scene from different points of view, sparse or dense point cloud can be reconstructed, followed by conversion to fully textured 3D mesh. Its highly extensible and adjustable pipeline and also commandline tools make Meshroom easy to integrate into various workflows. GPU acceleration as well as different feature extractors and matching options are available. ",
            tags: ["photogrammetry", "3D reconstruction", "mesh", "point cloud" ],
            links: [
                {
                    link: "https://alicevision.org/#meshroom",
                    label: "Meshroom"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_MESHROOM
                }
            ]
        },
        {
            header: "Comparison",
            text: "Alternative products, such as 3DF Zephyr or Agisoft Metashape are more precise for the mesh reconstruction. However, the customizable pipeline allows the user to fine tune the reconstruction process for performance or quality purposes. The pipeline is also easily editable using graphical nodes-based programming whereas other software usually offers only limited options defined in various presets.",
        },
         {
            image: "/ngi0/img/3Dgraphics/MeshLab_logo_left_eye.png",
            header: "MeshLab",
            text: "MeshLab offers various advanced tools for 3D mesh editing, analysis, and processing. Simplification of meshes, alignment, refinement, removal or highlighting of specific mesh elements, subdivision, boolean operators, curvature analysis or point cloud processing are available. This software is often used in academic and scientific use cases.",
            tags: ["Mesh Editting", "Triangles", "3D Models", "Geometry" ],
            links: [
                {
                    link: "https://www.meshlab.net",
                    label: "MeshLab"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_MESHLAB
                }
            ]
        },
        {
            header: "Comparison",
            text: "MeshLab is not a standard 3D modeling software. The main purpose of MeshLab is the analysis or processing of existing meshes, not the interactive artistic modeling proces. Existing tools often do not provide the advanced tools for allignment or highlighting of geometrical patterns.",
        },        
         {
            image: "/ngi0/img/3Dgraphics/online3d.svg",
            header: "Online 3D Viewer",
            text: "This simple web-based tool is a convenient way to quickly display 3D models and apply basic transforms, measurements, and rendering operations.",
            tags: ["Mesh Viewing", "Triangles", "3D Models", "Geometry" ],
            links: [
                {
                    link: "https://3dviewer.net/",
                    label: "Online 3D Viewer"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_ONLINE
                }
            ]
        },
        {
            header: "Comparison",
            text: "This viewer does not offer any editing tools but can be used to quickly inspect 3D model files in web browser. It might be more convenient when working remotedely without the need to install any heavyweight software.",
        },        
        {
            image: "/ngi0/img/3Dgraphics/blender.svg",
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
    image: "/ngi0/img/3Dgraphics/Blender_logo_no_text.svg",
    header: "3D Graphics",
    subheader: "3D Modeling Software",
    tags: ["Graphics", "Multimedia", "3D", "Blender"],
    link: `/${GRAPHICS3D_DOSSIER_PATHNAME}`,
    cards: GRAPHICS3D_CARDS,
    tagsDossierDetail: GRAPHICS3D_TAGS,
    projects: GRAPHICS3D_DOSSIER_PROJECTS,
    detailedProjects: {
    },
    comparisons: {
    }
}
