import {ProjectCardType, ProjectPageType, DossierType} from "../types";
import {ngi0Projects} from "./ngi0Projects";
import {ASSOCIATED_NGI0_PROJECTS, SIMILAR_OPEN_SOURCE_PROJECTS} from "./commonStrings";
import {openSourceProjects} from "./openSourceProjects";


export const IoT_DOSSIER_PATHNAME = "iot";

const IoT_COMMUNICATION_PROTOCOLS_CARDS: ProjectCardType[] = [
    openSourceProjects.mosquitto,
    openSourceProjects.vernemq,
    openSourceProjects.emqx,
    openSourceProjects.rabbitmq,
    openSourceProjects.activemq
];

const IoT_AUTOMATION_CARDS: ProjectCardType[] = [
    openSourceProjects.blockly,
    openSourceProjects.pocketix,
    openSourceProjects.nodeRED,
    openSourceProjects.homeAssistant,
    openSourceProjects.openHAB
];

const IoT_SECURITY_AND_PRIVACY_CARDS: ProjectCardType[] = [
    ngi0Projects.secushareBox,
    ngi0Projects.zSipOs,
    ngi0Projects.openCryptoHW,
    ngi0Projects.openCryptoLinux,
    ngi0Projects.neuropil,
    ngi0Projects.neuropilDHT,
    ngi0Projects.letsConnectP2P,
    ngi0Projects.rauthy,
    ngi0Projects.KEMTLS,
    ngi0Projects.iso14229,
    ngi0Projects.ellipticCurveSIMDS
];

const IoT_DEVELOPMENT_TOOLS_AND_FRAMEWORKS_CARDS: ProjectCardType[] = [
    ngi0Projects.smoltcp,
    ngi0Projects.purl2sym,
    ngi0Projects.wpeAndroid,
    ngi0Projects.lunaPnR,
    ngi0Projects.lunaPnRPhase2,
    ngi0Projects.jellyfishOPP,
    ngi0Projects.openEnergyProfilerToolset
];

const IoT_INTELLIGENCE_AND_NETWORKING_CARDS: ProjectCardType[] = [
    ngi0Projects.neuropil,
    ngi0Projects.secushareBox,
    ngi0Projects.letsConnectP2P,
];

const IoT_CROSS_CUTTING_AND_OPEN_HW: ProjectCardType[] = [
    ngi0Projects.lunaPnR,
    ngi0Projects.lunaPnRPhase2,
    ngi0Projects.openCryptoLinux,
];

const IoT_INFRASTRUCTURE_ENABLERS: ProjectCardType[] = [
    ngi0Projects.rauthy,
    ngi0Projects.purl2sym,
    ngi0Projects.KEMTLS,
];

const IoT_CARDS: ProjectCardType[] = [
    ...IoT_SECURITY_AND_PRIVACY_CARDS,
    ...IoT_DEVELOPMENT_TOOLS_AND_FRAMEWORKS_CARDS,
    ...IoT_INTELLIGENCE_AND_NETWORKING_CARDS,
    ...IoT_CROSS_CUTTING_AND_OPEN_HW,
    ...IoT_INFRASTRUCTURE_ENABLERS
];

const IoT_TAGS: string[] = [];

