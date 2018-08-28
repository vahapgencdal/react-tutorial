#Refs
The ref is used to return a reference to the element. Refs should be avoided in most cases, however, they can be useful when we need DOM measurements or to add methods to the components.
##Using Refs
The following example shows how to use refs to clear the input field. ClearInput function searches for element with ref = "myInput" value, resets the state, and adds focus to it after the button is clicked.
```
import React from 'react';

class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    updateState(e) {
        this.setState({data: e.target.value});
    }
    clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    render() {
        return (
            <div>
                <input value = {this.state.data} onChange = {this.updateState}
                       ref = "myInput"></input>
                <button onClick = {this.clearInput}>CLEAR</button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}
export default Home;
```
once the button is clicked, the input will be cleared and focused.