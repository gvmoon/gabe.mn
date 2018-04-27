# gabe_mn
## Getting Started

### Requirements
* [Python](https://www.python.org/downloads/) >= 2.7
* [Node](https://nodejs.org/en/download/) >= LTS
* [Yarn](https://yarnpkg.com/en/) Stable

### Optional Requirements
* [GitFlow](https://github.com/nvie/gitflow)

### Setup
These steps should be executed sequentially. For example, in the 'Installing Dependencies` section, you should already have opened a terminal (1.1) and changed your directory to the one where your project lives (1.3).

#### 1. Cloning the Repository
1.1. Open a terminal
  * [Windows](https://www.digitalcitizen.life/7-ways-launch-command-prompt-windows-7-windows-8)
  * [Mac](http://www.instructables.com/id/How-to-start-command-prompt-complete/)
  * [Ubuntu](https://askubuntu.com/questions/196212/how-do-you-open-a-command-line)
1.2. `git clone git@github.com:gvmoon/gabe.mn.git path/to/desired/local/directory`
1.3. `cd path/to/desired/local/directory`
1.4. If you have installed [GitFlow](https://github.com/nvie/gitflow)
	`git flow init -d`

#### 2. Installing Dependencies
2.1. Installing Python Dependencies
	2.1.1. Set up your python virtual environment
		* Python 2
			`virtualenv env`
		* Python 3
			`python3 -m venv env`
	2.1.2 Upgrade packaging tools.
		`env/bin/pip install --upgrade pip setuptools`
	2.1.3 Install the project in editable mode with its testing requirements.
		`env/bin/pip install -e ".[testing]"`
2.2. Installing Node dependencies
	2.2.1 `yarn install`
	2.2.2 `yarn run build`

#### 3. Running the Local Server
3.1 `env/bin/pserve config/development.ini`
	* This starts the server on [port 6543 of your local machine](http://localhost:6543)

