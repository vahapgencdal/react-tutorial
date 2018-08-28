#Router
In this chapter, we will learn how to set up routing for an app.
##Step 1 - Install a React Router
A simple way to install the react-router is to run the following code snippet in the command prompt window.
```
npm install react-router-dom 
```
##Step 2 - Add a Router
Now, we will add routes to the app. Instead of rendering App element like in the previous example, create a directory named as App and create files and named as main.js and App.js 
```
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';


class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <h2>Welcome to React Router Tutorial</h2>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/Login'}>Login</Link></li>
                    </ul>
                    <hr />

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Login' component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
```
##Step 3 - Create Components
In this step, we will create two components as (Home)and (Login) in App directory. 

- Home
```
import React, { Component } from 'react';

class Home extends Component {
   render() {
      return (
         <div>
            <h2>Home</h2>
         </div>
      );
   }
}
export default Home;
```
- Login
```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
   render() {
      return (
         <div>
            <h2>Login</h2>
         </div>
      );
   }
}
export default Login;
```