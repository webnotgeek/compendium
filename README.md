# 

## Installing dependencies & running up
to work with this boilerplae you needs to install some dependencies to run the options you select.
For this job, run this command in your shell

```
$ npm run start
$ npm run code
```

### Other available npm commands

```
$ npm run build //build the project without serving
```

## File Structure

This boilerplate will create a set of files and folders

```

├── dist/
├── src/
│    ├──  assets/
│    │    ├──  gulp/
│    │    │    ├── tasks/
│    │    │    ├── config.js
│    │    │    └── helpers.js
│    │    ├──  fonts/
│    │    ├──  icons/
│    │    ├──  images/
│    │    ├──  js/
│    │    ├──  styles/
│    │    │    ├──  components/
│    │    │    │    ├──  _buttons.scss
│    │    │    │    ├──  _footer.scss
│    │    │    │    ├──  _forms.scss
│    │    │    │    ├──  _header.scss
│    │    │    │    └──  _nav.scss
│    │    │    ├──  screens/
│    │    │    │    ├──  _base.scss
│    │    │    │    └──  screen_1.scss
│    │    │    ├──  _variables.scss
│    │    │    ├──  _reset.scss
│    │    │    ├──  _mixins.scss
│    │    │    ├──  vendors.scss
│    │    │    └──  main.scss
│    │    └──  vendor/
│    └──  screen_1.html
├── .editorcofig
├── .gitattributes
├── .gitignore
├── .project.conf
├── gulpfile.js
├── LICENSE
├── package.json
└── README.md
```

## Gulp Config file

You have a config file located at `gulp/config.js` that enables you to add thrid-party libraries easily.

### SCSS Directories

You can add paths to `scssDirectories` key, who will add this directories to the `includePath` of `sass` compilation. So you now can `@include` whatever you want in your `./src/assets/styles/vendor.scss` file:

#### Example
```
sassDirectories: [
  'path/to/scss/directory/scss',
  'another/brick/in/the/scss_wall'
]
```

### Script Files

You can add file paths to `scriptFiles` key, who will add this concat, and minify to the `./dist/assets/js/vendors.js` file.

#### Example
```
scriptFiles: [
  './path/to/jquery/library/slider.js',
  './welcome/to/the/machine.js'
]
```

### Font Files

You can add file paths to `fontFiles` key, who will move this fonts to the correct folder `./dist/assets/fonts`.
You can point to specific files or complete directories using wildcards (`**/*`)

#### Example
```
fontFiles: [
  './path/to/bootstrap/fonts/**/*',
  './shine/on/crazy/font.ttf'
]
```

## Available Gulp Commands

### Helpers
* `$ gulp clean` Clean /dist directory

### Static Files
* `$ gulp main:static` Compile static files (images, icons)
* `$ gulp main:images` Move images
* `$ gulp main:icons` Create SVG Icon System

### Fonts Files
* `$ gulp main:fonts` Move project fonts
* `$ gulp vendor:fonts` Move vendors fonts

### Scripts
* `$ gulp main:scripts` Concat, uglify and move project JS files
* `$ gulp vendor:scripts` Concat, uglify and move vendors JS files

### Styles
* `$ gulp main:styles` Compile, concat, autoprefix, minify and move [SCSS, Less, Stylus] project files
* `$ gulp vendor:styles` Compile, concat, autoprefix, minify and move [SCSS, Less, Stylus] vendor files



### Daemons
* `$ gulp watch` **Watch** your files and autoexecute gulp directives
* `$ gulp serve` **Watch** your files and **serve** with an HTTP server and **Sync** with your prefered browser _awesome!_

### Delivery
 * `$ gulp build` Execute all the gulp directives and makes a `.zip` file with the latest code.

### EditorConfig Please note we use
[EditorConfig](http://editorconfig.org/) to help us try to standarize
stuff like tabs spaces and such. Please visit the link provided to
download a plugin for your text editor of choice like Vim, Coda, Atom,
Sublime Text, Visual Studio, Emacs Notepad++ and more.

---

