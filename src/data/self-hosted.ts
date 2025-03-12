import {ProjectCardType, ProjectPageType, DossierType} from "../types";

const SELF_HOSTED_CARDS: ProjectCardType[] = [];

const SELF_HOSTED_TAGS: string[] = [];

const PEER_TUBE: ProjectPageType = {
    pageTitle: "PeerTube",
    menuTitle: "PeerTube",
    projectDescription: [
        {
            tags: ["Open-Source", "Linux", "Self-Hosted", "Decentralized", "Federated (ActivityPub)", "Video Streaming", "Content Freedom", "P2P"],
            header: "PeerTube",
            text: `Self-Hosted video sharing and streaming platform with federation possibility and mobile apps.`,
        },
        {
            header: "Description",
            text: `PeerTube is a decentralized, open-source video hosting platform that allows users to host and share their own video content. It supports a federated network architecture, allowing independent instances to interconnect and communicate without reliance on a central server. PeerTube offers a scalable alternative to traditional, centralized big-tech video sharing services.`,
            gallery: [
                {
                    images: [
                        {
                            itemImageSrc: "https://www.fit.vut.cz/person/ilojda/public/ngi_test/screen/peertube1.png"
                        },
                        {
                            itemImageSrc: "https://www.fit.vut.cz/person/ilojda/public/ngi_test/screen/peertube2.png"
                        },
                        {
                            itemImageSrc: "https://www.fit.vut.cz/person/ilojda/public/ngi_test/screen/peertube3.png"
                        }
                    ]
                }
            ]

        },
        {
            header: "Comparison",
            text: `**Alternative to:** YouTube, Twitch, Vimeo, (partially TikTok)

✅ Decentralized archiecture and storage

✅ No reliance on a central company

✅ Reducing censorship risks/Community-driven governance

✅ No restrictive nor opaque content policies

✅ No extensive data collection

✅ You own your data

✅ P2P between clients to lower bandwidth consumption

❌ Expertise required for setup and maintenance

❌ Limited audience reach for now

❌ Scalability can be challenging

❌ Lacks advanced analytics`
        },
        {
            header: "Highlights",
            text: `
*   **Federation:** ★★★★★
    *   The server acts as a home for users across the entire PeerTube network using the ActivityPub protocol.
    *   Federation can be completely disabled, making it function like a standalone YouTube instance.
    *   Admins can mirror videos from other instances if needed.
*   **P2P (Peer-to-Peer):** ★★★★★
    *   Helps save bandwidth through peer-to-peer sharing.
    *   Can be disabled or set as opt-in at the server level.
    *   Developers warn that P2P may expose the IP addresses of viewers, which might not be suitable for sensitive content like political videos (recommended to disable in such cases).
*   **Video Playback:** ★★★★★
    *   The implementation provides smooth video playback.
    *   Supports HLS (HTTP Live Streaming).
    *   Allows easy embedding with simple embed URL generation, similar to YouTube.
    *   Videos can be downloaded directly.
*   **Video Upload:** ★★★★★
    *   Offers a smooth, AJAX-based upload process.
    *   Video details can be prepared while the upload is in progress.
*   **Installation:** ★★★☆☆
    *   Not highly complex but relatively time-consuming.
    *   A comprehensive installation script could simplify the process, though it might reduce the admin's control and understanding.
    *   No major issues encountered; instructions are clear and require minimal adjustments to work effectively.
    *   Fortunately, upgrading the system seems to be significantly less complicated than the initial installation.`
        },
        {
            header: "Compatibility",
            text: `
| Server OS Compatibility | Linux (e.g., Debian, Ubuntu, CentOS)                                     |
|-------------------------|--------------------------------------------------------------------------|
| Client Compatibility    | Modern web browsers (Chrome, Firefox, Safari, Edge); Android and iOS App |
| Programming Language    | JavaScript (Node.js)                                                     |
| Database                | PostgreSQL                                                               |
| Web Server              | Nginx (recommended), supports reverse proxy configurations               |
| Dependencies            | Node.js, Yarn, Python (>=3.8), ffmpeg, Redis, certbot, Git               |
| License                 | GNU AFFERO GENERAL PUBLIC LICENSE (free and open-source)                 |
| Federation Protocol     | ActivityPub (for decentralized networking)                               |
| Configuration           | Customizable via YAML configuration files                                |
| Community & Support     | Active community; extensive documentation                                |`
        },
        {
            header: "Installation and Practical Tips",
            text: `
#### Prerequisites

Begin with a fresh installation of Debian 12 (netinstall). First, install some essential packages:
\`\`\`
apt -y install curl sudo unzip
\`\`\`
Create a working directory for the PeerTube setup:
\`\`\`
cd  
mkdir peertube\\_setup  
cd peertube\\_setup
\`\`\`
#### Install NodeJS

Download and run the NodeJS setup script, then install NodeJS. Verify the installation with \`node -v\`:
\`\`\`
curl -fsSL https://deb.nodesource.com/setup\\_23.x -o nodesource\\_setup.sh  
bash ./nodesource\\_setup.sh  
apt -y install nodejs  
node -v
\`\`\`
#### Install Yarn

Install Yarn globally using npm and verify that it is installed with \`yarn --version\`:
\`\`\`
npm install --global yarn  
yarn --version
\`\`\`
#### Install Python (>=3.8)

Install Python development packages and pip. Verify that the Python version is at least 3.8:
\`\`\`
apt install python3-dev python3-pip python-is-python3  
python --version
\`\`\`
#### Install Additional Dependencies

Install the required dependencies for PeerTube. Verification commands are included where applicable:
\`\`\`
apt install certbot nginx ffmpeg postgresql postgresql-contrib openssl g++ make redis-server git cron wget  
ffmpeg -version  
g++ -v  
redis-server --version
\`\`\`
#### Start PostgreSQL and Redis

Start and enable the PostgreSQL and Redis services:
\`\`\`
systemctl start redis postgresql  
systemctl enable redis-server postgresql
\`\`\`
#### Install PeerTube

Create a dedicated user for PeerTube with no login shell. Then, set up the PostgreSQL database user and database, including the necessary extensions:
\`\`\`
useradd -m -d /var/www/peertube -s /usr/sbin/nologin -p peertube peertube  
passwd -l peertube  
sudo -u postgres createuser -P peertube
\`\`\`
Enter the password for the PeerTube database user when prompted.
\`\`\`
sudo -u postgres createdb -O peertube -E UTF8 -T template0 peertube\\_prod  
sudo -u postgres psql -c "CREATE EXTENSION pg\\_trgm;" peertube\\_prod  
sudo -u postgres psql -c "CREATE EXTENSION unaccent;" peertube\\_prod
\`\`\`
Switch to the PeerTube directory and create the required subdirectories with proper permissions:
\`\`\`
cd /var/www/peertube  
sudo -u peertube mkdir config storage versions  
sudo -u peertube chmod 750 config/
\`\`\`
Download and install the latest PeerTube version. The commands below are used exactly as provided:
\`\`\`
cd /var/www/peertube/versions VERSION=$(curl -s https://api.github.com/repos/chocobozzz/peertube/releases/latest | grep tag\\_name | cut -d '"' -f 4) && echo "Latest Peertube version is $VERSION"  
sudo -u peertube wget "https://github.com/Chocobozzz/PeerTube/releases/download/\${VERSION}/peertube-\${VERSION}.zip"  
sudo -u peertube unzip peertube-\${VERSION}.zip && sudo -u peertube rm peertube-\${VERSION}.zip  
cd /var/www/peertube  
sudo -u peertube ln -s versions/peertube-\${VERSION} ./peertube-latest  
cd ./peertube-latest && sudo -H -u peertube yarn install --production --pure-lockfile  
cd /var/www/peertube  
sudo -u peertube cp peertube-latest/config/default.yaml config/default.yaml  
sudo -u peertube cp peertube-latest/config/production.yaml.example config/production.yaml
\`\`\`
Generate a secret using:
\`\`\`
openssl rand -hex 32
\`\`\`
Edit the production configuration file. In it, set the hostname, adjust the database password (as configured above), and generate a secret with the command below. Insert the generated secret into the \`peertube:\` and \`secrets:\` section.
\`\`\`
nano config/production.yaml
\`\`\`
#### Configure the Web Server

Copy the provided Nginx configuration and modify it to suit your domain and local setup:
\`\`\`
cp /var/www/peertube/peertube-latest/support/nginx/peertube /etc/nginx/sites-available/peertube  
sed -i 's/\${WEBSERVER\\_HOST}//g' /etc/nginx/sites-available/peertube  
sed -i 's/\${PEERTUBE\\_HOST}/127.0.0.1:9000/g' /etc/nginx/sites-available/peertube  
ln -s /etc/nginx/sites-available/peertube /etc/nginx/sites-enabled/peertube
\`\`\`
If you wish to use a self-signed certificate (for public domains, using certbot is recommended), run the following commands to create one, then update your Nginx configuration:
\`\`\`
mkdir /etc/ssl/selfsigned  
chmod 700 /etc/ssl/selfsigned  
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/selfsigned/nginx-selfsigned.key -out /etc/ssl/selfsigned/nginx-selfsigned.crt
\`\`\`
Update the Nginx configuration to use the self-signed certificates:
\`\`\`
nano /etc/nginx/sites-enabled/peertube
\`\`\`
Ensure the following directives are present in the configuration file:
\`\`\`
ssl\\_certificate /etc/ssl/selfsigned/nginx-selfsigned.crt;  
ssl\\_certificate\\_key /etc/ssl/selfsigned/nginx-selfsigned.key;
\`\`\`
Restart Nginx after making these changes:
\`\`\`
systemctl restart nginx
\`\`\`
#### Enable Autostart for PeerTube

Copy the systemd service file, review it if necessary, then enable and start the PeerTube service. Monitor the logs for any errors:
\`\`\`
cp /var/www/peertube/peertube-latest/support/systemd/peertube.service /etc/systemd/system/  
nano /etc/systemd/system/peertube.service  
systemctl daemon-reload  
systemctl enable peertube  
systemctl start peertube  
journalctl -feu peertube
\`\`\`
If you encounter the error \`error: null value in column "nodeVersion" of relation "application" violates not-null constraint\`, ensure that Redis is running. If needed, drop the database and recreate the necessary extensions, then restart PeerTube. This deletes all PeerTube database, DO THIS ONLY IN A CASE OF A NEW PEERTUBE INSTALLATION!
\`\`\`
sudo -u postgres dropdb peertube\\_prod  
sudo -u postgres psql -c "CREATE EXTENSION pg\\_trgm;" peertube\\_prod  
sudo -u postgres psql -c "CREATE EXTENSION unaccent;" peertube\\_prod  
systemctl restart peertube
\`\`\`
#### Set Administrator Password

Reset the password for the administrator account (username \`root\`) by running the following command from the PeerTube directory:
\`\`\`
cd /var/www/peertube/peertube-latest && NODE\\_CONFIG\\_DIR=/var/www/peertube/config NODE\\_ENV=production npm run reset-password -- -u root
\`\`\`
#### Optimize TCP Performance (Optional)

For improved TCP performance, copy the provided sysctl configuration file and apply the settings:
\`\`\`
cp /var/www/peertube/peertube-latest/support/sysctl.d/30-peertube-tcp.conf /etc/sysctl.d/  
sysctl -p /etc/sysctl.d/30-peertube-tcp.conf
\`\`\`
For additional details, please refer to the following resources:

*   [PeerTube Dependencies Documentation](https://docs.joinpeertube.org/support/doc/dependencies#debian-ubuntu-and-derivatives)
*   [PeerTube Installation Guide](https://docs.joinpeertube.org/install/any-os#installation)
`
        },
        {
            header: "Other Details",
            text: `
**Developer:** [Chocobozzz](https://github.com/chocobozzz), [Framasoft](https://framasoft.org/), community`
        },


    ]
}

