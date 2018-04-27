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


## Adding Content
### Creating a New Page
1. To create a new page, you can copy the `\_Template` directory located in `gabe\_mn/src/components/` to some new directory. For the rest of these instructions, I'll refer to this new directory as `NewPage`. `NewPage` will only have two files.
  * `index.vue`: Simply add html to the `middle` slot (there is a comment which indicates where is is). There is another slot called `bottom`. Typically you will just want your links to other pages to live here. This project also uses bootstrap 3, so feel free to use whatever classes are available.
  * `scss/index.scss`: This is the scss file imported into `index.vue`. Use it to style your page.

### Creating a New Route
Ok, so you've created a new page, how can you access it?
1. Open `gabe\_mn/src/js/index.js`
2. Copy the import statements of the form `import App from '@components/App` to another line in the same file that says `import NewPage from '@components/NewPage`
3. Add a new entry to the `routes` array that looks just like the others, except the `component` is `NewPage`.
  * The `path` key is the url of the new component you're naming. Something like `path: '/greg'` means that if I go to `localhost:6543/greg`, that is the page that should appear.
  * The `name` key is shorthand for your new route. Usually naming it similar to your path is the best idea
4. Open `gabe\_mn/src/components/MainLinks/index.vue`
5. In this file, update the `links` array (starting at line 25) to include your new path.
  * Do this by simply changing the `name` parameter of one of the links to the name you set in step 3.

### Compiling Files
After doing either of the activities listed above, you will need to rebuild your project. This project is built using the front-end development framework [Vue](https://vuejs.org/) and the js bundling tool [Webpack](https://webpack.js.org/).When you create a new Vue template, it must be compiled using Webpack into something a browser can understand. In order to do this compilation, you can do one of two things:


#### 1. One-off Builds
By running `yarn run build`, your project will build again, applying any changes to the js you have made or notifying you of any errors. After you have run this command you can refresh your browser. **Important**: Unline the `watch` command below `build` only runs once, so you will have to run the command each time you make a change to see that change reflected when you refresh your browser.

#### 2. Watch files for changes
By running `yarn run watch` from a terminal while in the same directory as your project (see 1.3 of 'Cloning a Repository'), Webpack will automatically watch the files it is aware of for changes. Any time it notices one of those files change it re-compiles evrything. After this is complete, you can simply reload your browser to see your changes.


