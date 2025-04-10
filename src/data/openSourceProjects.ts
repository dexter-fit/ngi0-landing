import {ProjectCardType} from "../types";

const openSourceProjects: {[key: string]: ProjectCardType} = {
    mosquitto: {
        image: "https://mosquitto.org/images/mosquitto-text-side-28.png",
        header: "Mosquitto",
        subheader: "An open source MQTT broker",
        tags: ["MQTT"],
        link: "https://mosquitto.org/"
    },
    vernemq: {
        image: "https://avatars.githubusercontent.com/u/11618711?s=200&v=4",
        header: "VerneMQ",
        subheader: "Clustering MQTT for high availability and scalability",
        tags: ["MQTT"],
        link: "https://github.com/vernemq/vernemq"
    },
    emqx: {
        image: "https://avatars.githubusercontent.com/u/25221711?s=200&v=4",
        header: "emqx",
        subheader: "The most scalable open-source MQTT broker for IoT, IIoT, and connected vehicles",
        tags: ["MQTT"],
        link: "https://github.com/emqx/emqx"
    },

    rabbitmq: {
        image: "https://www.rabbitmq.com/img/rabbitmq-logo-with-name.svg",
        header: "RabbitMQ",
        subheader: "One broker to queue them all",
        tags: ["MQTT", "AMQP"],
        link: "https://www.rabbitmq.com/"
    },
    activemq: {
        image: "https://activemq.apache.org/assets/img/activemq_logo_black_small.png",
        header: "Apache ActiveMQ",
        subheader: "Flexible & Powerful Open Source Multi-Protocol Messaging",
        tags: ["MQTT", "AMQP"],
        link: "https://activemq.apache.org/"
    }
}

export {openSourceProjects};
