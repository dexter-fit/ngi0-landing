import {ProjectCardType, ProjectPageType, ImageType} from "../types";
import {ngi0Projects} from "./ngi0Projects";
import {ngi0Images} from "./ngi0Images";
import {ASSOCIATED_NGI0_PROJECTS} from "./commonStrings";
import {DossierType} from "../types/DossierType";

const AUDIO_RELATED_PROJECT_CARDS: ProjectCardType[] = [
    ngi0Projects.hurd,
    ngi0Projects.faircamp,
    ngi0Projects.multisoni,
    ngi0Projects.tiliqua,
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

const GALLERY_LMMS: ImageType[] = [
    ngi0Images.lmms_0,
    ngi0Images.lmms_1,
    ngi0Images.lmms_2,
    ngi0Images.lmms_3
]

const GALLERY_LINTHESIA: ImageType[] = [
    ngi0Images.linthesia_0,
    ngi0Images.linthesia_1,
    ngi0Images.linthesia_2,
    ngi0Images.linthesia_3
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
            image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/LMMS_logo_v1.2.2.png",
            header: "LMMS",
            text: "This audio workstation program can be used to compose music in general. It offers multi-track workflow for various instruments or sound tracks and variety of effects and filters that can be applied on these tracks. Sound fonts can be easily imported into the program and the melodies can be composed by inserting separate tones using standard mouse and keyboard or with a connected MIDI or USB musical instrument, such as digital keyboard or piano.",
            tags: ["Music", "Composing", "Soundtrack", "Musical Instrument" ],
            links: [
                {
                    link: "https://lmms.io/",
                    label: "LMMS"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_LMMS
                }
            ]
        },
        {
            header: "Comparison",
            text: "Alternative products, such as FL Studio, Abbleton, Logic Pro X, or Reaper focus more on the professional needs and outperform LMMS in the amount and quality of professional features. LMMS is a smaller project but reflects the needs or amateur music composers and is easy to use. The extra features it misses can be supplemented with other software, such as Audacity, or by existing plugins.",
        },
         {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/linthesia.png",
            header: "Linthesia",
            text: "Linthesia is a game-like music visualizer, often used for learning of playing various songs on piano. A MIDI file can be imported and played with setting of various instruments to each MIDI track. The played tones are visualized on a virtual keyboard and a connected electronic instrument can be used to match the visualization.",
            tags: ["Muisic", "Piano", "Learning", "MIDI" ],
            links: [
                {
                    link: "https://linthesia.sourceforge.net",
                    label: "Linthesia"
                }
            ],
            gallery: [
                {
                    heading: "Examples",
                    images: GALLERY_LINTHESIA
                }
            ]
        },
        {
            header: "Comparison",
            text: "Linthesia was created as a fork of a similar software called Synthesia. Synthesia project, however, stopped being open source and free and turned into a commercial project. Linthesia focuses primarily on the basic piano learning interface and migh miss some visual effects available in tools, such as Spectral Piano.",
        },
        {
            image: "https://www.fit.vut.cz/person/ivlnas/public/entry-point/def-img/audacity.png",
            header: "Audacity",
            text: "Audacity supports a wide range of audio formats and provides various tools for cutting, copying, mixing, and applying effects to audio files. Its functionality is further enhanced by support for plug-ins, making it suitable for both beginners and advanced users in fields such as music production, podcasting, and sound design.",
            tags: ["Audio", "Sound", "SFX", "Signal Processing"],
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
    tags: ["Graphics", "Multimedia", "Music", "Sound"],
    link: `/ngi0/${AUDIO_DOSSIER_PATHNAME}`,
    cards: AUDIO_CARDS,
    tagsDossierDetail: AUDIO_TAGS,
    projects: AUDIO_DOSSIER_PROJECTS,
    detailedProjects: {
    },
    comparisons: {
    }
}
