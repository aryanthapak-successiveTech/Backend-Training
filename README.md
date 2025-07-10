# Set up a stable LTS version of Node.js (optional if already set up).

## Here are the steps to install the stable LTS version of Node.js:

### Update Package Lists:  sudo apt update

### Install Node.js:

 sudo apt install curl

 curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

### After running the setup script, you can install Node.js and npm:

 sudo apt install nodejs

### Verify Installation

 node -v

 npm -v