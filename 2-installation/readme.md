#ReactJS ─ Environment Setup 
In this chapter, we will show you how to set up an environment for successful React
development.  
##Step 0 -Install Nodejs and Npm
- Go to the Node.js Downloads page
- Download Node.js for macOS by clicking the "Macintosh Installer or Windows installer" option
- Run the downloaded Node.js .pkg, .exe Installer
- Run the installer, including accepting the license, selecting the destination, and authenticating for the install.
- You're finished! To ensure Node.js has been installed, run node -v in your terminal - you should get something like v6.9.4
               
after installed nodejs To easily update your version of npm, you can run the following command:
                       
$ sudo npm install npm --global // Update the `npm` CLI client   
for windows user you dont need any command for npm.
 

##Step 1 -Install Global Packages
We will need to install several packages for this setup. We will need some of the babel
plugins, so let's first install babel by running the following code in the command
prompt window.  

run the following command: `npm install -g babel`  
than this command : `npm install -g babel-cli`  

##Step 2 -Create the Root Folder 
The root folder will be named reactApp and we will place it on Desktop. After the folder
is created, we need to open it and create empty package.json file inside by running npm
init from the command prompt and follow the instructions.   
run this command : `mkdir react-app`  
than this commands: `cd react-app` than `npm init`  

##Step 3 -Add Dependencies and Plugins 
We will use webpack bundler in these tutorial. Let's install webpack and webpack-devserver.  
for build react files: `npm install webpack --save`  
for build and deploy react files: `npm install webpack-dev-server --save`  
react files: `npm install react --save`  
react dom : `npm install react-dom --save`  
babel plugins  
`npm install babel-core`  
`npm install babel-loader`  
`npm install babel-preset-react`  
`npm install babel-preset-es2015`  

##Step 4 -Create the Files  
Let's create several files that we need. It can be added manually or using the command
prompt.  
`touch index.html`  
`touch app.js`  
`touch main.js`  
`touch webpack.config.js`  
  
##Step 5 -Set Compiler, Server and Loaders  
Open webpack-config.js file and add the following code. We are setting webpack entry
point to be main.js. Output path is the place where bundled app will be served. We are
also setting the development server to 8080 port. You can choose any port you want.
And lastly, we are setting babel loaders to search for js files, and use es2015 and react
presets that we installed before.  
```
var config = {
 entry: './main.js',
 output: {
    path:'/',
    filename: 'index.js',
 },
 devServer: {
    inline: true,
    port: 8080
 },
 module: {
    loaders: [
      {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
      }
    ]
  }
 }
 module.exports = config;
 ```
Open the package.json and delete **"test" "echo \"Error: no test specified\" && exit
1"** inside **"scripts"** object. We are deleting this line since we will not do any testing in this
tutorial. Let's add the **start** command instead.  
`"start": "webpack-dev-server --hot"`  

Now, we can use **npm start** command to start the server. **--hot** command will add live
reload after something is changed inside our files so we don't need to refresh the browser
every time we change our code.  

##Step 6 -index.html
This is just regular HTML. We are setting **div id = "app"** as a root element for our app
and adding index.js script, which is our bundled app file.  
```
<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <title>React App</title>
    </head>
    <body>
        <div id = "app"></div>
        <script src = "index.js"></script>
    </body>
</html>
 ```
##Step 7 -App.js and main.js 
This is the first React component. We will explain React components in depth in a
subsequent chapter. This component will render **Hello World!!!.**  
```
import React from 'react';
class App extends React.Component {
 render() {
 return (
 <div>
 Hello World!!!
 </div>
 );
 }
}
export default App;
```
We need to import this component and render it to our root **App** element, so we can see
it in the browser.  
**main.js**  
``` 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

ReactDOM.render(<App />, document.getElementById('app'));
```
**Note**: Whenever you want to use something, you need to **import** it first. If you want to
make the component usable in other parts of the app, you need to **export** it after creation
and **import** it in the file where you want to use it.  

##Step 8 -Running the Server
The setup is complete and we can start the server by running the following command.  
`npm start` 
It will show the port we need to open in the browser. In our case, it is
**http://localhost:8080/**. After we open it, we will see the following output.