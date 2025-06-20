import {ProjectCardType, ProjectPageType, DossierType} from "@/types";

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
                            itemImageSrc: "/ngi0/img/self-hosted/peertube1.png"
                        },
                        {
                            itemImageSrc: "/ngi0/img/self-hosted/peertube2.png"
                        },
                        {
                            itemImageSrc: "/ngi0/img/self-hosted/peertube3.png"
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
};

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
                            itemImageSrc: "/ngi0/img/self-hosted/owncast1.png"
                        },
                        {
                            itemImageSrc: "/ngi0/img/self-hosted/owncast2.png"
                        },
                        {
                            itemImageSrc: "/ngi0/img/self-hosted/owncast3.png"
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
};

const NEXTCLOUD: ProjectPageType = {
    pageTitle: "Nextcloud",
    menuTitle: "Nextcloud",
    projectDescription: [
        {
            tags: ["Open-Source", "Linux", "Self-Hosted", "Decentralized", "Applications", "Own your data", "Calendar", "Mail", "Contacts"],
            header: "Nextcloud",
            text: `Open-source platform for cloud storage and collaboration, secure file sharing, data synchronization, including vast library of applications.`,
        },
        {
            header: "Description",
            text: `Nextcloud is an open-source cloud server and collaboration platform that allows users to securely store, share, and synchronize files across various devices. It offer extensive features such as document editing, calendar, contact management, mail client, etc. Designed for both individuals and organizations, Nextcloud provides full control over data, ensuring privacy.`,
            gallery: [
                {
                    images: [
                        {
                            itemImageSrc: "/ngi0/img/self-hosted/nextcloud1.png"
                        },
                        {
                            itemImageSrc: "/ngi0/img/self-hosted/nextcloud2.png"
                        },
                        {
                            itemImageSrc: "/ngi0/img/self-hosted/nextcloud3.png"
                        }
                    ]
                }
            ]

        },
        {
            header: "Comparison",
            text: `**Alternative to:** Google Drive and Google Docs, Google Calendar; Microsoft SharePoint and Microsoft Office 365; (partially also Dropbox)

✅ Full control over your data

✅ No extensive data collection and mining (its easier to meet GDPR and other regulatory and/or your company requirements)

✅ Highly customizable (vast library of applications that run inside the Nextcloud platform)

✅ Minimal technical knowledge needed (can be administrated from web interface; official Docker packages are available; BUT high responsibility to keep your data safe!)

✅ Android and iOS app available

❌High responsibility for security and backups (administrators must handle security updates, monitoring, and backups themselves)`
        },
        {
            header: "Highlights",
            text: `
*   **Usage:** ★★★★★
    *   The interface is user friendly and well prepared for those transitioning from Google Drive/Docs.
    *   A wide variety of applications can be installed directly from the web administration interface.
    *   Occasionally, I experienced slow response times (this could be an issue with my setup, but I doubt it; it significantly improved after installation of Redis server - also included in the Installation section).
    *   I encountered a problem with file locks preventing some files from being deleted. Setting up Redis immediately after installation (as suggested in the Installation section) resolved this issue.
*   **Web Interface:** ★★★★★
    *   Very easy to use and intuitive, with drag and drop functionality wherever possible (or at least where I expected it).
    *   Excellent language localization.
*   **Mobile App:** ★★★★★
    *   When connecting from a smartphone, the full server URL must be entered (e.g., \`\`\`https://<server_name>/nextcloud\`\`\` for our installation guide).
    *   Tested on Android, and it worked perfectly.
    *   The mobile app allows exceptions for self-signed certificates, which was useful during my test, as I installed on a private domain.
    *   Great language localization in the mobile app as well.
*   **Installation:** ★★★★★
    *   I chose to install Nextcloud via the PHP [installation script from Nextcloud's official site](https://nextcloud.com/install/#community-projects).
    *   The installation process was very fast and straightforward (please note, that it was a basic setup without PHP hardening on the server in place).
    *   The install script automatically detects missing PHP modules and provides a list of required dependencies (these are already included in the Installation and Practical Tips section).
    *   Fortunately, upgrading the system seems to be significantly less complicated than the initial installation.`
        },
        {
            header: "Compatibility",
            text: `
| Server OS Compatibility | Linux (e.g., Debian, Ubuntu, CentOS, SUSE); MacOS; Windows (Docker supported) |
| --- | --- |
| Client Compatibility    | Modern web browsers (Chrome, Firefox, Safari, Edge); Windows; Linux; MacOS; Android; iOS |
| Programming Language    | PHP, JavaScript |
| Database                | MySQL, MariaDB, PostgreSQL, SQLite |
| Web Server              | Apache, Nginx |
| Dependencies            | PHP (+ modules, plase see the install instructions), Redis (optionally) |
| License                 | GNU AFFERO GENERAL PUBLIC LICENSE (free and open-source) |
| Configuration           | Web-based Interface, CLI |
| Community & Support     | Active community; forums; GitHub; Enterprise Support available |`
        },
        {
            header: "Installation and Practical Tips",
            text: `
#### Prerequisites

The installation is performed on a clean Debian 12 (netinstall) system.

#### Web Server & PHP Setup
\`\`\`
apt -y install apache2 php libapache2-mod-php
a2enmod ssl
a2ensite default-ssl.conf
systemctl restart apache2
\`\`\`

If deploying in a production environment, it is strongly recommended to use Certbot or a similar tool to obtain Let's Encrypt certificates.

#### MariaDB SQL Server Installation

\`\`\`
apt install mariadb-server
mariadb-secure-installation
\`\`\`

Run the command and change the root password. Answer "yes" to the security-related questions.
\`\`\`
mariadb
\`\`\`
And now run the following commands inside the MariaDB terminal:
\`\`\`
create database nextcloud;
grant all privileges on nextcloud.* TO 'nextcloud'@'localhost' identified by '';
flush privileges;
\`\`\`

#### Nextcloud Setup

\`\`\`
apt -y install php-zip php-dom php-xml php-mbstring php-gd php-curl php-mysql
systemctl restart apache2
mkdir /var/www/html/nextcloud
cd /var/www/html/nextcloud
\`\`\`

Edit the Apache configuration file:
\`\`\`
nano /etc/apache2/sites-enabled/000-default.conf
\`\`\`

Add the following before the last VirtualHost statement:
\`\`\`
<Directory /var/www/html/nextcloud>
Options Indexes FollowSymLinks
AllowOverride All
Require all granted
</Directory>
\`\`\`

Adjust PHP settings: 1) set the PHP memory limit to at least 512MB in /etc/php/8.2/apache2/php.ini (find the directive memory_limit). 2) Turn off output buffering by setting the directive output_buffering to Off in the same file.
\`\`\`
systemctl restart apache2
wget "https://download.nextcloud.com/server/installer/setup-nextcloud.php"
chown www-data:www-data .
\`\`\`

Navigate to \`\`\`https://<server_address>/nextcloud/setup-nextcloud.php\`\`\` in your browser.

Set the installation directory to "\`\`\`.\`\`\`". After installation, set your admin password and enter the database credentials from the previous MariaDB setup step.

For security reasons, it is highly recommended to set the data directory outside of the webroot:
\`\`\`
mkdir /srv/nextcloud
chown www-data:www-data /srv/nextcloud
\`\`\`

During the initial setup, specify \`\`\`/srv/nextcloud\`\`\` as the data folder.

#### Redis Installation (for Better Caching)

Setting up Redis proved important in my case, as I otherwise encountered file lock issues that prevented me from deleting files.
\`\`\`
apt -y install redis php-redis
systemctl enable redis-server
systemctl start redis-server
\`\`\`

Edit the Nextcloud configuration file:
\`\`\`
nano /var/www/html/nextcloud/config/config.php
\`\`\`

Add the following lines at the end:
\`\`\`
'memcache.locking' => '\\OC\\Memcache\\Redis',
'memcache.distributed' => '\\OC\\Memcache\\Redis',
'memcache.local' => '\\OC\\Memcache\\Redis',
'redis' => [
    'host' => '127.0.0.1',
    'port' => '6379',
    'dbindex' => 0,
    'timeout' => 1.5,
    'read_timeout' => 1.5,
]
\`\`\`

Restart webserver to reload the changes:
\`\`\`
systemctl restart apache2
\`\`\`

References and Additional Info:
*   [Nextcloud Installation Admin Manual](https://docs.nextcloud.com/server/latest/admin_manual/installation/index.html)
`
        },
        {
            header: "Other Details",
            text: `
**Developer:** [Nextcloud GmbH](https://nextcloud.com/about/), community`
        },


    ]
};

