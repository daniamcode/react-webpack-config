The idea of this repo is to configure a project from scratch, without using create-react-app

I follow https://www.youtube.com/watch?v=ansUGkcrhwY

1. npm init -y -> creates the package.json
2. We create index.html and README file
3. We serve it using servor (see "serve" command on package.json) (not needed for the webpack project, but nice to learn)
4. Use git
    - git init
    - git add --all
    - git commit -m "initial commit"
    - git remote add origin https://github.com/daniamcode/react-webpack-config.git
    - git push
5. Add a index.js with some code (I have to export it, and say on the index.html that the script is of module type)   
6. npm i webpack webpack-cli -D
7. Add "build": "webpack" in the scripts section of the package.json
8. npm run build, and the dist folder is generated (src/index.js is the default entry point)