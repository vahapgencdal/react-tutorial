#Component API
In this chapter, we will explain React component API. We will discuss three methods: **setState()**, **forceUpdate** and **ReactDOM.findDOMNode().**  
In new ES6 classes, we have to manually bind this. We will use **this.method.bind(this)** in the examples.
##Set State
**setState()** method is used to update the state of the component.  
This method will not replace the state, but only add changes to the original state.
```
import React from 'react';

class Home extends React.Component{
    constructor() {
        super();

        this.state = {
            data: []
        };
        this.setStateHandler = this.setStateHandler.bind(this);
    };
    setStateHandler() {
        let item = "setState..."
        let myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
    };
    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
}
export default Home;
```

##Force Update
You can also set default property values directly on the component constructor instead of adding it to the reactDom.render() element.
just you will add below code to after App class.

```
import React from 'react';

class ForceUpdate extends React.Component{
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    //This is binding basic mode for update.
    forceUpdateHandler() {
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <button onClick = {this.forceUpdateHandler}>FORCE UPDATE 1</button>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }
}
export default ForceUpdate;
```

##Find Dom Node
For DOM manipulation, we can use ReactDOM.findDOMNode() method. First we need to import react-dom.
```
import React from 'react';
import ReactDOM from 'react-dom';

class FindDomNode extends React.Component {
    constructor() {
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };
    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'blue';
    }
    render() {
        return (
            <div>
                <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
                <div id = "myDiv">NODE</div>
            </div>
        );
    }
}
export default FindDomNode;
```
The color of myDiv element changes to green, once the button is clicked.