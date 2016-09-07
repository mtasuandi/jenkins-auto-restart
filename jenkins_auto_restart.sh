# If node doesn't work, you have to provide the full path of node
# Depends on where is the node installed on your server, you can try to locate the node location with command "whereis node"
# If your node installed via nvm, the path usually something like /home/user/.nvm/versions/node/v5.6.0/bin/node
# If your node wasn't managed by nvm, the path usually something like /usr/local/bin/node

node path/to/jenkins_auto_restart.js # use this command if you can get node running from a cronjob

# path/to/node path/to/jenkins_auto_restart.js # uncomment this and set the correct path if you can not access node from cronjob