const OWNCAST: ProjectPageType = {
    pageTitle: "Owncast",
    menuTitle: "Owncast",
    projectDescription: [
        {
            tags: ["Open-Source", "Linux", "Windows", "MacOS", "Docker", "Self-Hosted", "Decentralized", "Live Video Streaming", "Content Freedom"],
            header: "Owncast",
            text: `An open-source platform for self-hosted live video streaming with viewer interaction (chat).`,
        },
        {
            header: "Description",
            text: `Owncast is an open-source, self-hosted platform for live video streaming. It allows creators to broadcast content directly to their audience. It features built-in chat and customization options. Everything in a form of a sleek web interface.`,
            gallery: [
                {
                    images: [
                        {
                            itemImageSrc: "https://www.fit.vut.cz/person/ilojda/public/ngi_test/screen/owncast1.png"
                        },
                        {
                            itemImageSrc: "https://www.fit.vut.cz/person/ilojda/public/ngi_test/screen/owncast2.png"
                        },
                        {
                            itemImageSrc: "https://www.fit.vut.cz/person/ilojda/public/ngi_test/screen/owncast3.png"
                        }
                    ]
                }
            ]

        },
        {
            header: "Comparison",
            text: `**Alternative to:** Twitch, YouTube

✅ Decentralized archiecture

✅ No reliance on a central company

✅ No restrictive nor opaque content policies

✅ No extensive data collection

✅ Robust streaming solution

✅ Easy setup and maintenance

✅ Official Docker container available

❌Limited audience reach for now

❌Lacks advanced analytics

❌High bandwidth required for larger events`
        },
        {
            header: "Highlights",
            text: `
*   **General:** ★★★★★
    *   Owncast includes an HTTP server as part of its implementation. If encrypted communication using HTTPS is needed, which is practically essential nowadays, an additional web server like Apache or NGINX must be installed to create a reverse proxy with TLS.
    *   The platform also has an integrated chat feature.
    *   In the administration web interface, it's possible to publish your server in the streamer registry, which can help attract more attention to your instance.
*   **Streaming:** ★★★★★
    *   The streaming is smooth. Owncast runs an FFmpeg process internally, which is well-configured to handle dynamic framerates and similar video properties that might change over streaming session (especially if the user plans to re-stream, for example, an IP camera for long periods of time).
    *   Re-encoding can be quite resource-intensive, so if the streaming source is suitable, it's better to enable passthrough mode. In the administration web interface, this can be enabled in Configuration -> Video -> Stream Output -> Edit the selected profile -> Advanced -> Video Passthrough -> Use video passthrough.
    *   A minor drawback is that it supports only one stream per server. However, this isn't a major issue since multiple servers can be run on different ports on the same hardware. For this setup, it's recommended to run owncast --help to explore configuration options and create a systemd service configuration accordingly (or even better, use an environment file holding the configuration for that instance).
    *   A feature I appreciate is the ability to add multiple stream profiles (though this demands more server resources), allowing users to choose from different video qualities in the player, similar to platforms like Twitch or YouTube.
*   **Video Playback:** ★★★★★
    *   The playback is very smooth. It's also possible to play the stream in VLC if you know the URL; in my case, the address was \`\`\`http://<server_address>:8080/hls/0/stream.m3u8\`\`\`.
*   **Installation:** ★★★★★
    *   The installation process is very straightforward using a script. Essentially, running Owncast requires two executable files: the Owncast itself and the FFmpeg binary, which is downloaded in the required version automatically using the installatin script.
    *   The configuration is stored in a database file that is created upon the first launch. It's strongly recommended to follow the installation process to ensure the server runs under a dedicated user account.`
        },
        {
            header: "Compatibility",
            text: `
| Server OS Compatibility | Linux, Windows, MacOS (Docker supported) |
| --- | --- |
| Client Compatibility    | Modern web browsers |
| Programming Language    | Go |
| Database                | SQLite (embedded) |
| Web Server              | Built-in HTTP server; administrators are encouraged to use a reverse proxy server to provide HTTPS |
| Dependencies            | ffmpeg |
| License                 | MIT License |
| Configuration           | AJAX-based Web Interface |
| Community & Support     | Active community; good documentation; install script and official Docker container available |`
        },
        {
            header: "Installation and Practical Tips",
            text: `
#### Prerequisites

Begin with a fresh installation of Debian 12 (netinstall). First, install some essential packages:
\`\`\`
apt -y install curl unzip sudo
\`\`\`
Next, create a directory for Owncast and navigate to it:
\`\`\`
mkdir /usr/local/bin/owncast
cd /usr/local/bin/owncast
\`\`\`
Create a dedicated user for running Owncast with no login shell and blocked account for security purposes:
\`\`\`
useradd -m -d /usr/local/bin/owncast -s /usr/sbin/nologin -p owncast owncast
passwd -l owncast
\`\`\`
Download and install Owncast as the newly created user:
\`\`\`
sudo -u owncast sh -c 'curl -s https://owncast.online/install.sh | bash'
\`\`\`
Set up the systemd service to manage Owncast:
\`\`\`
cd /etc/systemd/system
curl -s "https://raw.githubusercontent.com/owncast/owncast/refs/heads/develop/contrib/owncast-sample.service" >owncast-instance1.service
\`\`\`
Modify the service file to specify the correct paths and user:
\`\`\`
sed -i 's/\\[path to owncast directory\\]/\\/usr\\/local\\/bin\\/owncast\\/owncast/g' /etc/systemd/system/owncast-instance1.service
sed -i 's/\\[user to run owncast as\\]/owncast/g' /etc/systemd/system/owncast-instance1.service
sed -i 's/\\[group to run owncast as\\]/owncast/g' /etc/systemd/system/owncast-instance1.service
\`\`\`
Before starting the server, change the admin password:
\`\`\`
sed -i 's/ExecStart\\=.*/ExecStart=\\/usr\\/local\\/bin\\/owncast\\/owncast\\/owncast -adminpassword <your_new_password>/g' /etc/systemd/system/owncast-instance1.service
\`\`\`
Reload the systemd daemon to apply the changes, then enable and start the Owncast service:
\`\`\`
systemctl daemon-reload
systemctl enable owncast-instance1
systemctl start owncast-instance1
\`\`\`
After starting the server, make sure to change the default streaming key immediately. This and other settings made in the web interface will persist after server restarts. Navigate to http://<server_address>:8080/admin, login using username admin and your selected password and delete the default streaming key and add a new one in the Configuration -> Server Setup -> Stream Keys.

#### Streaming

To stream to Owncast without re-encoding, use the following FFmpeg command (only if the source stream is in an appropriate format):
\`\`\`
ffmpeg -i -codec copy -f flv "rtmp://<your_server_address>/live/<streaming_key>"
\`\`\`
For streaming with re-encoding (CPU intensive), use:
\`\`\`
ffmpeg -i -vcodec libx264 -preset veryfast -acodec aac -f flv "rtmp://<your_server_address>/live/<streaming_key>"
\`\`\`
After starting your stream, wait at least 30 seconds to ensure the stream has started properly and is visible on the web frontend.

If you want to save CPU resources on the Owncast server, you can disable server-side transcoding. Ensure your source is in the correct format, playable by the web interface. Proceed at your own risk and revert changes if streaming fails.

To disable server-side transcoding:

Go to Configuration -> Video -> Stream Output -> Edit the selected profile -> Advanced -> Video Passthrough -> enable Use video passthrough.

For additional details, please refer to the following resources:
*   [Owncast Installation](https://owncast.online/quickstart/installation/)
`
        },
        {
            header: "Other Details",
            text: `
**Developer:** [Gabe Kangas](https://gabekangas.com/project/owncast/), [Owncast](https://owncast.online/), community`
        },


    ]
}

