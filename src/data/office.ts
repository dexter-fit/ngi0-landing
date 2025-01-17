import {ProjectCardType} from "../types";
import {ProjectDescriptionType} from "../types/ProjectDescriptionType";


const OFFICE_CARDS: ProjectCardType[] = [];

const OFFICE_TAGS: string[] = [];

const OFFICE_PROJECTS: ProjectDescriptionType[] = [
    {
        header: "Office applications/productivity tools",
        text: `
What is the problem?
--------------------

There is an urgent need for Europe to regain its technological independence when it comes to **core technologies** such as **office** applications and other **productivity tools**. As boring as these may seem, they are actually a critical point of failure and over time represent not just a liability but a huge cost sink. A single company (Microsoft, MSFT) has had the world in a technological and economic stranglehold for decades now, first with its legacy productivity tools and now with its cloudified version – extracting many billions of Euro’s of public and private money in the process. This while the company has a long track record of convictions worldwide for violating privacy regulations, as well as [engaging](https://www.lioness.co/post/microsoft-is-using-illegal-bribes-in-the-middle-east-and-africa-why-is-the-sec-turning-a-blind-eye) in [bribery](https://www.reuters.com/article/business/microsoft-to-pay-criminal-fine-to-settle-us-anti-bribery-charges-idUSKCN1UH1PA/) and anticompetitive behaviour.

This is just not acceptable: the products in question are certainly not rocket science, using them poses significant operational risks and is overly expensive. A country or organisation that fundamentally cannot run its _basic_ internal infrastructure anywhere outside of a single black box and does not have any _fallback_, puts itself at **grave risk**. Plus, innovation is happening througout the digital commons ecosystem already, and we can benefit from some of the best minds of the world working on creating new tools that will enhance our productivity.

Dominant proprietary actors
---------------------------

*   Microsoft Office - spreadsheet, text editor, presentation, notes
*   Google Apps - spreadsheet, text editor, presentation, notes
*   Apple Numbers, Pages, and Keynote - spreadsheet, text editor, presentation, notes

Libre alternatives from our portfolio
-------------------------------------

*   [Collabora Office Online](https://nlnet.nl/project/LO-Online) – spreadsheet, text editor, presentation
*   [Cryptpad](https://nlnet.nl/project/CryptPadForms) – spreadsheet, text editor, presentation
*   [IronCalc](https://nlnet.nl/project/IronCalc) – spreadsheet
*   [LibreOffice](https://nlnet.nl/project/LibreOfficeP2P) – spreadsheet, text editor, presentation
*   [Slipshow](https://nlnet.nl/project/Slipshow) – presentation
*   [SimplyPresent](https://nlnet.nl/project/SES) – presentation
*   [TypeCell](https://nlnet.nl/project/TypeCell) – notes
*   [Wax](https://nlnet.nl/project/Wax) – text editor
*   [ZetaOffice](http://zetaoffice.net/) – spreadsheet, text editor, presentation

Policy recommendations
----------------------

*   **Install libre alternatives everywhere as immediate fallback**
*   **Invest in further development of open alternatives, add any functionality you need**
*   **Investigate what dependencies are in place that hinder migration away from legacy solutions**
*   **Enforce existing legislation and policies on use of standards in the public sector**
*   **Make sure educational institutions are on board and have high quality open educational resources to avoid future generations from ending up here**

The operational leg of the European Commission recently hit public policy rock bottom when it started a [law suit against its own European Data Protection Supervisor](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:C_202403925), for [pointing out that continuing its use of Microsoft Office 365 is not compatible with European law](https://www.edps.europa.eu/press-publications/press-news/press-releases/2024/european-commissions-use-microsoft-365-infringes-data-protection-law-eu-institutions-and-bodies). The correct action is obvious: make disentangling a top level priority and put in **structural ongoing investment** to speed up transition and to further elevate libre licensed office and productivity tools to improve our productivity.

This dependency is technically unnecessary. For most use cases, a switch can be made today. Ambitions should be bigger: this is dealing with our productivity, which is a core aspect of our economy. This is too strategic to leave to a few very large commercial actors. Even by allocating a small percentage of the budget spent on Microsoft licenses annually today, we can broaden this and spark more productivity at lower cost using digital commons. Currently, there is no such dedicated investment to be found anywhere, apart from the ability for such projects to get small grants from generic open calls via NLnet within the [Next Generation Internet](https://nlnet.nl/NGI) initiative. Taking political responsibility means having a structured longer term approach: we know that this need is here to stay, and by embracing the collective need we can escape from the technical debt that is productivity tools and make our economy and society function better.
        `,
    }
];

export const OFFICE_DOSSIER_PATHNAME = "office";

export const DOSSIER = {
    pathName: OFFICE_DOSSIER_PATHNAME,
    image: "https://nlnet.nl/project/NixDebugAdaptor/nix.logo.svg",
    header: "Office",
    subheader: "Open-Source Office Dossier",
    tags: ["Word", "Excel", "Alternatives", "Open-Source"],
    link: `/ngi0/${OFFICE_DOSSIER_PATHNAME}`,
    cards: OFFICE_CARDS,
    tagsDossierDetail: OFFICE_TAGS,
    projects: OFFICE_PROJECTS,
    detailedProjects: {},
    comparisons: {}
}