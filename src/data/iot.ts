import {ProjectCardType, ProjectPageType, DossierType} from "../types";
import {ngi0Projects} from "./ngi0Projects";
import {ASSOCIATED_NGI0_PROJECTS, SIMILAR_OPEN_SOURCE_PROJECTS} from "./commonStrings";
import {openSourceProjects} from "./openSourceProjects";
import {ngi0Images} from "./ngi0Images";

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
The intelligence of IoT lies in how data is communicated, processed, and acted upon. This category includes projects 
focused on enhancing device-to-device communication, decentralized discovery, and intelligent networking. Whether 
through mesh networks, semantic data protocols, or adaptive routing algorithms, these efforts aim to make IoT networks 
more autonomous, scalable, and responsive.

Beyond connectivity, these projects often integrate lightweight AI and edge inference, enabling smarter decisions 
closer to where data is generated. They also explore new paradigms in distributed computing and data handling—reducing 
latency, enhancing privacy, and improving overall system efficiency. The result is a new class of IoT architectures that 
not only connect devices but empower them with context-aware intelligence.
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
                    label: "More about automation",
                    links: [
                        {
                            label: "IoT - Automation",
                            link: `/${IoT_DOSSIER_PATHNAME}/detail/automation`
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
Once IoT devices are connected to a platform, they need to deliver tangible benefits to their users. These benefits can
be informational—such as monitoring the temperature inside a home or a greenhouse—or actionable, like opening or closing
a valve, controlling a garage door, or turning on an appliance.

While such actions can enhance the quality of life, the true potential lies in **automation**. Automating processes
removes the need for users to perform repetitive or time-sensitive tasks manually, letting programs or pre-configured
interactions take care of them instead.

Automation can be implemented in several ways. One common method involves writing code—an approach that's often
inaccessible to the average user. To bridge this gap, platforms like **IFTTT** or **Google Home** offer simplified
automation options. These typically work by linking one device’s state to another’s—for example, turning on a light when
another one is activated, or when a specific button is pressed.

However, these basic systems may not be adequate for more complex smart environments. For instance, a smart greenhouse
might need to manage internal temperature, regulate sunlight exposure, and monitor fertilizer levels in both water and
soil. Such scenarios call for more advanced solutions.

One promising approach is **visual programming**. Visual programming allows users to create logic flows through
intuitive interfaces—such as connecting blocks with lines or nesting them to define behavior—without writing
traditional code.

---

On this page, we'll explore various **visual programming tools and platforms** you can use to bring powerful automation
to your smart home!
`
        },
        {
            header: "Blockly",
            text: `
**Blockly** is a visual programming tool originally developed by Google for use on the web. It allows users to create
code by arranging blocks in a simple drag-and-drop interface. Each block represents a logical element—such as loops,
conditionals, variables, or actions—which fit together like puzzle pieces. This visual approach makes programming more
accessible, especially for beginners or non-technical users.

One of Blockly’s biggest advantages is that it abstracts away the complexity of traditional coding syntax. Instead of
worrying about typos or formatting errors, users can focus purely on the logic and structure of their program. This is
particularly valuable in **educational environments**, where students can quickly grasp programming concepts without
needing to learn a full programming language first.

Blockly also plays a powerful role in **IoT system development**. In smart home or smart agriculture applications, for
example, users can rapidly prototype device behaviors—like responding to sensor inputs or scheduling device actions—by
visually linking logical steps. Some IoT platforms even integrate Blockly as a core part of their automation systems,
empowering users to create routines without writing any code.

Moreover, Blockly is **highly customizable** and **language-agnostic**. Developers can extend it with their own blocks,
and the underlying code can be exported to multiple languages such as JavaScript, Python, PHP, Lua, or Dart. This makes
it not only a great learning tool but also a flexible option for rapid development and real-world deployment.

In summary, Blockly is a versatile and beginner-friendly visual programming tool that lowers the barrier to entry for
both education and IoT development, helping users focus on what really matters: building functional, intelligent
systems.
`,
            links: [
                {
                    icon: "pi pi-google",
                    link: "https://developers.google.com/blockly",
                    label: "Google Profile"
                },
                {
                    icon: "pi pi-github",
                    link: "https://github.com/google/blockly",
                    label: "GitHub"
                }
            ],
            gallery: [
                {
                    images: [
                        ngi0Images.blockly_0,
                        ngi0Images.blockly_1
                    ]
                }
            ]
        },
        {
            header: "Pocketix",
            text: `
**Pocketix** is an emerging visual programming editor designed specifically for mobile devices and users who are not 
familiar with traditional programming. The platform simplifies the programming experience by allowing users to construct 
valid programs using a curated set of blocks. Each block represents a fundamental programming construct, such as 
conditionals (\`if\`, \`else\`), variables, and other control structures, enabling users to build more complex 
procedures through nested block configurations—all without the risk of creating invalid code.

Recognizing that complex interactions (like drag and drop) can present challenges for older adults or those new to 
programming, Pocketix replaces these gestures with straightforward button-based interactions, thereby streamlining 
the user experience. For advanced users who desire more flexibility, the platform also offers an option to directly 
edit the code in a JSON-serialized format, bridging the gap between visual programming and traditional code editing.

Although Pocketix is still in its early stages, the development roadmap is rapidly expanding. A completely new editor 
is currently in the works, featuring a more mobile-friendly design and a range of powerful new capabilities. This 
includes the development of a **visual debugger**—a critical tool for helping users better understand and troubleshoot 
their programs. The debugger is being built alongside a **new language**, whose interpreter is being written in **Go**, 
chosen for its efficiency and scalability.

In addition to debugging, the upcoming editor will introduce:

- **Rule recommendations** to help users write better logic
- A **simple IFTTT-style mode** for easy automation
- **Usage tracking** features to help the development team identify pain points and improve the experience over time

These enhancements aim to make Pocketix not only a learning tool, but a practical and intelligent automation environment 
for users of all ages and skill levels.`,
            links: [
                {
                    icon: "pi pi-github",
                    link: "https://github.com/pocketix",
                    label: "GitHub"
                },
                {
                    img: "https://avatars.githubusercontent.com/u/176171814?s=200&v=4",
                    link: "https://pocketixng.iot.petr-john.cz/",
                    label: "Pocketixng"
                },
                {
                    img: "https://avatars.githubusercontent.com/u/176171814?s=200&v=4",
                    link: "https://pocketix-react.iot.petr-john.cz/",
                    label: "Pocketix React"
                }
            ],
            gallery: [
                {
                    images: [
                        ngi0Images.pocketix_0,
                        ngi0Images.pocketix_1,
                        ngi0Images.pocketix_2
                    ]
                }
            ]
        },
        {
            header: "Node-RED",
            text: `
**Node-RED** is a powerful open-source platform designed for wiring together IoT devices, APIs, and online services in 
a visual and intuitive way. Built on Node.js, it provides a flow-based, low-code development environment that enables 
users to build automations and data-driven applications by simply dragging and dropping components on a canvas and 
connecting them with virtual "wires."

At the heart of Node-RED’s interface are **nodes** and **wires**. Each node represents a discrete function or 
capability—this could be anything from reading a sensor, making an HTTP request, or transforming data. Nodes are 
categorized by their function, such as input, output, processing, or integration with external services.

**Wires** are the connectors between these nodes and play a critical role in defining the **flow of data**. When a node 
completes its task (e.g., reading a value or performing a calculation), it sends a message object (\`msg\`) along the 
connected wire to the next node. This message is typically a JSON object and may contain payloads, headers, or metadata. 
The path that wires define effectively **models the logic of your application**, making it clear how data moves and is 
transformed from start to finish.

For example, a simple flow might involve:
- An **inject** node to trigger an action at regular intervals
- A **function** node that processes or modifies the data
- A **debug** node to display the result

By connecting these with wires, Node-RED users can create powerful logic chains that respond to real-time inputs, such
as sensor readings, user actions, or network events.

This wire-based programming model enables rapid prototyping and deployment of **event-driven systems** without requiring
traditional code-heavy development. While it’s highly accessible to beginners, Node-RED also supports advanced features
like custom function nodes (written in JavaScript), persistent data, user-defined subflows, and secure
communication—making it a valuable tool for both hobbyists and professional developers alike.

Node-RED is particularly well-suited for scenarios such as:
- Home automation
- Industrial IoT monitoring
- API orchestration
- Real-time dashboards
- Cloud service integration

Its visual approach, extensibility, and active community make it a leading choice for building smart, connected
applications with minimal effort.`,
            links: [
                {
                    icon: "pi pi-github",
                    link: "https://github.com/node-red/node-red",
                    label: "GitHub"
                },
                {
                    img: "/ngi0/img/iot/node-red-icon-2.svg",
                    link: "https://nodered.org/",
                    label: "Homepage"
                }
            ],
            gallery: [
                {
                    images: [
                        ngi0Images.nodered_0,
                        ngi0Images.nodered_1
                    ]
                }
            ]
        },
        {
            header: "OpenHAB",
            text: `
**OpenHAB** (Open Home Automation Bus) is a highly versatile, open-source platform designed for integrating,
controlling, and automating a wide range of smart home devices and technologies. Built with modularity and
interoperability in mind, OpenHAB acts as a central hub for smart home ecosystems, enabling seamless communication
between devices from different manufacturers, all within a unified interface.

What sets OpenHAB apart is its **support for numerous communication protocols and standards**, including Z-Wave,
Zigbee, MQTT, KNX, Modbus, and many more. This broad compatibility allows users to bring together a wide variety of IoT
devices—lighting, sensors, thermostats, alarms, cameras, appliances—regardless of brand or underlying protocol.

A core feature of OpenHAB is its powerful **rule engine**, which lets users define sophisticated automation logic using
either a graphical interface, domain-specific rule language, or scripting languages like JavaScript and Blockly. These
rules can react to triggers such as time events, sensor input, device status changes, or even user presence to perform
actions across the home. For example, OpenHAB can automatically:

- Turn off all lights when no one is home
- Send an alert when a door is opened during nighttime
- Adjust the thermostat based on current weather and time of day

The platform is designed with both **beginners and advanced users** in mind. Casual users can take advantage of the
intuitive UI and predefined automation templates, while power users can dive into custom scripting and fine-tuned
configurations to suit complex needs.

In addition to automation, OpenHAB offers:
- **Dashboards and UI customization** for creating personalized control panels
- **Voice assistant integration** (Amazon Alexa, Google Assistant, Apple Siri)
- **Remote access** via mobile apps and cloud connectors
- A **rich add-on ecosystem** with bindings for thousands of devices and services

Thanks to its **vendor-neutral** approach and a strong, global open-source community, OpenHAB continues to evolve
rapidly. It's particularly favored by smart home enthusiasts, tinkerers, and professionals who require a robust,
privacy-conscious solution that puts users fully in control of their environments—free from proprietary lock-in.

Whether you're looking to automate a single room or orchestrate an entire smart building, OpenHAB provides the
flexibility, scalability, and transparency to make it possible.`,
            links: [
                {
                    icon: "pi pi-github",
                    link: "https://github.com/openhab",
                    label: "GitHub"
                },
                {
                    img: "https://avatars.githubusercontent.com/u/1007353?s=200&v=4",
                    link: "https://www.openhab.org/",
                    label: "Homepage"
                }
            ],
            gallery: [
                {
                    images: [
                        ngi0Images.openhab_0,
                        ngi0Images.openhab_1,
                        ngi0Images.openhab_2
                    ]
                }
            ]
        },
        {
            header: "Home Assistant",
            text: `
**Home Assistant** is a powerful and increasingly popular open-source platform for building and managing smart home
systems. Designed with a focus on **privacy, local control, and flexibility**, Home Assistant gives users full ownership
over their data and automations, while still offering the convenience of optional cloud integrations. Whether you're
just starting with smart devices or orchestrating a complex, multi-room automation setup, Home Assistant offers a
scalable solution tailored to your needs.

Like OpenHAB, Home Assistant supports a vast array of **IoT devices, protocols, and services**, including Z-Wave,
Zigbee, MQTT, Bluetooth, Wi-Fi-based devices, and many cloud services like Google Assistant, Amazon Alexa, and Apple
HomeKit. Its rapidly growing ecosystem of integrations—powered by a vibrant and active community—ensures that new
devices are added frequently, keeping pace with the fast-moving smart home landscape.

Home Assistant’s automation engine allows users to create **event- and condition-based rules** that dictate how devices
behave. Automations can be built using a simple visual editor or written in YAML for more granular control. For example,
users can set up scenarios such as:

- Automatically turning off lights when no motion is detected for a certain period
- Sending a notification if a window is open when it starts raining
- Adjusting climate settings based on time of day or presence detection

Some key features of Home Assistant include:
- **Local-first architecture**: All data and automation run locally by default, which not only protects user privacy
but also ensures faster and more reliable performance—even when the internet goes down.
- **User-friendly web interface (Lovelace)**: Highly customizable dashboards let users design their own control panels
for different rooms, devices, or use cases.
- **Mobile apps** for iOS and Android: Offering full control, presence tracking, and notification support directly from
smartphones.
- **Extensive automation options**: Including triggers based on time, state, geolocation, device events, and more.
- **Add-on system**: Supports extensions like Node-RED, ESPHome, and custom integrations, further expanding Home
Assistant’s capabilities.

Home Assistant also offers **Home Assistant Cloud** (via Nabu Casa), a privacy-conscious optional subscription service
that simplifies remote access, voice assistant integration, and secure external connections—without the need for complex
network configuration.

With its strong emphasis on **transparency, reliability, and community-driven development**, Home Assistant has become
a go-to solution for smart home enthusiasts, makers, and professionals. It empowers users to create **fully customized,
intelligent environments** while staying in control of how their data is collected, stored, and used.

Whether you're automating a few lights or building a fully autonomous home, Home Assistant provides a solid, flexible
foundation that grows with your smart home ambitions.`,
            links: [
                {
                    icon: "pi pi-github",
                    link: "https://github.com/home-assistant",
                    label: "GitHub"
                },
                {
                    img: "https://avatars.githubusercontent.com/u/13844975?s=200&v=4",
                    link: "https://www.home-assistant.io/",
                    label: "Homepage"
                }
            ],
            gallery: [
                {
                    images: [
                        ngi0Images.homeassistant_0,
                        ngi0Images.homeassistant_1,
                        ngi0Images.homeassistant_2
                    ]
                }
            ]
        },
        {
            header: "The Importance of User-Friendly IoT Automation",
            text: `
As IoT ecosystems become increasingly complex, the need for intuitive, user-friendly automation tools has never been
more critical. Platforms like Blockly, Pocketix, Node-RED, OpenHAB, and Home Assistant bridge the gap between technical
experts and everyday users, making it possible for anyone to design, configure, and control their smart environments
with minimal technical knowledge. By offering visual interfaces and low-code solutions, these tools empower users to
create intelligent systems, allowing them to focus on the functionality and usability of their IoT setups rather than
the intricacies of traditional programming.

Whether you're a novice looking to get started with IoT or an experienced developer seeking to streamline your
automation processes, these platforms provide the tools and flexibility needed to build the next generation of
connected systems.
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