const GARAGE: ProjectPageType = {
    pageTitle: "Garage",
    menuTitle: "Garage",
    projectDescription: [
        {
            tags: ["Open-Source", "Linux", "Self-Hosted", "Decentralized", "Storage", "Own your data", "Fault-Tolerance", "S3", "Cloud"],
            header: "Garage",
            text: `Garage is an open-source decentralized object storage system compatible with the S3 protocol, providing scalable, redundant and distributed storage.`,
        },
        {
            header: "Description",
            text: `Garage is a decentralized and distributed object storage system that is fully compatible with the S3 protocol. It is designed for high availability, scalability, and resilience, making it suitable for self-hosted cloud storage solutions. By distributing data across multiple nodes, Garage ensures redundancy and fault tolerance, preventing data loss even in case of hardware or connection failures.`,
            gallery: [
                {
                    images: [
                        {
                            itemImageSrc: "/ngi0/img/self-hosted/garage1.png"
                        },
                        {
                            itemImageSrc: "/ngi0/img/self-hosted/garage2.png"
                        },
                        {
                            itemImageSrc: "/ngi0/img/self-hosted/garage3.png"
                        }
                    ]
                }
            ]

        },
        {
            header: "Comparison",
            text: `**Alternative to:** Amazon AWS (backend); Google Drive (partially; backend); Microsoft SharePoint (partially; backend)

✅ Full control over your data

✅ No extensive data collection and mining (its easier to meet GDPR and other regulatory and/or your company requirements)

✅ Highly configurable 

✅ Built to work on unreliable hardware operating on unreliable network connection

✅ Thanks to S3 API/protocol its very versatile and usable in many applications

❌ For a starter a higher initial complexity`
        },
        {
            header: "Highlights",
            text: `
*   **Usage:** ★★★★★
    *   Identical data blocks are automatically deduplicated to optimize storage usage.
    *   Users can configure automatic data redundancy to store copies across different locations whenever possible.
    *   Garage offers a familiar interface compatible with AWS S3, integration is thus very straightforward.
    *   Can be easily connected to other open-source servers as a backend for content storage. More details are available in the [official documentation](https://garagehq.deuxfleurs.fr/documentation/connect/apps/).
*   **Installation:** ★★★★★
    *   Precompiled binaries are provided by the developers for easy installation.
    *   Both the server and administration tools are included in a single executable. Simply copying the binary to the system PATH completes the installation process.
    *   Users need to manually create a dedicated system user, set up storage directories, and configure systemd for service management.`
        },
        {
            header: "Compatibility",
            text: `
| Server OS Compatibility | Linux 386 or amd64; Linux arm or arm64; Docker packages available |
| --- | --- |
| Client Compatibility    | S3-compatible clients (e.g., awscli, s3fs, ...)  |
| Programming Language    | Rust |
| Database                | SQLite (embedded) |
| Web Server              | Built-in |
| Dependencies            | None |
| License                 | GNU AFFERO GENERAL PUBLIC LICENSE (free and open-source) |
| Federation              | Internal protocol (Garage-specific) |
| Configuration           | YAML-based (file) |
| Community & Support     | [deuxfleurs.fr](https://deuxfleurs.fr/) active community |`
        },
        {
            header: "Installation and Practical Tips",
            text: `
#### Prerequisites

The installation is performed on a clean Debian 12 (netinstall) system.

#### Installation

Download and install the Garage binary:
\`\`\`
wget "https://garagehq.deuxfleurs.fr/_releases/v1.0.1/x86_64-unknown-linux-musl/garage" -O /usr/local/bin/garage
chmod +x /usr/local/bin/garage
\`\`\`

Create a dedicated system user, set permissions:
\`\`\`
useradd -M -d /srv/garaged -r -s /usr/sbin/nologin -p garaged garaged
passwd -l garaged
mkdir /srv/garaged
chown garaged:garaged /srv/garaged
chmod 700 /srv/garaged
\`\`\`

Create and configure the /etc/garage.toml file (replace 127.0.0.1 with your server's IP address):
\`\`\`
cat > /etc/garage.toml < metadata_dir = "/srv/garaged/meta"
data_dir = "/srv/garaged/data"
db_engine = "sqlite"
replication_factor = 1
rpc_bind_addr = "0.0.0.0:3901"
rpc_public_addr = "127.0.0.1:3901"
rpc_secret = "$(openssl rand -hex 32)"
[s3_api]
s3_region = "garage"
api_bind_addr = "0.0.0.0:3900"
root_domain = ".s3.server1.test.internal"
[s3_web]
bind_addr = "0.0.0.0:3902"
root_domain = ".web.server1.test.internal"
index = "index.html"
[admin]
api_bind_addr = "0.0.0.0:3903"
admin_token = "$(openssl rand -base64 32)"
metrics_token = "$(openssl rand -base64 32)"
EOF
\`\`\`

Create a systemd service file:
\`\`\`
nano /etc/systemd/system/garage.service
\`\`\`

Add the following content:
\`\`\`
[Unit]
Description=Garage Data Store
After=network-online.target
Wants=network-online.target

[Service]
Environment='RUST_LOG=garage=info' 'RUST_BACKTRACE=1'
ExecStart=/usr/local/bin/garage server
User=garaged
Group=garaged
ProtectHome=true
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target

Reload systemd, enable and start the service:
systemctl daemon-reload
systemctl enable garage
systemctl start garage
\`\`\`

#### Basic Setup (One Server)

Show the status:
\`\`\`
garage status
\`\`\`

Initialize the cluster:
\`\`\`
garage layout assign -z loc1 -c 1G <node_id_from_the_previous_command>
\`\`\`

Show the current (not yet commited) layout:
\`\`\`
garage layout show
\`\`\`

Commit the layout version:
\`\`\`
garage layout apply --version <layout_version_from_the_previous_command>
\`\`\`

Create a bucket and access key (bucket is an analogy to "volume" for object-oriented storage systems):
\`\`\`
garage bucket create my-bucket
garage key create my-bucket-key
garage bucket allow --read --write --owner my-bucket --key my-bucket-key
\`\`\`

Check assigned keys:
\`\`\`
garage bucket info my-bucket
\`\`\`

View key ID and secret:
\`\`\`
garage key info my-bucket-key --show-secret
\`\`\`

#### Testing with AWS CLI Tool (Optional)

When testing Python libraries or tools, I always setup Python virtual environment (execute on your client):
\`\`\`
python3 -m venv ~/.python_venv/awscli
source ~/.python_venv/awscli/bin/activate
python3 -m pip install awscli
\`\`\`

Retrieve credentials (execute on your server):
\`\`\`
garage key info my-bucket-key --show-secret
\`\`\`

Create AWS CLI configuration file (execute on your client):
\`\`\`
nano ~/.python_venv/awscli/awsrc
\`\`\`

Add the following configuration (execute on your client):
\`\`\`
export AWS_ACCESS_KEY_ID='<key_id>'
export AWS_SECRET_ACCESS_KEY='<secret>'
export AWS_DEFAULT_REGION='garage'
export AWS_ENDPOINT_URL='http://<server_address>:3900'
\`\`\`

Activate AWS CLI settings (execute on your client):
\`\`\`
source ~/.python_venv/awscli/awsrc
\`\`\`

Basic AWS CLI operations (execute on your client):

List all your buckets:
\`\`\`
aws s3 ls
\`\`\`

List files in "my-bucket":
\`\`\`
aws s3 ls s3://my-bucket
\`\`\`

Copy a file to the bucket (this allows both "upload" and "download" based on the paths order):
\`\`\`
aws s3 cp <local_file> s3://my-bucket/<dest_file>
\`\`\`

Delete a file from the bucket:
\`\`\`
aws s3 rm s3://my-bucket/<file_to_delete>
\`\`\`

Sync a folder to the bucket:
\`\`\`
aws s3 sync ./<local_folder> s3://my-bucket
\`\`\`

#### More Advanced Setup (Multiple Servers)

Install another server, copying the rpc_secret to the /etc/garage.toml configuration file from the first server configuration file (the rpc_secret serves to authenticate server in the cloud).
\`\`\`
garage status
garage layout assign -z loc2 -c 1G <node_id_from_the_previous_command>
\`\`\`

See the not-yet-commited layout version:
\`\`\`
garage layout show
\`\`\`

And commit it:
\`\`\`
garage layout apply --version <layout_version_from_the_previous_command>
\`\`\`

Get node ID from this new server:
\`\`\`
garage node id
\`\`\`

And connect this second server to the cluster (run the following command on one of the servers already connected to the cloud, for our case, this is the first server):
\`\`\`
garage node connect <node_id_of_server_2>
\`\`\`

Verify cluster nodes (can be run on any of the servers connected to the cloud; should list all the servers - two servers for our example):
\`\`\`
garage status
\`\`\`

#### Advanced Setup (Multiple Servers and Data Redundancy)

To enable redundancy (replication factor 2 for our 2 servers):
\`\`\`
systemctl stop garage
rm /srv/garaged/meta/cluster_layout
\`\`\`

Edit \`\`\`/etc/garage.toml\`\`\`:
\`\`\`
nano /etc/garage.toml
\`\`\`

Set:
\`\`\`
replication_factor = 2
\`\`\`

Restart Garage:
\`\`\`
systemctl start garage
\`\`\`

Apply changes and rebalance:
\`\`\`
garage repair --yes rebalance
\`\`\`

This will last depending on the amount of data to replicate; this procedure is not recommended for running instances; I am not responsible from losing your data, please consult the documentation for live installations!

References and Additional Info:
*   [Garage Quick Start Guide](https://garagehq.deuxfleurs.fr/documentation/quick-start/)
*   [Garage Configuration Manual](https://garagehq.deuxfleurs.fr/documentation/reference-manual/configuration/)
`
        },
        {
            header: "Other Details",
            text: `
**Developer:** [deuxfleurs.fr](https://deuxfleurs.fr/), community`
        },
    ]
};

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
    image: "/ngi0/img/self-hosted/Network-server.svg",
    header: "Self-Hosting",
    subheader: "Self-Hosting Dossier",
    tags: ["Self-Hosting", "Privacy","Open-Source"],
    link: `/${SELF_HOSTED_DOSSIER_PATHNAME}`,
    cards: SELF_HOSTED_CARDS,
    tagsDossierDetail: SELF_HOSTED_TAGS,
    projects: SELF_HOSTED_PROJECTS,
    detailedProjects: {
        "peer_tube": PEER_TUBE,
        "owncast": OWNCAST,
        "nextcloud": NEXTCLOUD,
        "garage": GARAGE
    },
    comparisons: {}
};
