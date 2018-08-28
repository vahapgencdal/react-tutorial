import React from 'react';
import StateAndProps from './StateAndProps';

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
                <h2>{this.props.contentProp}</h2>
                <h1>{this.props.firstVal}</h1>
                <h2>{this.props.secondVal}</h2>
                <br/>
                <StateAndProps/>
            </div>
        );
    }
}
App.defaultProps = {
    firstVal: "firstVal header...",
    secondVal:"secondVal content...",
    headerProp:'',
    contentProp:''

};
export default App;