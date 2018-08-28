#Components
In this chapter, we will learn how to combine components to make the app easier to maintain.

##Stateless Example
Our first component in the following example is **App**. This component is owner of **Header** and **Content**. We are creating **Header** and **Content** separately and just adding it inside JSX tree in our **App** component.  
Only **App** component needs to be exported.
- App
```
class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Home/>
            </div>
        );
    }
}
export default App;
```
- Header
```
import React from 'react';

class Header extends React.Component{


    render(){
        return(<div>
            <h1>Header</h1>
        </div>);
    }
}
export default Header;
```
- Content
```
import React from 'react';
class Content extends React.Component {

    render() {
        return (
            <div>
                <h2>Content</h2>
            </div>
        );
    }
}
export default Content;
```
- Home
```
import React from 'react';

class Home extends React.Component{
    render(){
        return(<div>
            <h1>Home</h1>
        </div>);
    }
}
export default Home;
```
##Stateful Example  
In this example, we will set the state for owner component (**App**). The **Header** component is just added like in the last example since it doesn't need any state.  
Instead of content tag, we are creating table and **tbody** elements, where we will dynamically insert **TableRow** for every object from the data array.
- 
```
import React from 'react';
import Header from 'Header';
import TableRow from 'TableRow';

class Stateful extends React.Component{

    constructor(){
        super();
        this.state = {
            data:[
                    {
                        "id":1,
                        "name":"Foo",
                        "age":"20"
                    },
                    {
                        "id":2,
                        "name":"Bar",
                        "age":"30"
                    },
                    {
                        "id":3,
                        "name":"Baz",
                        "age":"40"
                    }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}
```
- TableRow
```
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}
export default TableRow;
```

##Note
Note − Notice that we are using key = {i} inside map() function. This will help React to update only the necessary elements instead of re-rendering the entire list when something changes.  
It is a huge performance boost for larger number of dynamically created elements.