const SELF_HOSTED_PROJECTS: ProjectPageType = {
    pageTitle: "Dossier about Office Applications and Productivity Tools",
    menuTitle: "Self-Hosting Dossier",
    projectDescription: [
        {
            header: "Self-Hosting: Taking Control of Your Digital World",
            text: `
Self-hosting is the practice of running your own software services instead of relying on third-party providers. This approach gives you complete control over your data, security, and customization. Popular self-hosted applications include email servers, cloud storage (like Nextcloud), and personal websites. By self-hosting, you reduce dependency on big tech companies, avoid subscription fees, and enhance privacy. However, it requires some technical knowledge to set up and maintain servers, whether on-premises or in the cloud.          `,
        },
        {
            header: "Self-Hosted Streaming  ",
            text: `
One powerful use case for self-hosting is media streaming. Instead of relying on services like Netflix or Spotify, you can run your own streaming server with tools like Jellyfin, Plex, or Emby. These platforms allow you to manage and stream your personal collection of movies, TV shows, and music across multiple devices. Self-hosted streaming eliminates restrictions like content removal and region locks, ensuring you always have access to your media. It also allows for better organization and streaming quality, tailored to your preferences.  
        `,
        },
        {
            header: "Challenges and Considerations",
            text: `
While self-hosting offers independence and security, it comes with challenges. You need to manage updates, security patches, and backups to prevent data loss or breaches. Hosting from home requires a stable internet connection and proper hardware, while cloud hosting involves additional costs. Despite these challenges, many tech enthusiasts find self-hosting rewarding, as it provides complete autonomy over their digital ecosystem.
        `,
        }
    ]
};

export const SELF_HOSTED_DOSSIER_PATHNAME = "self-hosted";

export const DOSSIER: DossierType = {
    pathName: SELF_HOSTED_DOSSIER_PATHNAME,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/LibreOffice_4.0_Writer_Icon.svg",
    header: "Self-Hosting",
    subheader: "Self-Hosting Dossier",
    tags: ["self-hosting", "privacy","Open-Source"],
    link: `/ngi0/${SELF_HOSTED_DOSSIER_PATHNAME}`,
    cards: SELF_HOSTED_CARDS,
    tagsDossierDetail: SELF_HOSTED_TAGS,
    projects: SELF_HOSTED_PROJECTS,
    detailedProjects: {
        "peer_tube": PEER_TUBE,
        "owncast": OWNCAST
    },
    comparisons: {}
};
