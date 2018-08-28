#Forms
In this chapter, we will learn how to use forms in React.
##Simple Example
In the following example, we will set an input form with **value = {this.state.data}**. This allows to update the state whenever the input value changes. 
We are using **onChange** event that will watch the input changes and update the state accordingly. 
```
import React from 'react';

class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }
    render() {
        return (
            <div>
                <input type = "text" value = {this.state.data}
                       onChange = {this.updateState} />
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}
export default Home;
```
##Complex Example
In the following example, we will see how to use forms from child component. 
**onChange** method will trigger state update that will be passed to the child input **value** and rendered on the screen. 
A similar example is used in the Events chapter. Whenever we need to update state from child component, 
we need to pass the function that will handle updating (**updateState**) as a prop (**updateStateProp**).

- Complex
```
import React from 'react';
import Content from './Content';

class ComplexExample extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }
    render() {
        return (
            <div>
                <Content myDataProp = {this.state.data}
                         updateStateProp = {this.updateState}></Content>
            </div>
        );
    }
}
export default ComplexExample;
```
- Content
```
import React from 'react';

class Content extends React.Component{

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }


    render() {
        return (
            <div>
                <input type = "text" value = {this.props.myDataProp}
                       onChange = {this.props.updateStateProp} />
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}
export default Content;
```
<!-- blank line -->
----
when you do any change on input you will see component reload every change.
This because of react reload component when the child component data change.
you will see the Content logs like below:
```
Component WILL RECIEVE PROPS!
index.js:22 Component WILL UPDATE!
index.js:22 Component DID UPDATE!
```