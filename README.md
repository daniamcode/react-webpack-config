The idea of this repo is to configure a React App from scratch, without using create-react-app

I follow https://www.youtube.com/watch?v=ansUGkcrhwY

(4 main webpack concepts: entry point, output, loaders and plugins)

1. npm init -y -> creates the package.json
2. We create index.html and README file
3. We serve it using servor (see "serve:first" command on package.json) (not needed for the webpack project, but nice to learn)
4. Use git
    - git init
    - git add --all
    - git commit -m "initial commit"
    - git remote add origin https://github.com/daniamcode/react-webpack-config.git
    - git push
5. Add a index.js with some code (I have to export it, and say on the index.html that the script is of module type)   
6. npm i webpack webpack-cli -D
7. Add "build": "webpack" in the scripts section of the package.json
8. npm run build, and the dist folder is generated (src/index.js is the default entry point, and dist/main.js the output)
9. Add a index.html file in the dist folder (changing index.js for main.js on the script, without type="module"), and run serve:second 
10. Add "dev": "webpack --mode development" to the package.json to stop using servor at some point, and specify --mode production on build script
11. Add --watch, so the main.js on dist is generated automatically
12. npm i react react-dom and add react to my src/index.js. Now we need a loader for webpack in order to compile jsx
13. npm i @babel/core babel-loader @babel/preset-react -D, so that webpack con compile jsx from React. A preset is a bunch of plugins
14. create a webpack.config.js file with the babel rule for react (presets: ["@babel/preset-react"])
15. Add more rules, for example to consider the optional chaining case, that is new javascript syntax. For that, I will use a plugin: npm install --save-dev @babel/plugin-syntax-optional-chaining. NOTE: This plugin is included in @babel/preset-env
16. npm i @babel/preset-env -D, so all ES versions of javascript are considered
17. Add some more things to webpack.config, like the output file
18. npm i html-webpack-plugin -D, to create our dist/index.html automatically, and add it to the webpack.config.js file, under plugins
19. Delete dist/index.html and type npm run dev, and we see that dist/index.html is created automatically. This is necessary, because output is main.js by default, but we can change it and put a hash to make it unique if we need to cache it or whatever, but then we need to update our dist/index.html to reference to the right js file
20. Change the title and add a template to HTMLWebpackPlugin on the package.json.js, so it will detect our <div id="app">. We have to delete th <script type="module" src="./index.js"></script> on src/index.html so the template won't use it