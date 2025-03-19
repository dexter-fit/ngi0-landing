import {ProjectCardType, ProjectPageType, ImageType} from "../types";
import {ngi0Projects} from "./ngi0Projects";
import {ngi0Images} from "./ngi0Images";
import {ASSOCIATED_NGI0_PROJECTS} from "./commonStrings";
import {DossierType} from "../types/DossierType";

const TWO_D_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.libspngAPNG,
    ngi0Projects.calligraSVG,
    ngi0Projects.libvips
];

const GRAPHICS2D_CARDS = [
    ...TWO_D_RELATED_PROJECT_CARDS,
];

const GRAPHICS2D_TAGS: string[] = [
];

const GALLERY_GIMP: ImageType[] = [
    ngi0Images.gimp_0,
    ngi0Images.gimp_1,
    ngi0Images.gimp_2,
    ngi0Images.gimp_3
]

const GALLERY_INKSCAPE: ImageType[] = [
    ngi0Images.inkscape_0,
    ngi0Images.inkscape_1,
    ngi0Images.inkscape_2,
    ngi0Images.inkscape_3
]

const GALLERY_KRITA: ImageType[] = [
    ngi0Images.krita_0,
    ngi0Images.krita_1,
    ngi0Images.krita_2,
    ngi0Images.krita_3
]

const GRAPHICS2D_DOSSIER_PROJECTS: ProjectPageType = {
    pageTitle: "2D Graphics and Image Editor",
    menuTitle: "2D Graphics Dossier",
    projectDescription: [
        {
            header: "2D Graphic and Image Editing Software Entry Point",
            text: "Editors of 2D graphics provide the users with tools for the creation and editing of images. Two main categories of 2D images exist: raster and vector representations. Both categories are covered in this entry point."
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
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_GIMP
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
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_INKSCAPE
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
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_KRITA
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
        }
    ]
};

export const GRAPHICS2D_DOSSIER_PATHNAME = "graphics2D";

export const DOSSIER: DossierType = {
    pathName: GRAPHICS2D_DOSSIER_PATHNAME,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Gimp-wilber-scalable.svg/1024px-Gimp-wilber-scalable.svg.png",
    header: "2D Graphics",
    subheader: "Image Editors",
    tags: ["Graphics", "Image", "GIMP", "Krita"],
    link: `/ngi0/${GRAPHICS2D_DOSSIER_PATHNAME}`,
    cards: GRAPHICS2D_CARDS,
    tagsDossierDetail: GRAPHICS2D_TAGS,
    projects: GRAPHICS2D_DOSSIER_PROJECTS,
    detailedProjects: {
    },
    comparisons: {
    }
}