const IoT_PROJECTS: ProjectPageType = {
    pageTitle: "Internet of Things and Smart Devices",
    menuTitle: "IoT Dossier",
    projectDescription: [
        {
            header: "🌐 Internet of Things and Smart Devices",
            text: `
The Internet of Things (IoT) is transforming how the digital and physical worlds interact—enabling smart cities, 
intelligent industry, precision agriculture, and more. At the heart of this revolution are the open projects and 
technologies that shape, secure, and scale IoT systems. This web space is a curated hub of innovative projects that 
are pushing the boundaries of IoT development, deployment, and governance. From security protocols to open hardware 
platforms, these initiatives lay the foundation for a smarter, more connected future.

Explore the following categories to discover groundbreaking work happening across the IoT landscape—each playing a key 
role in shaping robust, intelligent, and inclusive systems.
`,
        },
        {
            header: "📡 Communication Protocols",
            text: `
In the Internet of Things (IoT), devices such as sensors, actuators, gateways, and cloud services must constantly 
exchange information to function effectively. This could be anything from a temperature sensor reporting readings to a 
central server, to a smart light turning on after receiving a command from a mobile app.

Because these devices often operate in environments with limited bandwidth, unreliable connections, or power 
constraints, traditional communication methods like HTTP are too heavy. Instead, lightweight, efficient messaging 
protocols like MQTT (Message Queuing Telemetry Transport) and AMQP (Advanced Message Queuing Protocol) are widely used. 
They are designed specifically for real-time, low-overhead, and reliable communication between machines.
`,
            associatedProjects: [
                {
                    heading: SIMILAR_OPEN_SOURCE_PROJECTS,
                    carousel: IoT_COMMUNICATION_PROTOCOLS_CARDS
                }
            ],
            relatedContent: [
                {
                    label: "More about communication protocols",
                    links: [
                        {
                            label: "IoT - Communication Protocols",
                            link: `/${IoT_DOSSIER_PATHNAME}/detail/communication_protocols`
                        }
                    ]
                }
            ]
        },
        {
            header: "🛡️ IoT Security & Privacy",
            text: `
Securing IoT devices and networks is no longer optional—it’s foundational. As connected devices proliferate across 
sensitive environments, ensuring confidentiality, integrity, and availability becomes mission-critical. Projects in this 
space prioritize privacy-by-design, integrating encryption, authentication, and secure communication protocols from the 
ground up. These initiatives aim to reduce the attack surface of IoT ecosystems, minimize data exposure, and empower 
users with more control over their digital identities.

Beyond technical safeguards, these projects also engage with evolving regulatory frameworks and ethical considerations. 
From GDPR-aligned architectures to tools enabling secure edge computing, the goal is to build trust into the IoT stack 
itself. As threat landscapes evolve, these projects serve as the frontline defense—balancing usability, transparency, 
and resilience in increasingly complex environments.
`,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: IoT_SECURITY_AND_PRIVACY_CARDS
                }
            ]
        },
        {
            header: "🛠️ IoT Development Tools & Frameworks",
            text: `
Building reliable IoT systems demands more than just hardware—it requires the right set of tools and frameworks to 
streamline development, testing, and deployment. Projects in this area provide software libraries, SDKs, platforms, 
and integration toolkits that help developers create interoperable and scalable IoT applications faster and with fewer 
bugs. These resources abstract complexity and encourage best practices, making IoT development accessible to a broader 
community.

Whether targeting microcontrollers, gateways, or cloud infrastructure, these tools often embrace open standards and 
modular architectures. They support rapid prototyping, device management, remote configuration, and data 
visualization—all essential capabilities for bringing IoT solutions to life. As IoT matures, these frameworks will be 
central to creating sustainable, upgradable, and secure systems at scale.
`,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: IoT_DEVELOPMENT_TOOLS_AND_FRAMEWORKS_CARDS
                }
            ]
        },
        {
            header: "🧠 IoT Intelligence & Networking",
            text: `
The intelligence of IoT lies in how data is communicated, processed, and acted upon. This category includes projects focused on enhancing device-to-device communication, decentralized discovery, and intelligent networking. Whether through mesh networks, semantic data protocols, or adaptive routing algorithms, these efforts aim to make IoT networks more autonomous, scalable, and responsive.

Beyond connectivity, these projects often integrate lightweight AI and edge inference, enabling smarter decisions closer to where data is generated. They also explore new paradigms in distributed computing and data handling—reducing latency, enhancing privacy, and improving overall system efficiency. The result is a new class of IoT architectures that not only connect devices but empower them with context-aware intelligence.
`,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: IoT_INTELLIGENCE_AND_NETWORKING_CARDS
                }
            ]
        },
        {
            header: "🧬 Cross-Cutting Infrastructure & Open Hardware",
            text: `
Some of the most impactful IoT projects don’t fit neatly into one domain—they provide the essential building blocks for 
many. These include open hardware platforms, firmware toolkits, and shared communication infrastructure that fuel 
innovation across sectors. From microcontroller boards and sensor modules to interoperable operating systems and 
testbeds, these resources are the unsung heroes of the IoT world.

Open-source ethos is strong here, driving collaboration and transparency. By lowering barriers to entry and encouraging 
reuse, these cross-cutting tools accelerate innovation and help smaller players experiment and scale. Their value 
extends across verticals—from smart agriculture to industrial automation—providing a shared foundation for building 
resilient and adaptable IoT systems.
`,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: IoT_CROSS_CUTTING_AND_OPEN_HW
                }
            ]
        },
        {
            header: "🧩 Multi-Domain / Infrastructure Enablers",
            text: `
Not every project fits into a tidy category—but that doesn't make them any less important. These are the bridging 
technologies and platforms that support multiple facets of IoT without being tied to a single application or layer. 
They often address critical challenges like data interoperability, orchestration, orchestration between verticals, or 
managing hybrid cloud-edge environments.

Projects in this space often emerge as glue between ecosystems—enabling cross-domain innovation and holistic IoT 
solutions. Whether it's a semantic metadata framework, a universal protocol converter, or an integrated test platform, 
these enablers make it easier to stitch together disparate components. In a world where IoT ecosystems are becoming 
more complex and interconnected, these flexible solutions are essential to scaling beyond silos.
`,
            associatedProjects: [
                {
                    heading: ASSOCIATED_NGI0_PROJECTS,
                    carousel: IoT_INFRASTRUCTURE_ENABLERS
                }
            ]
        },
        {
            header: "⚙️ User-Friendly Automation in IoT",
            text: `
In the evolving world of the Internet of Things, tools like **Blockly**, **Node-RED**, **OpenHAB**, **Home Assistant**, 
and emerging tools like **Pocketix** are reshaping how users interact with smart systems. **Blockly** and **Pocketix** 
serve as visual programming environments that simplify code creation through intuitive drag-and-drop interfaces—ideal 
for users with little to no coding experience. Blockly, originally designed for the web, provides a foundational 
platform for building logic visually, while Pocketix brings that same ease of use to mobile devices, making IoT 
programming more accessible and on-the-go. These tools emphasize the importance of clear, block-based logic in 
constructing smart workflows, especially in educational or user-centric environments.

Meanwhile, platforms like **Node-RED**, **OpenHAB**, and **Home Assistant** focus on enabling low-code or no-code 
automation of event-driven systems, empowering users to connect devices, set up triggers, and build smart behaviors 
with minimal technical hurdles. Node-RED’s wire-based editor lets users visually wire together IoT devices and services, 
while OpenHAB and Home Assistant focus on comprehensive smart home control with robust automation capabilities. 
As smart environments grow more complex, the need for user-friendly automation tools becomes critical—bridging the gap 
between tech-savvy developers and everyday users. These platforms lower the barrier to entry, making it possible for 
anyone to create intelligent, responsive environments without needing to write traditional code.
`,
            associatedProjects: [
                {
                    heading: SIMILAR_OPEN_SOURCE_PROJECTS,
                    carousel: IoT_AUTOMATION_CARDS
                }
            ],
            relatedContent: [
                {
                    label: "More about communication protocols",
                    links: [
                        {
                            label: "IoT - Communication Protocols",
                            link: `/${IoT_DOSSIER_PATHNAME}/detail/communication_protocols`
                        }
                    ]
                }
            ]
        }
    ]
};

