import React from 'react';
import SimpleExample from './SimpleExample';
import ComplexExample from "./ComplexExample";

class App extends React.Component {

    render() {
        return (
            <div>
                <SimpleExample/>
                <ComplexExample/>
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