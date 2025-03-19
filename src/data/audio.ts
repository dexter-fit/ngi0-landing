import {ProjectCardType, ProjectPageType, ImageType} from "../types";
import {ngi0Projects} from "./ngi0Projects";
import {ngi0Images} from "./ngi0Images";
import {ASSOCIATED_NGI0_PROJECTS} from "./commonStrings";
import {DossierType} from "../types/DossierType";

const AUDIO_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.hurd,
    ngi0Projects.pulseAudio
];

const AUDIO_CARDS = [
    ...AUDIO_RELATED_PROJECT_CARDS,
];

const AUDIO_TAGS: string[] = [
];

const GALLERY_AUDACITY: ImageType[] = [
    ngi0Images.audacity_0,
    ngi0Images.audacity_1,
    ngi0Images.audacity_2,
    ngi0Images.audacity_3
]

const AUDIO_DOSSIER_PROJECTS: ProjectPageType = {
    pageTitle: "Audio Editors Dossier",
    menuTitle: "Audio Dossier",
    projectDescription: [
        {
            header: "Audio Editing Software Entry Point",
            text: "Audio editors are used to edit the sound wavefronts by cutting, moving or adjusting their shapes. On a higher level, various filters, denoisers, or sound effects can be applied. Different sound tracks can be mixed or new sounds can be synthesized, for example, simulating muscial instruments."
        },
        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/audacity.png",
            header: "Audacity",
            text: "Audacity supports a wide range of audio formats and provides various tools for cutting, copying, mixing, and applying effects to audio files. Its functionality is further enhanced by support for plug-ins, making it suitable for both beginners and advanced users in fields such as music production, podcasting, and sound design.",
            tags: ["audio", "sound", "sfx", "signal processing"],
            links: [
                {
                    link: "https://www.audacityteam.org/",
                    label: "Audacity"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_AUDACITY
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
    ]
};

export const AUDIO_DOSSIER_PATHNAME = "audio";

export const DOSSIER: DossierType = {
    pathName: AUDIO_DOSSIER_PATHNAME,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Sound-icon.svg",
    header: "Audio",
    subheader: "Sound and Music Editing",
    tags: ["Graphics", "Multimedia", "music", "sound"],
    link: `/ngi0/${AUDIO_DOSSIER_PATHNAME}`,
    cards: AUDIO_CARDS,
    tagsDossierDetail: AUDIO_TAGS,
    projects: AUDIO_DOSSIER_PROJECTS,
    detailedProjects: {
    },
    comparisons: {
    }
}
