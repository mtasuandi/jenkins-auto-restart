# Jenkins Autorestart

This is personal stuff, but feel free to use and modify the script. In our development server, sometimes Jenkins suddenly stopped working and returned ERR_CONNECTION_REFUSED. The service was active but Jenkins not accessible from web browser even there's no build process running.

This script basically need to run in a cronjob. The script will make a request to Jenkins url and then if the request returned and error, it will do SSH to the Jenkins server and then run command <strong>service jenkins restart</strong>.

## Configuration

Clone the repository and then run

```
npm install
```

to install all required dependencies.

Configure <strong>jenkins_auto_restart.js</strong> file with the correct setting.

Make sure the <strong>jenkins_auto_restart.sh</strong> is executable

```
chmod +x jenkins_auto_restart.sh
```

Add this command to cronjob

```
. /path/to/jenkins_auto_restart.sh
```

Everytime the Jenkins url not accessible via web browser, it will automatically restart the Jenkins service and send an email with log timestamp.

## License
The MIT License (MIT).