const IoT_COMMUNICATION_PROTOCOLS: ProjectPageType = {
    pageTitle: "IoT - Communication Protocols",
    menuTitle: "Communication",
    projectDescription: [
        {
            header: "📡 Communication Protocols",
            text: `
In the landscape of modern software systems—especially those involving distributed architectures, IoT, and 
microservices—robust, efficient, and reliable messaging protocols are essential. Two popular contenders in this space 
are **MQTT (Message Queuing Telemetry Transport)** and **AMQP (Advanced Message Queuing Protocol)**. Though they both 
serve the same general purpose—facilitating message exchange between devices or services—their design philosophies and 
ideal use cases differ significantly.

## MQTT: Lightweight and IoT-Friendly

MQTT is a lightweight publish-subscribe messaging protocol designed for low-bandwidth, high-latency, or unreliable 
networks. Originally created by IBM in the late 1990s, MQTT has gained widespread adoption in the Internet of Things 
(IoT) space. Its low overhead makes it ideal for constrained devices such as sensors, wearables, and embedded systems.

MQTT operates on a **pub/sub model**, where clients publish messages to specific "topics" and subscribe to topics 
they're interested in. A central broker (like Eclipse Mosquitto or HiveMQ) handles all message routing. This decouples 
senders and receivers, enabling scalable and loosely coupled communication.

**Key features include:**
- Small code footprint and low network usage.
- Quality of Service (QoS) levels to ensure reliable message delivery.
- Persistent sessions and retained messages for intermittent connections.

## AMQP: Enterprise-Grade and Feature-Rich

AMQP is a more comprehensive and robust messaging protocol, designed with enterprise messaging in mind. It was 
developed to standardize messaging middleware and is widely used in financial services, enterprise systems, and any 
domain requiring strong delivery guarantees and complex routing.

Unlike MQTT, AMQP supports both **pub/sub** and **message queue** patterns. It provides features such as message 
acknowledgment, transactions, security, and sophisticated routing through exchanges and bindings. Popular 
implementations include RabbitMQ and Apache Qpid.

**Key characteristics include:**
- Message delivery guarantees (at-most-once, at-least-once, exactly-once).
- Flexible message routing (direct, topic, fanout, headers).
- Support for transactions and security mechanisms (e.g., TLS, SASL).

## When to Use What

- Choose **MQTT** if you're working with IoT devices, need minimal overhead, or are dealing with unreliable networks.
- Opt for **AMQP** if your application requires advanced messaging patterns, strong reliability, or operates in a 
regulated, enterprise environment.

---

In essence, both protocols are powerful tools in a developer’s toolkit. The right choice depends on the specific 
requirements of your system: simplicity and efficiency vs. richness and reliability.
`,
            relatedContent: [
                {
                    label: "MQTT and AMQP Python Examples",
                    links: [
                        {
                            label: "Paho MQTT",
                            link: "https://github.com/eclipse-paho/paho.mqtt.python?tab=readme-ov-file#subscriber-example"
                        },
                        {
                            label: "RabbitMQ AMQP",
                            link: "https://www.rabbitmq.com/tutorials/tutorial-one-python#putting-it-all-together"
                        }
                    ]
                }
            ]
        }
    ]
};

const IoT_AUTOMATION: ProjectPageType = {
    pageTitle: "IoT - Automation",
    menuTitle: "Automation",
    projectDescription: [
        {
            header: "⚙️ User-Friendly Automation in IoT",
            text: `

`,
        }
    ]
};


export const DOSSIER: DossierType = {
    pathName: IoT_DOSSIER_PATHNAME,
    image: "/ngi0/img/iot.png",
    header: "IoT",
    subheader: "Internet of Things and Smart Devices",
    tags: ["IoT", "Internet of Things", "Smart Devices"],
    link: `/ngi0/${IoT_DOSSIER_PATHNAME}`,
    cards: IoT_CARDS,
    tagsDossierDetail: IoT_TAGS,
    projects: IoT_PROJECTS,
    detailedProjects: {
        "communication_protocols": IoT_COMMUNICATION_PROTOCOLS,
        "automation": IoT_AUTOMATION
    },
    comparisons: {}
};
