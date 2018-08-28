#Events
In this chapter, we will learn how to use forms in React.
##Simple Example
This is a simple example where we will only use one component. We are just adding onClick event that will trigger updateState function once the button is clicked.
```

```
##Child Events
When we need to update the state of the parent component from its child, we can create an event handler (updateState) in the parent component and pass it as a prop (updateStateProp) to the child component where we can just call it.,
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
       updateState() {
          this.setState({data: 'Data updated from the child component...'})
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

    render() {
          return (
             <div>
                <button onClick = {this.props.updateStateProp}>CLICK</button>
                <h3>{this.props.myDataProp}</h3>
             </div>
          );
       }
}
export default Content;
```